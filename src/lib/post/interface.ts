export interface PostInterface {
  getAllPosts(): Post[];
  getPostBySlug(slug: string): Post;
  getPostSlugs(): string[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
  };
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
}

export class PostNotFoundError extends Error {
  constructor(slug: string) {
    super(`Post not found: ${slug}`);
    this.name = "PostNotFoundError";
  }
}
