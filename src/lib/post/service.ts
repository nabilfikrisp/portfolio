import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { join } from "path";
import { Post, PostNotFoundError, PostRepository } from "./repository";

const postsDirectory = join(process.cwd(), "_posts");

export class PostService implements PostRepository {
  private parseFrontmatter(content: string) {
    return matter(content, {
      engines: {
        yaml: {
          parse: (str: string) => yaml.load(str) as Record<string, unknown>,
          stringify: (obj) => yaml.dump(obj),
        },
      },
    });
  }

  getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory);
  }

  getAllPosts(): Post[] {
    const slugs = this.getPostSlugs();
    return slugs
      .map((slug) => this.getPostBySlug(slug))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);

    let fileContents: string;
    try {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } catch {
      throw new PostNotFoundError(slug);
    }

    const { data, content } = this.parseFrontmatter(fileContents);
    return { ...(data as Post), slug: realSlug, content };
  }
}
