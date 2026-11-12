import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("about page states the mission and five honesty principles", async ({
  page,
}) => {
  await page.goto("about/");

  await expect(page.getByTestId("mission")).toBeVisible();
  await expect(
    page
      .getByRole("region", { name: "What we stand for" })
      .getByRole("listitem"),
  ).toHaveCount(5);
  await expect(page.locator(`main a[data-cta="final"]`)).toHaveAttribute(
    "href",
    config.signupUrl,
  );
});

for (const [path, keySection] of [
  ["privacy/", "Children's privacy"],
  ["terms/", "Subscriptions, free trials and cancellation"],
]) {
  test(`${path} is a clearly marked, unindexed draft covering ${keySection}`, async ({
    page,
    request,
  }) => {
    await page.goto(path);

    await expect(page.getByTestId("legal-draft-banner")).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex",
    );
    await expect(
      page.getByRole("heading", { level: 2, name: keySection }),
    ).toBeVisible();

    const sitemap = await (await request.get("sitemap-0.xml")).text();
    expect(sitemap).not.toContain(new URL(path, config.siteUrl).href);
  });
}
