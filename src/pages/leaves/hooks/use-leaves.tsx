import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { usePaginate } from '@/hooks/use-paginate';
import { convertTo12HourFormat, formatDate } from '@/lib/utils';
import type { FormattedLeave, LeaveStatus } from '@/types';

import { getLeaves } from '@/services/leaves';

export const useLeaves = (itemsPerPage?: number) => {
  const { page, paginatePage, handlePageChange, resetPage } = usePaginate();

  const [leaveStatus, setLeaveStatus] = useState<LeaveStatus>();
  const handleChangeStatus = (status: LeaveStatus) => {
    setLeaveStatus(status);
    resetPage();
  };

  const filterValue = getFilter(leaveStatus);

  const filter = typeof filterValue === 'boolean' ? filterValue : undefined;
  const nullFilter = typeof filterValue === 'boolean' ? undefined : filterValue;

  const {
    data: leaves,
    isLoading: leavesLoading,
    refetch: refetchLeaves,
  } = useQuery({
    queryKey: ['Leaves', page, itemsPerPage, leaveStatus],
    queryFn: () =>
      getLeaves({
        withDepartment: true,
        itemsPerPage: itemsPerPage || 7,
        page: itemsPerPage ? page : undefined,
        orderBy: 'created_at',
        asc: false,
        filter: {
          approved: filter,
        },
        nullFilter,
      }),
    keepPreviousData: true,
  });

  const formattedLeaves: FormattedLeave[] | undefined = useMemo(
    () =>
      leaves?.map((leave) => ({
        ...leave,
        status: getLeaveStatus(leave.approved),
        created_at: formatDate(leave.created_at, true)!,
        start_date: formatDate(leave.start_date),
        end_date: formatDate(leave.end_date),

        selected_day: formatDate(leave.selected_day),
        start_hour: convertTo12HourFormat(leave.start_hour),
        end_hour: convertTo12HourFormat(leave.end_hour),
      })),
    [leaves]
  );

  return {
    formattedLeaves,
    leavesLoading,
    refetchLeaves,

    paginatePage,
    handlePageChange,

    leaveStatus,
    handleChangeStatus,
  };
};

const getLeaveStatus = (approved: boolean | null): LeaveStatus => {
  if (approved === null) return 'pending';
  if (approved === false) return 'rejected';
  return 'approved';
};

export const getFilter = (status?: LeaveStatus): ['approved'] | boolean => {
  if (status === 'approved') return true;
  if (status === 'rejected') return false;
  return ['approved'];
};
