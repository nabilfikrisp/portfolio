import { PostService } from "./service";

export const postService = new PostService();

export { PostNotFoundError } from "./interface";
export type { Post, PostInterface } from "./interface";
