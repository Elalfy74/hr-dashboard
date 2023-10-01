import { useQuery } from '@tanstack/react-query';

import type { LeaveStatus } from '@/types';

import { getTotalLeavesCount } from '@/services/leaves';
import { getFilter } from './use-leaves';

export const useTotalLeavesCount = (status?: LeaveStatus) => {
  const filterValue = getFilter(status);

  const filter = typeof filterValue === 'boolean' ? filterValue : undefined;
  const nullFilter = typeof filterValue === 'boolean' ? undefined : filterValue;

  const { data: totalLeaves, isLoading: totalLeavesLoading } = useQuery({
    queryKey: ['Leaves Count', status],
    queryFn: () =>
      getTotalLeavesCount({
        filter: {
          approved: filter,
        },
        nullFilter,
      }),
    keepPreviousData: true,
  });

  return {
    totalLeaves,
    totalLeavesLoading,
  };
};
