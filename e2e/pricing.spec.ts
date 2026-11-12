import { test, expect } from "@playwright/test";
import { config } from "../src/config";

const pricingUrl = new URL("pricing/", config.siteUrl).href;

test("pricing page has its own title, description and canonical URL", async ({
  page,
  request,
}) => {
  await page.goto("pricing/");

  await expect(page).toHaveTitle(/^Pricing \| Athlete Index$/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /.{50,}/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    pricingUrl,
  );
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const sitemap = await (await request.get("sitemap-0.xml")).text();
  expect(sitemap).toContain(`<loc>${pricingUrl}</loc>`);
});
