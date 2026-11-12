import { test, expect } from "@playwright/test";

test("home page leads with the headline", async ({ page }) => {
  await page.goto("./");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Get seen. Get recruited.",
  );
});
