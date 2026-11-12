import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("header links home, to each audience page, to log in and to the trial", async ({
  page,
}) => {
  await page.goto("./");
  const header = page.getByRole("banner");
  const nav = header.getByRole("navigation", { name: "Main" });

  await expect(
    header.getByRole("link", { name: "Athlete Index home" }),
  ).toHaveAttribute("href", new URL(config.siteUrl).pathname);
  for (const [name, path] of [
    ["Features", "features/"],
    ["Pricing", "pricing/"],
    ["Parents", "parents/"],
    ["Recruiters", "recruiters/"],
  ]) {
    await expect(nav.getByRole("link", { name, exact: true })).toHaveAttribute(
      "href",
      new URL(path, config.siteUrl).pathname,
    );
  }
  await expect(header.getByRole("link", { name: "Log in" })).toHaveAttribute(
    "href",
    config.appUrl,
  );
  await expect(
    header.getByRole("link", { name: "Start free trial" }),
  ).toHaveAttribute("href", config.signupUrl);
});

test("on a phone the nav opens from a menu button and closes with Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("./");
  const menuButton = page.getByRole("button", { name: "Menu" });
  const mobileNav = page.getByRole("navigation", { name: "Mobile" });

  const headerCta = page
    .getByRole("banner")
    .getByRole("link", { name: "Start free trial" });
  const ctaLineHeight = await headerCta.evaluate((el) =>
    parseFloat(getComputedStyle(el).lineHeight),
  );
  const ctaPadding = await headerCta.evaluate(
    (el) =>
      parseFloat(getComputedStyle(el).paddingTop) +
      parseFloat(getComputedStyle(el).paddingBottom),
  );
  expect((await headerCta.boundingBox())!.height).toBe(
    ctaLineHeight + ctaPadding,
  );

  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(mobileNav).toBeHidden();

  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(mobileNav.getByRole("link", { name: "Pricing" })).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: "Log in" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(mobileNav).toBeHidden();
  await expect(menuButton).toBeFocused();
});

test("footer links to every page, the legal drafts and says we are not the NCAA", async ({
  page,
}) => {
  await page.goto("./");
  const footer = page.getByRole("contentinfo");

  for (const [name, path] of [
    ["Features", "features/"],
    ["Pricing", "pricing/"],
    ["Parents", "parents/"],
    ["Recruiters", "recruiters/"],
    ["About", "about/"],
    ["Contact", "contact/"],
    ["Privacy Policy", "privacy/"],
    ["Terms of Service", "terms/"],
  ]) {
    await expect(
      footer.getByRole("link", { name, exact: true }),
    ).toHaveAttribute("href", new URL(path, config.siteUrl).pathname);
  }
  await expect(footer.getByTestId("ncaa-disclaimer")).toBeVisible();
  await expect(footer.getByTestId("copyright")).toHaveText(
    `© ${new Date().getFullYear()} Athlete Index`,
  );
});
