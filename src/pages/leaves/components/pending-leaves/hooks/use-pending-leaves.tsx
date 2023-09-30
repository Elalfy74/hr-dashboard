import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { LeaveWithDepartment } from '@/types';
import { convertTo12HourFormat, formatDate } from '@/lib/utils';

import { getLeaves } from '@/services/leaves';

export const usePendingLeaves = () => {
  const {
    data: pendingLeaves,
    isLoading: pendingLeavesLoading,
    refetch,
  } = useQuery({
    queryKey: ['Leaves Pending'],
    queryFn: () =>
      getLeaves({
        itemsPerPage: 7,
        orderBy: 'created_at',
        asc: true,
        nullFilter: ['approved'],
        withDepartment: true,
      }),
  });

  const formattedLeaves = useMemo(
    () =>
      (pendingLeaves as LeaveWithDepartment[])?.map((leave) => ({
        ...leave,
        selected_day: formatDate(leave.selected_day),
        start_date: formatDate(leave.start_date),
        end_date: formatDate(leave.end_date),
        start_hour: convertTo12HourFormat(leave.start_hour),
        end_hour: convertTo12HourFormat(leave.end_hour),
      })),
    [pendingLeaves]
  );

  return {
    formattedLeaves,
    pendingLeavesLoading,
    refetch,
  };
};
