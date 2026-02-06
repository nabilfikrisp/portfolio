import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { join } from "path";
import { Post } from "./type";

const postsDirectory = join(process.cwd(), "_posts");

export class PostNotFoundError extends Error {
  constructor(slug: string) {
    super(`Post not found: ${slug}`);
    this.name = "PostNotFoundError";
  }
}

export function getPostSlugs(): string[] {
  try {
    return fs.readdirSync(postsDirectory);
  } catch {
    console.error(`Error reading posts directory`);
    return [];
  }
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  let fileContents: string;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch {
    throw new PostNotFoundError(slug);
  }

  const { data, content } = matter(fileContents, {
    engines: {
      yaml: {
        parse: (str: string) => yaml.load(str) as object,
        stringify: (obj) => yaml.dump(obj),
      },
    },
  });

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      try {
        return getPostBySlug(slug);
      } catch {
        return null;
      }
    })
    .filter((post): post is Post => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
