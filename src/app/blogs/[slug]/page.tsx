import markdownToHtml from "@/lib/md-to-html";
import { postService } from "@/lib/post";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostBody } from "../_components/post-body";
import { PostHeader } from "../_components/post-header";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = postService.getPostBySlug(params.slug);

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

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = postService.getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `nabilfikrisp | blogs - ${post.title}`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const allPosts = postService.getAllPosts();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}
