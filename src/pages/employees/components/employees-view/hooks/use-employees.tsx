import { useState } from 'react';
import { useQueryClient, useQuery } from '@tanstack/react-query';

import { getEmployees } from '@/services/employees';

export const useEmployees = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const handleNext = () => setPage((page) => page + 1);
  const handlePrev = () => page > 1 && setPage((page) => page - 1);

  const canNext = true;
  const canPrev = page > 1;

  const { data } = useQuery({
    queryKey: ['employees', page],
    queryFn: () => getEmployees(page),
    initialData: () => queryClient.getQueryData(['employees', page - 1]),
  });

  return {
    data,
    handleNext,
    canNext,
    handlePrev,
    canPrev,
  };
};
