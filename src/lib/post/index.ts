import { PostService } from "./service";

export const postService = new PostService();

export { PostNotFoundError } from "./repository";
export type { Post, PostRepository } from "./repository";
