import { getLeaves } from '@/services/leaves';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export const useLeaves = () => {
  const { data: leaves, isLoading: leavesLoading } = useQuery({
    queryKey: ['Leaves'],
    queryFn: () =>
      getLeaves({
        itemsPerPage: 7,
        orderBy: 'created_at',
        asc: false,
      }),
  });

  const uniformedLeaves = useMemo(
    () =>
      leaves?.map((leave) => ({
        id: leave.id,
        status: getStatus(leave.approved),
        createdAt: formatDate(leave.created_at),
        reason: leave.leave_reason,
      })),
    [leaves]
  );

  return {
    uniformedLeaves,
    leavesLoading,
  };
};

export type LeaveStatus = 'pending' | 'rejected' | 'approved';

const getStatus = (approved: boolean | null): LeaveStatus => {
  if (approved === null) return 'pending';
  else if (approved === false) return 'rejected';
  else return 'approved';
};

const formatDate = (date: string) => {
  const originalDate = new Date(date);

  const day = originalDate.getDate();
  const month = originalDate.toLocaleString('default', { month: 'long' });
  const year = originalDate.getFullYear();

  return `${day} ${month}, ${year}`;
};
