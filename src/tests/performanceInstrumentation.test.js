import { test } from '@playwright/test';
import { collectPerformanceMetrics } from '../utils/traceCollector.js';

test('Capture browser performance metrics', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.waitForLoadState('networkidle');
  const metrics = await collectPerformanceMetrics(page);
  console.log('Captured Metrics Count:', metrics.metrics?.length || 0);
});
