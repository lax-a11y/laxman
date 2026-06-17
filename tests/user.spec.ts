import { test, expect } from '@playwright/test';

test('user management placeholder', async ({ page }) => {
  await page.goto('about:blank');
  // implement user tests
  expect(page.url()).toBe('about:blank');
});
