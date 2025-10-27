# Resilient Browser Framework

Playwright-based framework demonstrating defensive automation patterns for browser resilience, retries, and performance instrumentation.

## Quick start

Prerequisites:
- Node.js (v16+)
- npm

Install dependencies:
-sh
npm install


Run the test suite:
-sh
npm test


Open the HTML report generated in `reports/`:
sh
# open in default browser on Windows
start "" "reports\index.html"


## Files of interest

- Project metadata: `package.json`
- Playwright config: `playwright.config.js`
- HTML report: `reports/index.html`

Playwright Test files 
- src/tests/loginResilience.test.js` — resilient login flow using retry helper
- `src/tests/crashRecovery.test.js` — simulates browser crash & recovery
- `src/tests/performanceInstrumentation.test.js` — captures performance metrics

Utilities 
Retry helper:
Symbol: retryHelper.withRetry
File: src/utils/retryHelper.js
Provides withRetry which retries an async action up to N times with a delay.
Configuration:
Symbol: config.config
File: src/utils/config.js
Central config values: baseUrl, retries, delayBetweenRetries.
Trace / performance collector:
Symbol: traceCollector.collectPerformanceMetrics
File: src/utils/traceCollector.js
Uses a CDP session to enable and fetch Performance.getMetrics.

## Reports & results

- `reports/index.html` — Playwright HTML reporter output (may include embedded artifacts)
- `test-results/` — test artifacts and run summaries

## Best practices used

- Fine-grained retry helper for flaky actions instead of global test retries
- Traces, videos, screenshots retained on failure only (configurable)
- Centralized logging and config for consistent diagnostics
- CDP-based metrics collection when running Chromium

## Notes & tips

- Adjust retry counts and delays in `src/utils/config.js`.
- Use `collectPerformanceMetrics` where CDP access is available (Chromium).
- Run a single test for debugging:
```sh
npx playwright test src/tests/loginResilience.test.js -g "Resilient login flow"
```
