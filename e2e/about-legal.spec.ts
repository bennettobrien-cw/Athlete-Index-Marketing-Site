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
