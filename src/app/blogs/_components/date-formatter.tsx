import { Post } from "@/lib/type";
import { format, parseISO } from "date-fns";

type DateFormatterProps = {
  dateString: Post["date"];
};

export function DateFormatter({ dateString }: DateFormatterProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "d LLLL yyyy")}</time>;
}
