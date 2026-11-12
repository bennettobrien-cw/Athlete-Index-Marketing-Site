import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("parents page gives honest odds with a source, safety controls and the age policy", async ({
  page,
}) => {
  await page.goto("parents/");

  const odds = page.getByRole("table", { name: /Odds of playing in college/ });
  await expect(odds.getByRole("rowheader")).toHaveCount(5);
  await expect(page.getByTestId("odds-source")).toHaveAttribute(
    "href",
    "https://www.ncaa.org/student-athletes/probability-of-competing-beyond-high-school",
  );

  await expect(
    page
      .getByRole("region", { name: "Safe for families" })
      .getByRole("listitem"),
  ).toHaveCount(6);
  await expect(page.getByTestId("min-age-policy")).toBeVisible();
  await expect(
    page
      .getByRole("region", { name: "Parent questions" })
      .getByTestId("faq-item"),
  ).toHaveCount(5);

  const trial = page.locator(`main a[data-cta="parents"]`);
  await expect(trial).toHaveAttribute("href", config.signupUrl);
});
