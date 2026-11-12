import { test, expect } from "@playwright/test";
import { config } from "../src/config";

const pricingUrl = new URL("pricing/", config.siteUrl).href;

test("pricing page has its own title, description and canonical URL", async ({
  page,
  request,
}) => {
  await page.goto("pricing/");

  await expect(page).toHaveTitle(/^Pricing \| Athlete Index$/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /.{50,}/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    pricingUrl,
  );
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const sitemap = await (await request.get("sitemap-0.xml")).text();
  expect(sitemap).toContain(`<loc>${pricingUrl}</loc>`);
});

test("billing switch shows the athlete plan's monthly or annual price, without JavaScript", async ({
  browser,
}) => {
  const page = await browser.newPage({ javaScriptEnabled: false });
  await page.goto("pricing/");
  const athlete = page.getByTestId("plan-athlete");
  const billing = page.getByRole("radiogroup", { name: "Billing" });

  await expect(billing.getByRole("radio", { name: /Monthly/ })).toBeChecked();
  await expect(athlete.getByTestId("price-monthly")).toBeVisible();
  await expect(athlete.getByTestId("price-annual")).toBeHidden();

  await billing.getByText(/Annual/).click();
  await expect(athlete.getByTestId("price-annual")).toBeVisible();
  await expect(athlete.getByTestId("price-monthly")).toBeHidden();
  await page.close();
});

test("comparison table spells out what each plan includes", async ({
  page,
}) => {
  await page.goto("pricing/");
  const table = page.getByRole("table", { name: "Compare plans" });

  await expect(table.getByRole("columnheader")).toHaveText([
    "Feature",
    "Athlete",
    "Recruiter",
  ]);
  const rows = table
    .getByRole("row")
    .filter({ has: page.getByRole("rowheader") });
  expect(await rows.count()).toBeGreaterThanOrEqual(8);
  const cellWords = await table
    .getByRole("cell")
    .evaluateAll((cells) =>
      cells.map((cell) => cell.textContent!.replace(/[✓✕]/g, "").trim()),
    );
  expect(cellWords).not.toContain("");
  expect(cellWords).toContain("Included");
  expect(cellWords).toContain("Not included");
});

test("pricing page explains the trial, renewal and cancellation step by step", async ({
  page,
}) => {
  await page.goto("pricing/");
  const trial = page.getByRole("region", { name: "How the free trial works" });

  await expect(trial.getByRole("listitem")).toHaveCount(4);
  await expect(trial.getByTestId("auto-renew-terms")).toBeVisible();
});

test("pricing FAQ answers billing questions", async ({ page }) => {
  await page.goto("pricing/");
  const faq = page.getByRole("region", { name: "Pricing questions" });

  await expect(faq.getByTestId("faq-item")).toHaveCount(6);
});
