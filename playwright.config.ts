import { defineConfig, devices } from "@playwright/test";
import { config } from "./src/config";

const port = 4392;
const basePath = new URL(config.siteUrl).pathname;

export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://localhost:${port}${basePath}`,
    ...devices["Desktop Chrome"],
  },
  webServer: {
    command: `astro build && exec astro preview --port ${port} --ignore-lock`,
    url: `http://localhost:${port}${basePath}`,
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
