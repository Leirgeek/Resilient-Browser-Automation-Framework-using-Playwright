import { test, expect } from '@playwright/test';
import { withRetry } from '../utils/retryHelper.js';
import { config } from '../utils/config.js';

test('Resilient login flow on SauceDemo', async ({ page }) => {
  await page.goto(config.baseUrl);

  await withRetry(async () => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('.inventory_list')).toBeVisible({ timeout: 5000 });
  }, config.retries, config.delayBetweenRetries);

  console.log('Login successful under resilience conditions');
});
