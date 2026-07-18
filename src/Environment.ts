import path from 'path';
import dotenv from 'dotenv';

const envFile = process.env.ENV_FILE || '.env.dev';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export interface AppEnvironment {
  nodeEnv: string;
  baseUrl: string;
  apiTimeout: number;
  reportPath: string;
  junitOutputFile: string;
}

const getNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const environment: AppEnvironment = {
  nodeEnv: process.env.NODE_ENV || 'dev',
  baseUrl: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com',
  apiTimeout: getNumber(process.env.API_TIMEOUT, 15000),
  reportPath: process.env.REPORT_PATH || 'playwright-report',
  junitOutputFile: process.env.JUNIT_OUTPUT_FILE || 'test-results/junit.xml'
};
