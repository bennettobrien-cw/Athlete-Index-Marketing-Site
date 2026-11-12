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

test("audience tabs show one tailored panel at a time, each with its own CTA", async ({
  page,
}) => {
  await page.goto("./");
  const tabs = page.getByRole("tablist", { name: "Who it's for" });
  const tab = (name: string) => tabs.getByRole("tab", { name });

  await expect(tab("Athletes")).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toHaveCount(1);

  for (const [name, href, cta] of [
    ["Athletes", config.signupUrl, "audience-athletes"],
    ["Parents", config.signupUrl, "audience-parents"],
    ["Coaches", config.signupUrl, "audience-coaches"],
    ["Recruiters", new URL("recruiters/", config.siteUrl).pathname, null],
  ] as const) {
    await tab(name).click();
    await expect(tab(name)).toHaveAttribute("aria-selected", "true");
    const panel = page.getByRole("tabpanel", { name });
    await expect(panel).toBeVisible();
    await expect(panel.getByRole("listitem")).toHaveCount(3);
    const panelCta = panel.getByTestId("audience-cta");
    await expect(panelCta).toHaveAttribute("href", href);
    if (cta) await expect(panelCta).toHaveAttribute("data-cta", cta);
  }
});

test("audience tabs follow the keyboard: arrows wrap, Home and End jump", async ({
  page,
}) => {
  await page.goto("./");
  const tab = (name: string) =>
    page.getByRole("tablist", { name: "Who it's for" }).getByRole("tab", {
      name,
    });

  await tab("Athletes").focus();
  for (const [key, expected] of [
    ["ArrowRight", "Parents"],
    ["End", "Recruiters"],
    ["ArrowRight", "Athletes"],
    ["ArrowLeft", "Recruiters"],
    ["Home", "Athletes"],
  ]) {
    await page.keyboard.press(key);
    await expect(tab(expected)).toBeFocused();
    await expect(tab(expected)).toHaveAttribute("aria-selected", "true");
  }
});

test("home page ends with a final call to start the trial", async ({
  page,
}) => {
  await page.goto("./");
  const band = page.getByTestId("final-cta");

  await expect(band.getByRole("heading", { level: 2 })).toBeVisible();
  const trial = band.getByRole("link", { name: "Start free trial" });
  await expect(trial).toHaveAttribute("href", config.signupUrl);
  await expect(trial).toHaveAttribute("data-cta", "final");
  await expect(band.getByTestId("trial-terms")).toBeVisible();
});
