import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { usePaginate } from '@/hooks/use-paginate';
import { formatDate } from '@/lib/utils';
import type { FormattedLeave, LeaveStatus } from '@/types';

import { getLeaves } from '@/services/leaves';

export const useLeaves = (itemsPerPage?: number) => {
  const { page, paginatePage, handlePageChange, resetPage } = usePaginate();

  const {
    data: leaves,
    isLoading: leavesLoading,
    refetch: refetchLeaves,
  } = useQuery({
    queryKey: ['Leaves', page, itemsPerPage],
    queryFn: () =>
      getLeaves({
        itemsPerPage: itemsPerPage || 7,
        page: itemsPerPage ? page : undefined,
        orderBy: 'created_at',
        asc: false,
        withDepartment: true,
      }),
    keepPreviousData: true,
  });

  const formattedLeaves: FormattedLeave[] | undefined = useMemo(
    () =>
      leaves?.map((leave) => ({
        ...leave,
        status: getLeaveStatus(leave.approved),
        created_at: formatDate(leave.created_at, true)!,
      })),
    [leaves]
  );

  return {
    formattedLeaves,
    leavesLoading,
    refetchLeaves,
    paginatePage,
    handlePageChange,
  };
};

const getLeaveStatus = (approved: boolean | null): LeaveStatus => {
  if (approved === null) return 'pending';
  if (approved === false) return 'rejected';
  return 'approved';
};
