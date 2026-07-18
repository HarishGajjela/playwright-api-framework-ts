import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/ApiClient';
import { PostService } from '../../src/api/PostService';

test.describe('DELETE posts API', () => {
  let postService: PostService;

  test.beforeEach(async () => {
    const apiClient = await ApiClient.create();
    postService = new PostService(apiClient);
  });

  test('deletes an existing post successfully', async () => {
    const response = await postService.deletePost(1);

    expect(response.status).toBe(200);
  });

  test('handles deleting a non-existing post gracefully', async () => {
    const response = await postService.deletePost(999999);

    expect(response.status).toBe(200);
  });
});
