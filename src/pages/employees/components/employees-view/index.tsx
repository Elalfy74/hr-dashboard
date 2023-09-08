import { LayoutGridIcon, TableIcon } from 'lucide-react';

import { useBoolean } from '@/hooks/use-boolean';
import { Loader } from '@/components/ui/loader';

import { useEmployees } from './hooks/use-employees';

import { EmployeesGrid } from './employees-grid';
import { EmployeesTable } from './employees-table';
import { Switch } from '../../../../components/switch';
import { FilterEmployees } from './components/filter-employees';

export const EmployeesView = () => {
  const {
    employeesData,
    employeesError,
    employeesLoading,
    handlePageChange,
    pageCount,
    paginatePage,
    statusFilter,
    handleStatusFilter,
    departmentFilter,
    handleDepartmentFilter,
    employeesRefetch,
  } = useEmployees();

  const { value: isTableView, toggle } = useBoolean(true);

  if (employeesError) {
    return (
      <div className='text-lg font-semibold text-center text-white'>
        Something Went Wrong
      </div>
    );
  }

  if (employeesLoading || !employeesData) {
    return (
      <div className='text-white center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between mb-4'>
        <FilterEmployees
          handleStatusFilter={handleStatusFilter}
          statusFilter={statusFilter}
          departmentFilter={departmentFilter}
          handleDepartmentFilter={handleDepartmentFilter}
        />
        <Switch
          isFirstActive={isTableView}
          toggleActive={toggle}
          firstView={<TableIcon />}
          secondView={<LayoutGridIcon />}
          iconSize={true}
        />
      </div>

      {isTableView ? (
        <EmployeesTable
          data={employeesData}
          handlePageChange={handlePageChange}
          pageCount={pageCount}
          paginatePage={paginatePage}
          employeesRefetch={employeesRefetch}
        />
      ) : (
        <EmployeesGrid
          data={employeesData}
          handlePageChange={handlePageChange}
          pageCount={pageCount}
          paginatePage={paginatePage}
          employeesRefetch={employeesRefetch}
        />
      )}
    </div>
  );
};
