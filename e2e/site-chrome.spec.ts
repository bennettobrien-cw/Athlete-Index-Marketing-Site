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
