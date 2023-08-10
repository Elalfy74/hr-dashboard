import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getEmployees } from '@/services/employees';

import { DataTable } from '@/components/ui/data-table';
import { Card } from '@/components/ui/card';

import { columns } from './columns';

export const EmployeesTable = () => {
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

  if (!data) {
    return null;
  }

  return (
    <Card className='overflow-hidden '>
      <DataTable
        columns={columns}
        data={data}
        handleNext={handleNext}
        handlePrev={handlePrev}
        canNext={canNext}
        canPrev={canPrev}
      />
    </Card>
  );
};
