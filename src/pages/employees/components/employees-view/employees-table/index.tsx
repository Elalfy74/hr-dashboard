import { DataTable } from '@/components/ui/data-table';
import { Card } from '@/components/ui/card';

import { EmployeeWithDepartment } from '@/types';
import { columns } from './columns';

export interface EmployeesData {
  data: EmployeeWithDepartment[];
  handleNext: () => void;
  canNext: boolean;
  handlePrev: () => void;
  canPrev: boolean;
}

export const EmployeesTable = (props: EmployeesData) => {
  const { data, handleNext, handlePrev, canNext, canPrev } = props;

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
