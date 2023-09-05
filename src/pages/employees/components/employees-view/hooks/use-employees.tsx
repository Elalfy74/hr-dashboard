import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getEmployees, getEmployeesCount } from '@/services/employees';

const ITEMS_PER_PAGE = 10;

export const useEmployees = () => {
  const [page, setPage] = useState(1);

  // Because React Paginate Start From 0
  const handlePageChange = (page: number) => setPage(page + 1);

  const { data: count } = useQuery({
    queryKey: ['Employees Count'],
    queryFn: getEmployeesCount,
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ['employees', page],
    queryFn: () => getEmployees(page, ITEMS_PER_PAGE),
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
  };
};
