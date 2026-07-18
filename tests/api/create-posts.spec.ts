import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/ApiClient';
import { PostService } from '../../src/api/PostService';
import { samplePost } from '../../src/data/testData';

test.describe('POST posts API', () => {
  let postService: PostService;

  test.beforeEach(async () => {
    const apiClient = await ApiClient.create();
    postService = new PostService(apiClient);
  });

  test('creates a post successfully', async () => {
    const response = await postService.createPost(samplePost);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      title: samplePost.title,
      body: samplePost.body,
      userId: samplePost.userId
    });
    expect(response.body.id).toBeGreaterThan(0);
  });

  test('fails when required title is missing', async () => {
    const invalidPost = { ...samplePost, title: '' };

    const response = await postService.createPost(invalidPost);

    expect(response.status).toBe(201);
  });
});
