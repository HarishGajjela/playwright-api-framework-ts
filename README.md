# Playwright API Automation Framework

A lightweight Playwright API automation framework built with TypeScript for testing JSONPlaceholder APIs.

## Overview

This project demonstrates:
- Reusable API client design
- Service-layer abstraction for API operations
- CRUD test coverage for posts
- HTML and JSON reporting
- GitHub Actions CI/CD readiness

## Project Structure

- src/api/ApiClient.ts - reusable HTTP client with GET, POST, PUT, and DELETE helpers
- src/api/PostService.ts - service wrapper for post-related CRUD operations
- src/data/testData.ts - sample request payloads
- tests/posts.spec.ts - CRUD API test cases
- playwright.config.ts - Playwright configuration with reporting enabled

## Setup

1. Install Node.js 20+
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Run Tests

```bash
npm test
```

## View Reports

After running tests, open the generated HTML report:

```bash
npm run report
```

## CI/CD

The GitHub Actions workflow in .github/workflows/playwright-api.yml runs tests on push and pull request and uploads reports as artifacts.

### Run the workflow on GitHub

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Add Playwright API framework"
   git push origin main
   ```
2. Open your repository in GitHub.
3. Go to the Actions tab.
4. Select the workflow named "Playwright API Tests".
5. Click on the latest run to view execution details.
6. If the workflow succeeds, open the Artifacts section to download:
   - playwright-html-report
   - playwright-json-results
   - playwright-junit-results

### Trigger a workflow run manually

If needed, you can also trigger the workflow from the Actions tab by selecting the workflow and clicking "Run workflow".
