import { Post } from "@/lib/type";
import Link from "next/link";
import { DateFormatter } from "./date-formatter";

type Props = {
  posts: {
    title: Post["title"];
    date: Post["date"];
    excerpt: Post["excerpt"];
    slug: Post["slug"];
  }[];
};

export function PostList({ posts }: Props) {
  return posts.map((post) => (
    <article
      className="border-my-accent-green/20 mb-4 border-b pb-4"
      key={post.slug}
    >
      <div className="text-my-paragraph mb-2 text-sm font-medium">
        <DateFormatter dateString={post.date} />
      </div>
      <h2 className="text-my-headline mb-3 text-xl leading-tight font-semibold tracking-tight md:text-2xl">
        <Link
          href={`/blogs/${post.slug}`}
          className="hover:text-my-accent-green transition-colors duration-300"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-my-paragraph text-sm leading-relaxed md:text-base">
        {post.excerpt}
      </p>
    </article>
  ));
}
