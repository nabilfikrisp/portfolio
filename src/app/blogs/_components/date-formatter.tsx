import { format, parseISO } from "date-fns";

type DateFormatterProps = {
  dateString: string;
};

export function DateFormatter({ dateString }: DateFormatterProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
