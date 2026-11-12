import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("home page has a title, description and canonical URL", async ({
  page,
}) => {
  await page.goto("./");

  await expect(page).toHaveTitle(/Athlete Index/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /.{50,}/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    config.siteUrl,
  );
});

test("home page has Open Graph and Twitter card tags", async ({
  page,
  request,
}) => {
  await page.goto("./");
  const meta = (key: string) =>
    page.locator(`meta[property="${key}"], meta[name="${key}"]`);

  await expect(meta("og:title")).toHaveAttribute("content", /Athlete Index/);
  await expect(meta("og:description")).toHaveAttribute("content", /.{50,}/);
  await expect(meta("og:url")).toHaveAttribute("content", config.siteUrl);
  await expect(meta("og:type")).toHaveAttribute("content", "website");
  await expect(meta("twitter:card")).toHaveAttribute(
    "content",
    "summary_large_image",
  );

  const image = await meta("og:image").getAttribute("content");
  expect(image).toMatch(/^https:\/\//);
  const imagePath = new URL(image!).pathname;
  const response = await request.get(imagePath);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toBe("image/png");
});

test("robots.txt points crawlers to a sitemap that lists the home page", async ({
  request,
}) => {
  const robots = await (await request.get("robots.txt")).text();
  const sitemapUrl = robots.match(/^Sitemap: (.+)$/m)?.[1];
  expect(sitemapUrl).toBe(new URL("sitemap-index.xml", config.siteUrl).href);

  const index = await (await request.get(new URL(sitemapUrl!).pathname)).text();
  const sitemapPath = new URL(index.match(/<loc>(.+?)<\/loc>/)![1]).pathname;
  const sitemap = await (await request.get(sitemapPath)).text();
  expect(sitemap).toContain(`<loc>${config.siteUrl}</loc>`);
});

test("home page describes the organization, website and app as JSON-LD", async ({
  page,
}) => {
  await page.goto("./");

  const blocks = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const graph = blocks.flatMap((text) => JSON.parse(text)["@graph"] ?? []);
  const byType = (type: string) => graph.find((node) => node["@type"] === type);

  expect(byType("Organization")).toMatchObject({
    name: "Athlete Index",
    url: config.siteUrl,
    logo: expect.stringMatching(/^https:\/\//),
  });
  expect(byType("WebSite")).toMatchObject({ url: config.siteUrl });
  expect(byType("SoftwareApplication")).toMatchObject({
    name: "Athlete Index",
    url: config.appUrl,
    applicationCategory: "SportsApplication",
  });
});

test("home FAQ structured data matches the questions on the page", async ({
  page,
}) => {
  await page.goto("./");

  const blocks = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const faqPage = blocks
    .flatMap((text) => JSON.parse(text)["@graph"] ?? [])
    .find((node) => node["@type"] === "FAQPage");
  const structured = faqPage.mainEntity.map(
    (entry: { name: string; acceptedAnswer: { text: string } }) => [
      entry.name,
      entry.acceptedAnswer.text,
    ],
  );

  const visible = await page
    .getByTestId("faq-item")
    .evaluateAll((items) =>
      items.map((item) => [
        item.querySelector("summary")!.firstChild!.textContent!.trim(),
        item.querySelector("[data-testid=faq-answer]")!.textContent!.trim(),
      ]),
    );
  expect(visible).toHaveLength(6);
  expect(structured).toEqual(visible);
});
