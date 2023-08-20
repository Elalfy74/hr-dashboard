import { useMemo } from 'react';
import { getDepartments } from '@/services/departments';
import { useQuery } from '@tanstack/react-query';

export const useDepartments = () => {
  const { data } = useQuery({
    queryKey: ['departments'],
    queryFn: getDepartments,
  });

  return useMemo(
    () =>
      data?.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    [data]
  );
};
