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
