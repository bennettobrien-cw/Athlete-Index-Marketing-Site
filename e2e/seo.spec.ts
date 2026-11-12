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
