import { useQuery } from '@tanstack/react-query';

import { usePaginate } from '@/hooks/use-paginate';

import { getEmployees, getEmployeesCount } from '@/services/employees';
import { useFilters } from './use-filters';

const ITEMS_PER_PAGE = 10;

export const useEmployees = () => {
  const { page, paginatePage, handlePageChange, resetPage } = usePaginate();

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
        department: departmentFilter,
      }),
  });

  const {
    data: employeesData,
    error: employeesError,
    isLoading: employeesLoading,
    refetch: employeesRefetch,
  } = useQuery({
    queryKey: ['Employees', page, statusAsBoolean, departmentFilter],
    queryFn: () =>
      getEmployees({
        page,
        itemsPerPage: ITEMS_PER_PAGE,
        filter: {
          active: statusAsBoolean,
          department: departmentFilter,
        },
      }),
    keepPreviousData: true,
  });

  const pageCount = count ? Math.ceil(count / ITEMS_PER_PAGE) : undefined;

  return {
    employeesData,
    employeesError,
    employeesLoading,
    employeesRefetch,
    paginatePage,
    handlePageChange,
    pageCount,
    statusFilter,
    handleStatusFilter,
    departmentFilter,
    handleDepartmentFilter,
  };
};
