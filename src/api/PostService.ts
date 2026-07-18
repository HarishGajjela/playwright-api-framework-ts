import { ApiClient, ApiResponse } from './ApiClient';

export interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export class PostService {
  constructor(private readonly apiClient: ApiClient) {}

  async createPost(post: Post): Promise<ApiResponse<Post>> {
    return this.apiClient.post<Post>('/posts', post);
  }

  async getPost(postId: number): Promise<ApiResponse<Post>> {
    return this.apiClient.get<Post>(`/posts/${postId}`);
  }

  async updatePost(postId: number, post: Post): Promise<ApiResponse<Post>> {
    return this.apiClient.put<Post>(`/posts/${postId}`, post);
  }

  async deletePost(postId: number): Promise<ApiResponse<unknown>> {
    return this.apiClient.delete<unknown>(`/posts/${postId}`);
  }
}
