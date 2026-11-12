import { test, expect } from "@playwright/test";
import { config } from "../src/config";

test("clicking a trial CTA records where it was clicked", async ({ page }) => {
  const events: unknown[][] = [];
  await page.exposeFunction("recordAnalyticsEvent", (...args: unknown[]) =>
    events.push(args),
  );
  await page.addInitScript(() => {
    const record = (window as unknown as Record<string, Function>)
      .recordAnalyticsEvent;
    Object.defineProperty(window, "plausible", {
      value: (...args: unknown[]) => record(...args),
    });
  });
  await page.route(`${config.signupUrl}/**`, (route) =>
    route.fulfill({ body: "app" }),
  );

  await page.goto("./");
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Start free trial" })
    .click();

  await expect
    .poll(() => events)
    .toContainEqual([
      "cta_click",
      { props: { location: "header", label: "Start free trial" } },
    ]);
});
