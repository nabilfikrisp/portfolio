import { Author } from "@/lib/type";

type AvatarProps = {
  name: Author["name"];
  picture: Author["picture"];
};

export function Avatar({ name, picture }: AvatarProps) {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="mr-4 h-12 w-12 rounded-full"
        alt={name}
        title={name}
      />
      <strong className="font-heading text-my-accent-green text-xl md:text-3xl">
        {name}
      </strong>
    </div>
  );
}
