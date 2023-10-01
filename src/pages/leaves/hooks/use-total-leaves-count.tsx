import { useQuery } from '@tanstack/react-query';

import type { LeaveStatus } from '@/types';

import { getTotalLeavesCount } from '@/services/leaves';

interface UseTotalLeavesCountParam {
  status?: LeaveStatus;
  filter?: { approved: boolean | undefined };
  nullFilter?: ['approved'];
}
export const useTotalLeavesCount = (param: UseTotalLeavesCountParam = {}) => {
  const { status, filter, nullFilter } = param;

  const { data: totalLeaves, isLoading: totalLeavesLoading } = useQuery({
    queryKey: ['Leaves Count', status],
    queryFn: () =>
      getTotalLeavesCount({
        filter,
        nullFilter,
      }),
    keepPreviousData: true,
  });

  return {
    totalLeaves,
    totalLeavesLoading,
  };
};
