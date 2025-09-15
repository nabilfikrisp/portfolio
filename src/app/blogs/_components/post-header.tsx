import { Post } from "@/lib/type";
import { Avatar } from "./avatar";
import { CoverImage } from "./cover-image";
import { DateFormatter } from "./date-formatter";
import { PostTitle } from "./post-title";

type PostHeaderProps = {
  title: Post["title"];
  date: Post["date"];
  author: Post["author"];
  coverImage: Post["coverImage"];
};

export function PostHeader({
  title,
  author,
  coverImage,
  date,
}: PostHeaderProps) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 sm:mx-0 md:mb-12">
        <CoverImage
          title={title}
          src={coverImage}
        />
      </div>
      <div className="b mb-4 md:mb-6">
        <Avatar
          name={author.name}
          picture={author.picture}
        />
      </div>
      <div className="font-heading mb-4 text-lg font-semibold md:mb-6">
        <DateFormatter dateString={date} />
      </div>
    </>
  );
}
