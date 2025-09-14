import { Author } from "@/lib/type";
import Link from "next/link";
import { Avatar } from "./avatar";
import { CoverImage } from "./cover-image";
import { DateFormatter } from "./date-formatter";

type PostPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: PostPreviewProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link
          href={`/blogs/${slug}`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar
        name={author.name}
        picture={author.picture}
      />
    </div>
  );
}
