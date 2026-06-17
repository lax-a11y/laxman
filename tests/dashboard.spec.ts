import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test('dashboard smoke placeholder', async ({ page }) => {
  const dash = new DashboardPage(page);
  await dash.goto();
  // add assertions interacting with dashboard
  expect(await page.title()).toBeTruthy();
});
