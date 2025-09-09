---
title: "Hello World: My SSG Experiment with Next.js"
excerpt: "A quick note about building my first Markdown-based static site with Next.js."
coverImage: "/assets/blogs/hello-world/cover.webp"
date: "2025-09-09T12:00:00.000Z"
author:
  name: "nabilfikrisp"
  picture: "/assets/profile.png"
ogImage:
  url: "/assets/blogs/hello-world/cover.webp"
---

Hey, this is my first little note on this blog. Just wanted a place to **track what I learn** and document experiments, so here’s one about building a static site with Next.js.

## Why SSG?

Even though I’ve done a lot of frontend work, I wanted to try **Static Site Generation** for a personal project. It’s fast, SEO-friendly, and perfect for something like a blog or docs where content doesn’t change every second.

Bonus: since everything is pre-rendered to HTML, I can **deploy this anywhere for free**. No backend needed, just static files. Pretty neat!

---

## Front Matter and Markdown Posts

In my `_posts` folder, every Markdown file starts with **front matter**. Front matter is a small block at the top of the file, surrounded by `---`, which holds **metadata about the post** like title, date, and cover image.

Example:

```md
---
title: "Hello World"
date: "2025-09-09"
---
```

Everything after the second `---` is the actual content of the post.

I use **`gray-matter`** to read this front matter in Node.js. It parses the Markdown file into two parts:

- `data` → the metadata object (title, date, etc.)
- `content` → the raw Markdown content

Example in code:

```ts
import fs from "fs";
import matter from "gray-matter";

const fileContents = fs.readFileSync("_posts/hello-world.md", "utf8");
const { data, content } = matter(fileContents);

console.log(data); // { title: "Hello World", date: "2025-09-09" }
console.log(content); // "The actual Markdown content here"
```

This way, I can **keep all my posts organized as Markdown**, and still have all the metadata available for generating pages or listing posts.

---

## How I Set It Up

- **Next.js (App Router)** handles file-based routing, layouts, and pre-rendering.
- **Gray Matter** to read front matter from Markdown files.
- **One central `_posts` folder** with all my `.md` files. Keeps it simple and tidy.
- **`markdownToHtml` helper** to convert Markdown into HTML for rendering pages.

Here’s the function I use for Markdown → HTML:

```ts
import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
```

Example usage:

```ts
const markdown = "# Hello World\nThis is my post.";
const html = await markdownToHtml(markdown);
console.log(html);
```

Output:

```html
<h1>Hello World</h1>
<p>This is my post.</p>
```

Now all my posts are `.md` files. I can **parse front matter, convert Markdown to HTML, and generate static pages**. Keeps everything **organized, fast, and simple**.

---

## How It All Comes Together

Here’s how my setup actually runs in a Next.js App Router page:

```ts
import markdownToHtml from "@/lib/md-to-html";
import { getAllPosts, getPostBySlug } from "@/lib/post-api";
import { notFound } from "next/navigation";
import { PostBody } from "../_components/post-body";
import { PostHeader } from "../_components/post-header";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");

  return (
    <article>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={content} />
    </article>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `nabilfikrisp | blogs - ${post.title}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

```

### What’s happening here:

1. **`getPostBySlug`** → reads the Markdown file and front matter for the requested slug.
2. **`markdownToHtml`** → converts the Markdown content into HTML.
3. **`PostHeader` and `PostBody`** → render the metadata and HTML in React components.
4. **`generateStaticParams`** → tells Next.js which slugs to pre-render at build time.
5. **`generateMetadata`** → creates dynamic page metadata for SEO and social sharing.

All together, this is how **my `_posts` folder + gray-matter + markdownToHtml + Next.js App Router** produces fully **static, pre-rendered blog pages**.

It’s satisfying to see Markdown files turn into real pages on the web, and all of it is **static**.

---

## Takeaways

Even as a frontend dev, it’s nice to see **how everything comes together** in a static workflow. Helps me understand **the “build time → pre-rendered page” flow** better, and gives me a practical way to store content in Markdown while still having a modern frontend setup.

## Reference

Everything in this setup, `_posts` Markdown files, front matter with `gray-matter`, and the `markdownToHtml` inspired by the **official Next.js blog starter example**.

If you want to see the source and how it’s structured, check it out here: [Next.js Blog Starter Repo](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)

It was really helpful to follow along with a working example while I experimented and made it my own. Seeing a full, working SSG blog setup made it much easier to understand the workflow and integrate it into my own portfolio blog.
