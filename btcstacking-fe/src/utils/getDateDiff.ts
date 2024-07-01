import dayjs from "dayjs";

export function getDateDiff(date: string) {
  const currentDate = dayjs();
  const postDate = dayjs(date);
  const diffInDays = currentDate.diff(postDate, "day");
  const diffInHours = currentDate.diff(postDate, "hour") % 24;
  const diffInMinutes = currentDate.diff(postDate, "minute") % 60;

  return `${diffInDays} days ${diffInHours} hours and ${diffInMinutes} minutes ago`;
}
