import { test, expect, type APIRequestContext } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const wcag22aa = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];
const breakpoints = [375, 768, 1280, 1920];

async function everyPagePath(request: APIRequestContext, baseURL: string) {
  const index = await (await request.get("sitemap-index.xml")).text();
  const sitemapUrl = index.match(/<loc>(.+?)<\/loc>/)![1];
  const sitemap = await (
    await request.get(new URL(sitemapUrl).pathname)
  ).text();
  const paths = [...sitemap.matchAll(/<loc>(.+?)<\/loc>/g)].map(
    ([, loc]) => new URL(loc).pathname,
  );
  expect(paths).toContain(new URL(baseURL).pathname);
  return [...paths, "no-such-page/"];
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
