import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getEmployees, getEmployeesCount } from '@/services/employees';
import { useFilters } from './use-filters';

const ITEMS_PER_PAGE = 10;

export const useEmployees = () => {
  const [page, setPage] = useState(1);
  // Because React Paginate Start From 0
  const handlePageChange = (page: number) => setPage(page + 1);
  const resetPage = () => handlePageChange(0);

  const {
    handleStatusFilter,
    statusAsBoolean,
    statusFilter,
    departmentFilter,
    handleDepartmentFilter,
  } = useFilters(resetPage);

  const { data: count } = useQuery({
    queryKey: ['Employees Count', statusAsBoolean, departmentFilter],
    queryFn: () =>
      getEmployeesCount({
        active: statusAsBoolean,
        departmentId: departmentFilter,
      }),
  });

  const {
    data,
    error,
    isLoading,
    refetch: employeesRefetch,
  } = useQuery({
    queryKey: ['Employees', page, statusAsBoolean, departmentFilter],
    queryFn: () =>
      getEmployees(page, ITEMS_PER_PAGE, {
        active: statusAsBoolean,
        departmentId: departmentFilter,
      }),
    keepPreviousData: true,
  });

  const pageCount = count ? Math.ceil(count / ITEMS_PER_PAGE) : undefined;

  return {
    data,
    error,
    isLoading,
    handlePageChange,
    currentPage: page,
    pageCount,
    statusFilter,
    handleStatusFilter,
    departmentFilter,
    handleDepartmentFilter,
    employeesRefetch,
  };
};
