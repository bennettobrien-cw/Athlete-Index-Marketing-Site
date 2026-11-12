import { test, expect, type Page } from "@playwright/test";
import { config } from "../src/config";

async function recordAnalyticsEvents(page: Page) {
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
  return events;
}

test("clicking a trial CTA records where it was clicked", async ({ page }) => {
  const events = await recordAnalyticsEvents(page);
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

test("switching audience tab records which audience was chosen", async ({
  page,
}) => {
  const events = await recordAnalyticsEvents(page);

  await page.goto("./");
  await page
    .getByRole("tablist", { name: "Who it's for" })
    .getByRole("tab", { name: "Parents" })
    .click();

  await expect
    .poll(() => events)
    .toContainEqual(["audience_tab", { props: { tab: "parents" } }]);
});

test("opening a FAQ question records which one", async ({ page }) => {
  const events = await recordAnalyticsEvents(page);

  await page.goto("./");
  await page.getByTestId("faq-question").nth(2).click();

  await expect
    .poll(() => events)
    .toContainEqual(["faq_open", { props: { question: "How do I cancel?" } }]);
});

test("sending a form records which form was sent", async ({ page }) => {
  const events = await recordAnalyticsEvents(page);
  await page.clock.install();
  await page.route("https://formspree.io/**", (route) =>
    route.fulfill({ json: { ok: true } }),
  );

  await page.goto("contact/");
  const form = page.getByRole("form", { name: "Contact us" });
  await form.getByLabel("Name", { exact: true }).fill("Sam Rivera");
  await form.getByLabel("Email", { exact: true }).fill("sam@example.com");
  await form.getByLabel("Message", { exact: true }).fill("Hello");
  await page.clock.fastForward(10_000);
  await form.getByRole("button", { name: "Send message" }).click();

  await expect
    .poll(() => events)
    .toContainEqual(["form_submit", { props: { form: "contact-form" } }]);
});
