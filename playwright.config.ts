import { defineConfig } from '@playwright/test';
import { environment } from './src/Environment';

export default defineConfig({
  testDir: './tests',
  timeout: environment.apiTimeout,
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { outputFolder: environment.reportPath, open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: environment.junitOutputFile }]
  ],
  use: {
    baseURL: environment.baseUrl,
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    },
    ignoreHTTPSErrors: true
  }
});
