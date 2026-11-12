import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("safety band states the minimum-age policy and points parents to their page", async ({
  page,
}) => {
  await page.goto("./");
  const safety = page.getByRole("region", { name: "Safe for families" });

  await expect(safety.getByRole("listitem")).toHaveCount(6);
  await expect(safety.getByTestId("min-age-policy")).toBeVisible();
  await expect(safety.getByTestId("parents-link")).toHaveAttribute(
    "href",
    new URL("parents/", config.siteUrl).pathname,
  );
});
