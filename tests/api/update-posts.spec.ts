import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/ApiClient';
import { PostService } from '../../src/api/PostService';
import { updatedPost } from '../../src/data/testData';

test.describe('PUT posts API', () => {
  let postService: PostService;

  test.beforeEach(async () => {
    const apiClient = await ApiClient.create();
    postService = new PostService(apiClient);
  });

  test('updates an existing post successfully', async () => {
    const response = await postService.updatePost(1, updatedPost);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: 1,
      title: updatedPost.title,
      body: updatedPost.body,
      userId: updatedPost.userId
    });
  });

  test('returns a not-found error for updating a non-existing post', async () => {
    await expect(postService.updatePost(999999, updatedPost)).rejects.toThrow(/404|500/);
  });
});
