import { test, expect, type Page, type Request } from "@playwright/test";
import { config } from "../src/config";

async function mockFormspree(page: Page, status = 200) {
  const requests: Request[] = [];
  await page.route("https://formspree.io/**", (route) => {
    requests.push(route.request());
    return route.fulfill({ status, json: { ok: status === 200 } });
  });
  return requests;
}

async function fillContactForm(page: Page) {
  const form = page.getByRole("form", { name: "Contact us" });
  await form.getByLabel("Name", { exact: true }).fill("Sam Rivera");
  await form.getByLabel("Email", { exact: true }).fill("sam@example.com");
  await form.getByLabel("I am a…").selectOption("Parent or guardian");
  await form
    .getByLabel("Message", { exact: true })
    .fill("How does the parent-linked account work?");
  return form;
}

test("submitting an empty contact form flags each required field and sends nothing", async ({
  page,
}) => {
  const requests = await mockFormspree(page);
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
  expect(requests).toEqual([]);
});

test("a completed contact form is sent as JSON and confirmed", async ({
  page,
}) => {
  await page.clock.install();
  const requests = await mockFormspree(page);
  await page.goto("contact/");
  const form = await fillContactForm(page);
  await page.clock.fastForward(10_000);

  await form.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByTestId("form-status")).toHaveText(
    /your message is on its way/i,
  );
  expect(requests).toHaveLength(1);
  expect(requests[0].url()).toBe(config.forms.contact);
  expect(requests[0].headers()["accept"]).toBe("application/json");
  expect(requests[0].postDataJSON()).toEqual({
    name: "Sam Rivera",
    email: "sam@example.com",
    role: "Parent or guardian",
    message: "How does the parent-linked account work?",
  });
  await expect(form.getByLabel("Name", { exact: true })).toHaveValue("");
});

test("when sending fails the visitor is told and keeps what they typed", async ({
  page,
}) => {
  await page.clock.install();
  await mockFormspree(page, 500);
  await page.goto("contact/");
  const form = await fillContactForm(page);
  await page.clock.fastForward(10_000);

  await form.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByTestId("form-status")).toHaveText(/wasn't sent/);
  await expect(form.getByLabel("Name", { exact: true })).toHaveValue(
    "Sam Rivera",
  );
});

test("a bot that fills the hidden honeypot is quietly ignored", async ({
  page,
}) => {
  await page.clock.install();
  const requests = await mockFormspree(page);
  await page.goto("contact/");
  const form = await fillContactForm(page);
  await page.getByTestId("honeypot").fill("http://spam.example");
  await page.clock.fastForward(10_000);

  await form.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByTestId("form-status")).toHaveText(
    /your message is on its way/i,
  );
  expect(requests).toEqual([]);
});

test("a form submitted faster than a person could type is quietly ignored", async ({
  page,
}) => {
  await page.clock.install();
  const requests = await mockFormspree(page);
  await page.goto("contact/");
  const form = await fillContactForm(page);

  await form.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByTestId("form-status")).toHaveText(
    /your message is on its way/i,
  );
  expect(requests).toEqual([]);
});
