# Playwright API Automation Framework

A lightweight Playwright API automation framework built with TypeScript for testing JSONPlaceholder APIs.

## Overview

This project demonstrates:
- Reusable API client design
- Service-layer abstraction for API operations
- CRUD test coverage for posts
- HTML, JSON, and JUnit reporting
- GitHub Actions CI/CD readiness with a test summary
- Environment-based configuration for different test environments

## Project Structure

- src/api/ApiClient.ts - reusable HTTP client with GET, POST, PUT, and DELETE helpers
- src/api/PostService.ts - service wrapper for post-related CRUD operations
- src/Environment.ts - environment configuration loader for base URL and timeouts
- src/data/testData.ts - sample request payloads
- tests/api/create-posts.spec.ts - POST API test cases
- tests/api/get-posts.spec.ts - GET API test cases
- tests/api/update-posts.spec.ts - PUT API test cases
- tests/api/delete-posts.spec.ts - DELETE API test cases
- playwright.config.ts - Playwright configuration with multi-reporting enabled

## Setup

1. Install Node.js 20+ (Node 24 is used in CI)
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Install Playwright browsers and system dependencies if needed:
   ```bash
   npx playwright install --with-deps
   ```

## Run Tests

Run the full suite locally:

```bash
npx playwright test
```

You can also use the npm shortcut:

```bash
npm test
```

## View Reports

After running tests, open the generated HTML report:

```bash
npm run report
```

Or directly:

```bash
npx playwright show-report
```

## CI/CD

The GitHub Actions workflow in .github/workflows/playwright-api.yml runs tests on push and pull request, installs dependencies, verifies the Playwright CLI, runs the suite, and uploads reports as artifacts.

### Run the workflow on GitHub

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Update Playwright API framework"
   git push origin main
   ```
2. Open your repository in GitHub.
3. Go to the Actions tab.
4. Select the workflow named "Playwright API Tests".
5. Click the latest run to view execution details.
6. If the workflow succeeds, open the Artifacts section to download:
   - playwright-html-report
   - playwright-json-results
   - playwright-junit-results

### Trigger a workflow run manually

If needed, you can also trigger the workflow from the Actions tab by selecting the workflow and clicking "Run workflow".
