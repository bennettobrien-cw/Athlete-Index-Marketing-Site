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

test("testimonials are clearly marked placeholders until real ones exist", async ({
  page,
}) => {
  await page.goto("./");
  const testimonials = page.getByRole("region", { name: "What athletes say" });

  await expect(testimonials.getByTestId("placeholder-note")).toBeVisible();
  const cards = testimonials.getByRole("figure");
  await expect(cards).toHaveCount(3);
  for (const card of await cards.all()) {
    await expect(card).toHaveAttribute("data-placeholder", "true");
  }
});
