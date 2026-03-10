import { test, expect } from "@playwright/test";

// Source for waitForSelector: https://playwright.dev/docs/api/class-page
// Source for timeout: https://playwright.dev/docs/test-timeouts and https://autify.com/blog/playwright-timeout
// Source for first(): https://www.youtube.com/watch?v=B-1uNYVgUMA
// Source for locator: https://playwright.dev/docs/api/class-locator
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
