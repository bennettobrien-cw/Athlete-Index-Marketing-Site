import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("an unknown URL shows a 404 page that leads back home and to a trial", async ({
  page,
}) => {
  const response = await page.goto("no-such-page/");

  expect(response?.status()).toBe(404);
  await expect(page).toHaveTitle(/not found/i);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex",
  );
  await expect(page.getByTestId("not-found-home")).toHaveAttribute(
    "href",
    new URL(config.siteUrl).pathname,
  );
  const signup = page.getByTestId("not-found-signup");
  await expect(signup).toHaveAttribute("href", config.signupUrl);
  await expect(signup).toHaveAttribute("data-cta", "not-found");
});
