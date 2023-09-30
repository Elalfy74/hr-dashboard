import { useQuery } from '@tanstack/react-query';

import { getTotalLeavesCount } from '@/services/leaves';

export const useTotalLeavesCount = () => {
  const { data: totalLeaves, isLoading: totalLeavesLoading } = useQuery({
    queryKey: ['Leaves Count'],
    queryFn: getTotalLeavesCount,
  });

  return {
    totalLeaves,
    totalLeavesLoading,
  };
};
