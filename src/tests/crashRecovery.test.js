import { test, chromium } from '@playwright/test';
import { logInfo } from '../utils/logger.js';
import { safeClose } from '../utils/browserManager.js';

test('Browser crash recovery simulation', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://automationexercise.com/');
  logInfo('Navigated to site');

  // Simulate browser crash
  logInfo('Simulating crash...');
  await browser.close();

  // Recovery
  const recoveredBrowser = await chromium.launch();
  const recoveredPage = await recoveredBrowser.newPage();
  await recoveredPage.goto('https://automationexercise.com/');
  logInfo('Browser recovered successfully');
  await safeClose(recoveredBrowser);
});
