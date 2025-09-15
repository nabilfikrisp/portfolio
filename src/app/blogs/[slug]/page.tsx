import markdownToHtml from "@/lib/md-to-html";
import { getAllPosts, getPostBySlug } from "@/lib/post-api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostBody } from "../_components/post-body";
import { PostHeader } from "../_components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content);

  return (
    <article className="flex flex-1 flex-col">
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

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

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
