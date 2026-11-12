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
