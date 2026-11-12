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

test("pricing preview shows both plans, the trial terms and links to full pricing", async ({
  page,
}) => {
  await page.goto("./");
  const pricing = page.getByRole("region", { name: "Simple, honest pricing" });

  const athlete = pricing.getByTestId("plan-athlete");
  await expect(athlete.getByTestId("plan-cta")).toHaveAttribute(
    "href",
    config.signupUrl,
  );
  await expect(athlete.getByTestId("plan-cta")).toHaveAttribute(
    "data-cta",
    "pricing-athlete",
  );
  await expect(athlete.getByTestId("trial-terms")).toBeVisible();

  await expect(
    pricing.getByTestId("plan-recruiter").getByTestId("plan-cta"),
  ).toHaveAttribute("href", new URL("recruiters/", config.siteUrl).pathname);
  await expect(pricing.getByTestId("pricing-link")).toHaveAttribute(
    "href",
    new URL("pricing/", config.siteUrl).pathname,
  );
});
