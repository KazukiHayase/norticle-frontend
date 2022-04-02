import { format, formatDistanceToNow,parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';

const timezone = 'Asia/Tokyo';
const dateFormats = {
  date: 'yyyy/MM/dd',
  datetime: 'yyyy/MM/dd HH:mm:ss',
  dateISO: 'yyyy-MM-dd',
  timeISO: 'HH:mm:ss.SSSxxx',
  datetimeISO: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
};

// See: https://hasura.io/blog/working-with-dates-time-timezones-graphql-postgresql
//      https://github.com/99designs/gqlgen/blob/master/graphql/time.go
export const formatDate = (date: Date, formatKey: keyof typeof dateFormats) => {
  const jstDate = utcToZonedTime(date, timezone);
  return format(jstDate, dateFormats[formatKey]);
};

export const formatDateString = (
  dateString: string,
  formatKey: keyof typeof dateFormats,
): string => {
  const date = parseISO(dateString);
  return isValidDate(date)
    ? format(parseISO(dateString), dateFormats[formatKey])
    : '';
};

export const fromNow = (date: Date) => {
  return formatDistanceToNow(date, { locale: ja });
};

export const isValidDate = (date: Date) => {
  return date instanceof Date && !isNaN(date.getTime());
};
