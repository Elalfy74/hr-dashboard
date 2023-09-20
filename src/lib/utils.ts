import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string | null, showYear = false) => {
  if (!date) return null;

  const originalDate = new Date(date);

  const day = originalDate.getDate();
  const month = originalDate.toLocaleString('default', { month: 'long' });

  if (!showYear) return `${day} ${month}`;

  const year = originalDate.getFullYear();

  return `${day} ${month}, ${year}`;
};

export function convertTo12HourFormat(timeString: string | null) {
  if (!timeString) return null;

  const [hour, minute] = timeString.split(':').map(Number);

  const period = hour < 12 ? 'AM' : 'PM';

  const formattedHour = hour % 12 || 12;

  const result = `${formattedHour}:${String(minute).padStart(
    2,
    '0'
  )} ${period}`;

  return result;
}
