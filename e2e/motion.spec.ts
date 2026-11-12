import { test, expect, type Page } from "@playwright/test";

async function recordCounterValues(page: Page) {
  await page.addInitScript(() => {
    const seen: string[] = [];
    (window as unknown as { counterValues: string[] }).counterValues = seen;
    new MutationObserver(() => {
      const counter = document.querySelector("[data-count-to]");
      if (counter && seen.at(-1) !== counter.textContent) {
        seen.push(counter.textContent!);
      }
    }).observe(document, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  });
}

const counterValues = (page: Page) =>
  page.evaluate(
    () => (window as unknown as { counterValues: string[] }).counterValues,
  );

test("the 40-yard time runs up like a stopwatch and stops on the result", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await recordCounterValues(page);
  await page.goto("./");

  await expect
    .poll(async () => (await counterValues(page)).length)
    .toBeGreaterThan(5);
  await expect
    .poll(async () => (await counterValues(page)).at(-1))
    .toBe("4.48");
});
