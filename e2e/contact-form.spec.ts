import { test, expect } from "@playwright/test";

test("submitting an empty contact form flags each required field and sends nothing", async ({
  page,
}) => {
  const posts: string[] = [];
  await page.route("https://formspree.io/**", (route) => {
    posts.push(route.request().url());
    return route.fulfill({ status: 200, json: { ok: true } });
  });
  await page.goto("contact/");
  const form = page.getByRole("form", { name: "Contact us" });

  await form.getByRole("button", { name: "Send message" }).click();

  for (const name of ["Name", "Email", "Message"]) {
    const field = form.getByLabel(name, { exact: true });
    await expect(field).toHaveAttribute("aria-invalid", "true");
    const errorId = await field.getAttribute("aria-describedby");
    await expect(page.locator(`#${errorId}`)).toBeVisible();
  }
  await expect(form.getByLabel("Name", { exact: true })).toBeFocused();
  expect(posts).toEqual([]);
});
