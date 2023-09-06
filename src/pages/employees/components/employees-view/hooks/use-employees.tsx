import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getEmployees, getEmployeesCount } from '@/services/employees';
import { useFilters } from './use-filters';

const ITEMS_PER_PAGE = 10;

export const useEmployees = () => {
  const [page, setPage] = useState(1);
  // Because React Paginate Start From 0
  const handlePageChange = (page: number) => setPage(page + 1);

  const { data: count } = useQuery({
    queryKey: ['Employees Count'],
    queryFn: getEmployeesCount,
  });

  const {
    handleStatusFilter,
    statusAsBoolean,
    statusFilter,
    departmentFilter,
    handleDepartmentFilter,
  } = useFilters();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['employees', page, statusAsBoolean, departmentFilter],
    queryFn: () =>
      getEmployees(page, ITEMS_PER_PAGE, {
        active: statusAsBoolean,
        department: departmentFilter,
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
    refetch,
  };
};
