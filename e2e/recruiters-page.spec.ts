import { test, expect, type Request } from "@playwright/test";
import { config } from "../src/config";

test("recruiters page pitches signal quality without claiming NCAA approval", async ({
  page,
}) => {
  await page.goto("recruiters/");

  await expect(
    page
      .getByRole("region", { name: "Why recruiters use Athlete Index" })
      .getByRole("listitem"),
  ).toHaveCount(4);
  await expect(page.getByTestId("contact-rules-note")).toBeVisible();
  await expect(page.locator("main")).not.toContainText(/NCAA[- ]approved/i);
});

test("recruiter access requests go to the recruiter form endpoint", async ({
  page,
}) => {
  const requests: Request[] = [];
  await page.clock.install();
  await page.route("https://formspree.io/**", (route) => {
    requests.push(route.request());
    return route.fulfill({ json: { ok: true } });
  });
  await page.goto("recruiters/");
  const form = page.getByRole("form", { name: "Request recruiter access" });

  await form.getByLabel("Name", { exact: true }).fill("Jordan Lee");
  await form.getByLabel("Work email", { exact: true }).fill("jlee@college.edu");
  await form
    .getByLabel("School or program", { exact: true })
    .fill("State College");
  await form.getByLabel("Role", { exact: true }).selectOption("Head coach");
  await form.getByLabel("Sport", { exact: true }).selectOption("Football");
  await form.getByLabel("Division", { exact: true }).selectOption("NCAA D2");
  await page.clock.fastForward(10_000);
  await form.getByRole("button", { name: "Request access" }).click();

  await expect(form.getByTestId("form-status")).toHaveText(/on its way/i);
  expect(requests).toHaveLength(1);
  expect(requests[0].url()).toBe(config.forms.recruiter);
  expect(requests[0].postDataJSON()).toEqual({
    name: "Jordan Lee",
    email: "jlee@college.edu",
    school: "State College",
    role: "Head coach",
    sport: "Football",
    division: "NCAA D2",
  });
});
