import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/ApiClient';
import { PostService } from '../../src/api/PostService';

test.describe('GET posts API', () => {
  let postService: PostService;

  test.beforeEach(async () => {
    const apiClient = await ApiClient.create();
    postService = new PostService(apiClient);
  });

  test('gets an existing post successfully', async () => {
    const response = await postService.getPost(1);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: 1,
      userId: 1,
      title: expect.any(String),
      body: expect.any(String)
    });
  });

  test('returns a not-found error for a non-existing post', async () => {
    await expect(postService.getPost(999999)).rejects.toThrow(/404/);
  });
});
