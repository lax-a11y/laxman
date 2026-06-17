import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('example.com has correct title', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  const title = await home.getTitle();
  expect(title).toContain('Example Domain');
});
