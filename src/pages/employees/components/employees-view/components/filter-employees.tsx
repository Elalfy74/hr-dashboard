import { useDepartments } from '../hooks/use-departments';
import type { StatusFilter } from '../hooks/use-filters';

import { FilterItem } from '@/components/filter-item';

interface FilterEmployeesProps {
  statusFilter: StatusFilter;
  handleStatusFilter: (status: StatusFilter) => void;
  departmentFilter?: number;
  handleDepartmentFilter: (department: number) => void;
}

export const FilterEmployees = (props: FilterEmployeesProps) => {
  const {
    statusFilter,
    handleStatusFilter,
    departmentFilter,
    handleDepartmentFilter,
  } = props;

  const departments = useDepartments();

  const StatusFilterItem = () => (
    <FilterItem
      options={[
        {
          value: 'inactive',
          label: 'inactive',
        },
        {
          value: 'active',
          label: 'active',
        },
      ]}
      placeholder='Select a Status'
      onSelect={(value) => handleStatusFilter(value as StatusFilter)}
      value={statusFilter}
    />
  );

  const DepartmentFilterItem = () => (
    <>
      {departments && (
        <FilterItem
          options={departments.map(({ label, value }) => ({
            label,
            value: value.toString(),
          }))}
          onSelect={(value) => handleDepartmentFilter(+value)}
          value={departmentFilter?.toString()}
          placeholder='Select a department'
        />
      )}
    </>
  );

  return (
    <div className='flex gap-4'>
      <StatusFilterItem />
      <DepartmentFilterItem />
    </div>
  );
};
