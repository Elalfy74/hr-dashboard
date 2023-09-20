import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import {
  getLeavesAsDaysCount,
  getMarriageLeavesCount,
  getPendingLeavesCount,
  getTotalLeavesCount,
} from '@/services/leaves';

type MayBeNumber = number | undefined | null;

export const useLeavesCount = () => {
  const { data: totalLeaves, isLoading: totalLeavesLoading } = useQuery({
    queryKey: ['Leaves Count'],
    queryFn: getTotalLeavesCount,
  });

  const { data: pendingLeaves, isLoading: pendingLeavesLoading } = useQuery({
    queryKey: ['Leaves Pending Count'],
    queryFn: getPendingLeavesCount,
  });

  const { data: asDaysLeaves, isLoading: asDaysLeavesLoading } = useQuery({
    queryKey: ['Leaves As Days Count'],
    queryFn: getLeavesAsDaysCount,
  });

  const { data: marriageLeaves, isLoading: marriageLeavesLoading } = useQuery({
    queryKey: ['Leaves Marriage Count'],
    queryFn: getMarriageLeavesCount,
  });

  interface CovertCountToDataParam {
    otherNumb: MayBeNumber;
    firstLabel: string;
    secondLabel: string;
  }

  const covertCountToData = useCallback(
    (param: CovertCountToDataParam) => {
      const { otherNumb, firstLabel, secondLabel } = param;

      if (!totalLeaves || !otherNumb) return;

      return [
        {
          id: 1,
          label: firstLabel,
          value: otherNumb,
        },
        {
          id: 2,
          label: secondLabel,
          value: totalLeaves - otherNumb,
        },
      ];
    },
    [totalLeaves]
  );

  const pendingLeavesData = covertCountToData({
    otherNumb: pendingLeaves,
    firstLabel: 'Pending',
    secondLabel: 'Done',
  });

  const marriageLeavesData = covertCountToData({
    otherNumb: marriageLeaves,
    firstLabel: 'Marriage',
    secondLabel: 'Other',
  });

  const periodLeavesData = covertCountToData({
    otherNumb: asDaysLeaves,
    firstLabel: 'For Days',
    secondLabel: 'For Hours',
  });

  return {
    totalLeaves,
    totalLeavesLoading,
    pendingLeavesData,
    pendingLeavesLoading,
    marriageLeavesData,
    marriageLeavesLoading,
    periodLeavesData,
    periodLeavesLoading: asDaysLeavesLoading,
  };
};
