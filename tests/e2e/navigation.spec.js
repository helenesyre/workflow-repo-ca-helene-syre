import { test, expect } from "@playwright/test";

/**
 * Sources used in this file:
 * - waitForSelector, locator, timeouts: Microsoft Playwright Documentation:
 *   https://playwright.dev/docs/api/class-page
 *   https://playwright.dev/docs/api/class-locator
 *   https://playwright.dev/docs/test-timeouts
 * - Timeout handling: Bravin Wasike, Autify Blog:
 *   https://autify.com/blog/playwright-timeout
 * - first(): Test Step, YouTube:
 *   https://www.youtube.com/watch?v=B-1uNYVgUMA
 * For full attribution details, see docs/SOURCES.md
 */
test("user can navigate to page with venue details", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("link", { name: "Home" }).click();

  // Wait for an element matching the selector to appear in a specific state.
  // The default timeout is 30 seconds, but you can adjust it as needed.
  await page.waitForSelector("#venue-container", { timeout: 30_000 });

  const venueContainer = page.locator("#venue-container");
  await venueContainer.getByRole("link").first().click();

  // Expects page to have a heading with the name of Venue details.
  await expect(
    page.getByRole("heading", { name: "Venue details" }),
  ).toBeVisible();
});
