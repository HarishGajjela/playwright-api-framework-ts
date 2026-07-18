import { APIRequestContext, APIResponse, request } from '@playwright/test';
import { environment } from '../Environment';

export interface ApiResponse<T> {
  status: number;
  body: T;
}

export class ApiClient {
  private readonly requestContext: APIRequestContext;

  constructor(requestContext: APIRequestContext) {
    this.requestContext = requestContext;
  }

  static async create(baseURL = environment.baseUrl): Promise<ApiClient> {
    const normalizedBaseURL = baseURL.endsWith('/') ? baseURL : `${baseURL}/`;
    const requestContext = await request.newContext({
      baseURL: normalizedBaseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      },
      timeout: environment.apiTimeout
    });

    return new ApiClient(requestContext);
  }

  async get<T>(path: string): Promise<ApiResponse<T>> {
    return this.handleRequest<T>(() => this.requestContext.get(path));
  }

  async post<T>(path: string, data: unknown): Promise<ApiResponse<T>> {
    return this.handleRequest<T>(() => this.requestContext.post(path, { data }));
  }

  async put<T>(path: string, data: unknown): Promise<ApiResponse<T>> {
    return this.handleRequest<T>(() => this.requestContext.put(path, { data }));
  }

  async delete<T>(path: string): Promise<ApiResponse<T>> {
    return this.handleRequest<T>(() => this.requestContext.delete(path));
  }

  private async handleRequest<T>(requestFn: () => Promise<APIResponse>): Promise<ApiResponse<T>> {
    const response = await requestFn();
    const body = (await response.json().catch(() => null)) as T;

    if (!response.ok()) {
      const message = `Request failed with status ${response.status()} and body: ${JSON.stringify(body)}`;
      console.error(message);
      throw new Error(message);
    }

    console.log(`Request succeeded with status ${response.status()}`);

    return {
      status: response.status(),
      body
    };
  }
}
