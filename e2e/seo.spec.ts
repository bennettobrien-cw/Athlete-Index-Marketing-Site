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
