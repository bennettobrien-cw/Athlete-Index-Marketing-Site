import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("hero leads with the headline, the trial and a way in for recruiters", async ({
  page,
}) => {
  await page.goto("./");
  const hero = page.getByTestId("hero");

  await expect(hero.getByRole("heading", { level: 1 })).toHaveText(
    "Get seen. Get recruited.",
  );
  await expect(hero.getByTestId("hero-subhead")).toBeVisible();

  const trial = hero.getByRole("link", { name: "Start free trial" });
  await expect(trial).toHaveAttribute("href", config.signupUrl);
  await expect(trial).toHaveAttribute("data-cta", "hero");
  await expect(hero.getByTestId("trial-terms")).toBeVisible();

  await expect(
    hero.getByRole("link", { name: "See how it works" }),
  ).toHaveAttribute("href", "#how-it-works");
  await expect(hero.getByTestId("recruiter-strip")).toHaveAttribute(
    "href",
    new URL("recruiters/", config.siteUrl).pathname,
  );
});

test("hero shows a sample profile with verified and self-reported results", async ({
  page,
}) => {
  await page.goto("./");
  const profile = page.getByRole("figure", { name: "Sample athlete profile" });

  await expect(profile.getByTestId("sample-badge")).toBeVisible();
  await expect(profile.getByTestId("result-verified").first()).toBeVisible();
  await expect(
    profile.getByTestId("result-self-reported").first(),
  ).toBeVisible();
  await expect(profile.getByTestId("highlight-video")).toBeVisible();
});

test("proof strip marks every unproven number as a placeholder", async ({
  page,
}) => {
  await page.goto("./");
  const proof = page.getByTestId("proof-strip");

  await expect(proof.getByTestId("placeholder-note")).toBeVisible();
  const stats = proof.getByTestId("proof-stat");
  await expect(stats).toHaveCount(3);
  for (const stat of await stats.all()) {
    await expect(stat).toHaveAttribute("data-placeholder", "true");
  }
});
