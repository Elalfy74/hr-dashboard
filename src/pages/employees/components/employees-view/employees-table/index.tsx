import { DataTable } from '@/components/ui/data-table';
import { Card } from '@/components/ui/card';

import { EmployeeWithDepartment } from '@/types';
import { columns } from './columns';

export interface EmployeesData {
  data: EmployeeWithDepartment[];
  handlePageChange: (page: number) => void;
  pageCount?: number;
  currentPage: number;
  employeesRefetch: () => void;
}

export const EmployeesTable = (props: EmployeesData) => {
  const { data, pageCount, handlePageChange, currentPage, employeesRefetch } =
    props;

  if (!pageCount) return;

  return (
    <Card className='overflow-hidden'>
      <DataTable
        columns={columns(employeesRefetch)}
        data={data}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Card>
  );
};
