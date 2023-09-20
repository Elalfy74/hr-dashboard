import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { formatDate } from '@/lib/utils';
import { getLeaves } from '@/services/leaves';

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

  const formattedLeaves = useMemo(
    () =>
      leaves?.map((leave) => ({
        id: leave.id,
        status: getStatus(leave.approved),
        createdAt: formatDate(leave.created_at, true),
        reason: leave.leave_reason,
      })),
    [leaves]
  );

  return {
    formattedLeaves,
    leavesLoading,
  };
};

export type LeaveStatus = 'pending' | 'rejected' | 'approved';

const getStatus = (approved: boolean | null): LeaveStatus => {
  if (approved === null) return 'pending';
  if (approved === false) return 'rejected';
  return 'approved';
};
