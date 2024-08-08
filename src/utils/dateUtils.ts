import { format } from 'date-fns';

export function formatDate(date: Date | string, formatString: string = 'HH:mm:ss dd-MM-yyyy'): string {
  if (typeof date == "string") {
    date = new Date(date);
  }
  return format(date, formatString);
}
