import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 1,
  use: {
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list'], ['html', { outputFolder: 'reports' }]],
});
