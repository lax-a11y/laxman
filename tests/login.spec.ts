import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login flow placeholder', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  // add login steps here
  expect(await page.title()).toBeTruthy();
});
