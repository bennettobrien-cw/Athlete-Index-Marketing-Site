import { test, expect } from "@playwright/test";

test("pages use the brand colors and self-hosted fonts", async ({ page }) => {
  const thirdPartyFontRequests: string[] = [];
  page.on("request", (request) => {
    if (/fonts\.(googleapis|gstatic)\.com/.test(request.url())) {
      thirdPartyFontRequests.push(request.url());
    }
  });

  await page.goto("no-such-page/");

  const body = page.locator("body");
  await expect(body).toHaveCSS("background-color", "rgb(14, 14, 16)");
  await expect(body).toHaveCSS("color", "rgb(255, 255, 255)");
  await expect(body).toHaveCSS("font-family", /^"Space Grotesk Variable"/);
  await expect(page.locator("h1")).toHaveCSS(
    "font-family",
    /^"Archivo Variable"/,
  );
  const loadedDisplayFaces = await page.evaluate(
    async () =>
      (await document.fonts.load('italic 900 48px "Archivo Variable"')).length,
  );
  expect(loadedDisplayFaces).toBeGreaterThan(0);
  expect(thirdPartyFontRequests).toEqual([]);
});
