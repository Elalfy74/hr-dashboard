import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { usePaginate } from '@/hooks/use-paginate';
import { formatLeaves } from '@/lib/utils';

import { getLeaves } from '@/services/leaves';
import { useLeavesFilter } from './use-leaves-filter';

export const useLeaves = (itemsPerPage?: number) => {
  const { page, paginatePage, handlePageChange, resetPage } = usePaginate();

  const { leaveStatus, handleChangeStatus, filter, nullFilter } =
    useLeavesFilter(resetPage);

  const queryFn = () =>
    getLeaves({
      withDepartment: true,
      itemsPerPage: itemsPerPage || 7,
      page: itemsPerPage ? page : undefined,
      orderBy: 'created_at',
      asc: false,
      filter,
      nullFilter,
    });

  const {
    data: leaves,
    isLoading: leavesLoading,
    refetch: refetchLeaves,
  } = useQuery({
    queryKey: ['Leaves', page, itemsPerPage, leaveStatus],
    queryFn,
    keepPreviousData: true,
  });

  const formattedLeaves = useMemo(() => formatLeaves(leaves), [leaves]);

  return {
    formattedLeaves,
    leavesLoading,
    refetchLeaves,

    paginatePage,
    handlePageChange,

    leaveStatus,
    handleChangeStatus,

    filter,
    nullFilter,
  };
};
