import { DataTable } from '@/components/ui/data-table';
import { Card } from '@/components/ui/card';

import { EmployeeWithDepartment } from '@/types';
import { columns } from './columns';

export interface EmployeesData {
  data: EmployeeWithDepartment[];
  handlePageChange: (e: { selected: number }) => void;
  pageCount?: number;
  paginatePage: number;
  employeesRefetch: () => void;
}

export const EmployeesTable = (props: EmployeesData) => {
  const { data, pageCount, handlePageChange, paginatePage, employeesRefetch } =
    props;

  return (
    <Card className='overflow-hidden'>
      <DataTable
        columns={columns(employeesRefetch)}
        data={data}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
        paginatePage={paginatePage}
      />
    </Card>
  );
};
