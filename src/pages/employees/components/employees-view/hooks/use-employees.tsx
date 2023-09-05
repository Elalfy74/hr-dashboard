import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getEmployees } from '@/services/employees';

export const useEmployees = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => setPage((page) => page + 1);
  const handlePrev = () => page > 1 && setPage((page) => page - 1);

  const canNext = true;
  const canPrev = page > 1;

  const { data, error, isLoading } = useQuery({
    queryKey: ['employees', page],
    queryFn: () => getEmployees(page),
    keepPreviousData: true,
  });

  return {
    data,
    error,
    isLoading,
    handleNext,
    canNext,
    handlePrev,
    canPrev,
  };
};
