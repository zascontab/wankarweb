import { parseISO, format } from "date-fns";

export default function HumanDate({ dateString }: any) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "MMM	d, yyyy")}</time>;
}
