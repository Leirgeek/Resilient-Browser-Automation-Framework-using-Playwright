import { chromium } from '@playwright/test';
import { logInfo, logError } from './logger.js';

export async function launchBrowser() {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    logInfo('Browser launched successfully');
  } catch (error) {
    logError('Browser launch failed, retrying...');
    browser = await chromium.launch({ headless: true });
  }
  return browser;
}

export async function safeClose(browser) {
  try {
    await browser.close();
    logInfo('Browser closed succesfully');
  } catch (e) {
    logError('Browser close failed, forcing shutdown');
  }
}
