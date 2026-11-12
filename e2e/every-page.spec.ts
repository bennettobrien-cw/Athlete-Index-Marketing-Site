import { test, expect, type APIRequestContext } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { draftLegalPaths } from "../src/content/legal";

const wcag22aa = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];
const breakpoints = [375, 768, 1280, 1920];

async function indexedPaths(request: APIRequestContext, baseURL: string) {
  const index = await (await request.get("sitemap-index.xml")).text();
  const sitemapUrl = index.match(/<loc>(.+?)<\/loc>/)![1];
  const sitemap = await (
    await request.get(new URL(sitemapUrl).pathname)
  ).text();
  const paths = [...sitemap.matchAll(/<loc>(.+?)<\/loc>/g)].map(
    ([, loc]) => new URL(loc).pathname,
  );
  expect(paths).toContain(new URL(baseURL).pathname);
  return paths;
}

async function everyPagePath(request: APIRequestContext, baseURL: string) {
  return [
    ...(await indexedPaths(request, baseURL)),
    ...draftLegalPaths,
    "no-such-page/",
  ];
}

test("every page meets WCAG 2.2 AA", async ({ page, request, baseURL }) => {
  for (const path of await everyPagePath(request, baseURL!)) {
    await page.goto(path);
    const { violations } = await new AxeBuilder({ page })
      .withTags(wcag22aa)
      .analyze();
    expect(
      violations.map(({ id, nodes }) => ({
        id,
        targets: nodes.map((node) => node.target.join(" ")),
      })),
      path,
    ).toEqual([]);
  }
});

test("every page's headings step down one level at a time", async ({
  page,
  request,
  baseURL,
}) => {
  for (const path of await everyPagePath(request, baseURL!)) {
    await page.goto(path);
    const levels = await page
      .getByRole("heading")
      .evaluateAll((headings) =>
        headings.map((heading) => Number(heading.tagName.slice(1))),
      );
    const skips = levels
      .map((level, index) => [levels[index - 1] ?? 1, level])
      .filter(([previous, level]) => level > previous + 1);
    expect(skips, path).toEqual([]);
  }
});

test("every indexed page has its own title, description, canonical URL and one h1", async ({
  page,
  request,
  baseURL,
}) => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  const indexed = await indexedPaths(request, baseURL!);

  for (const path of indexed) {
    await page.goto(path);
    const title = await page.title();
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");

    expect(titles.has(title), `${path} title is unique`).toBe(false);
    expect(descriptions.has(description!), `${path} description`).toBe(false);
    expect(description!.length, `${path} description`).toBeGreaterThan(50);
    expect(new URL(canonical!).pathname, `${path} canonical`).toBe(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    titles.add(title);
    descriptions.add(description!);
  }
  expect(indexed.length).toBeGreaterThanOrEqual(2);
});

test("no page scrolls sideways or cuts off content at any breakpoint", async ({
  page,
  request,
  baseURL,
}) => {
  for (const path of await everyPagePath(request, baseURL!)) {
    for (const width of breakpoints) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(path);
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      );
      expect(overflow, `${path} at ${width}px`).toBe(0);

      const cutOff = await page.evaluate(() => {
        const viewportWidth = document.documentElement.clientWidth;
        return [...document.body.querySelectorAll("*")]
          .filter((element) => !element.closest("[aria-hidden='true']"))
          .filter((element) => element.getClientRects().length > 0)
          .filter(
            (element) =>
              element.getBoundingClientRect().right > viewportWidth + 0.5,
          )
          .map(
            (element) =>
              `${element.tagName.toLowerCase()}: ${element.textContent!.trim().slice(0, 40)}`,
          );
      });
      expect(cutOff, `${path} at ${width}px`).toEqual([]);
    }
  }
});

test("no page jumps around while slow fonts arrive", async ({
  page,
  request,
  baseURL,
}) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.route("**/*.woff2", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.continue();
  });
  await page.addInitScript(() => {
    const shifts = { total: 0 };
    (window as unknown as { layoutShift: typeof shifts }).layoutShift = shifts;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as unknown as {
        value: number;
        hadRecentInput: boolean;
      }[]) {
        if (!entry.hadRecentInput) shifts.total += entry.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
  });

  for (const path of await everyPagePath(request, baseURL!)) {
    await page.goto(path);
    await page.waitForTimeout(1000);
    const shift = await page.evaluate(
      () =>
        (window as unknown as { layoutShift: { total: number } }).layoutShift
          .total,
    );
    expect(shift, path).toBeLessThan(0.1);
  }
});
