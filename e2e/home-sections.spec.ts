import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("features section covers the five core features and links to the full list", async ({
  page,
}) => {
  await page.goto("./");
  const section = page.getByTestId("features");

  await expect(section.getByRole("article")).toHaveCount(5);
  for (const testId of [
    "feature-profiles",
    "feature-results",
    "feature-highlights",
    "feature-discovery",
    "feature-ai",
  ]) {
    await expect(
      section.getByTestId(testId).getByRole("heading", { level: 3 }),
    ).toBeVisible();
  }
  await expect(
    section.getByTestId("feature-ai").getByTestId("ai-label"),
  ).toBeVisible();
  await expect(section.getByTestId("features-link")).toHaveAttribute(
    "href",
    new URL("features/", config.siteUrl).pathname,
  );
});
