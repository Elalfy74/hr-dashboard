import { FormattedLeave, LeaveStatus, LeaveWithDepartment } from '@/types';
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

export function formatLeaves(
  leaves?: LeaveWithDepartment[]
): FormattedLeave[] | undefined {
  return leaves?.map((leave) => ({
    ...leave,
    status: getLeaveStatus(leave.approved),
    created_at: formatDate(leave.created_at, true)!,
    start_date: formatDate(leave.start_date),
    end_date: formatDate(leave.end_date),

    selected_day: formatDate(leave.selected_day),
    start_hour: convertTo12HourFormat(leave.start_hour),
    end_hour: convertTo12HourFormat(leave.end_hour),
  }));
}

const getLeaveStatus = (approved: boolean | null): LeaveStatus => {
  if (approved === null) return 'pending';
  if (approved === false) return 'rejected';
  return 'approved';
};
