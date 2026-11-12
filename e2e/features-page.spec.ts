import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("features page covers each feature, each launch sport and offers the trial along the way", async ({
  page,
}) => {
  await page.goto("features/");

  for (const id of ["profiles", "results", "highlights", "discovery", "ai"]) {
    await expect(page.getByTestId(`feature-${id}`)).toBeVisible();
  }

  const sports = page.getByRole("region", { name: "Built for your sport" });
  for (const sport of ["football", "basketball", "baseball-softball"]) {
    await expect(
      sports.getByTestId(`sport-${sport}`).getByRole("listitem").first(),
    ).toBeVisible();
  }

  const trialCtas = page.locator(`main a[href="${config.signupUrl}"]`);
  await expect(trialCtas).toHaveCount(2);
  await expect(trialCtas.nth(0)).toHaveAttribute("data-cta", "features-mid");
  await expect(trialCtas.nth(1)).toHaveAttribute("data-cta", "final");
});
