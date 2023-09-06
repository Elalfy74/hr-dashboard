import { useState } from 'react';
import { LayoutGridIcon, TableIcon } from 'lucide-react';

import { Loader } from '@/components/ui/loader';

import { useEmployees } from './hooks/use-employees';

import { EmployeesGrid } from './employees-grid';
import { EmployeesTable } from './employees-table';
import { Switch } from '../../../../components/switch';
import { FilterEmployees } from './components/filter-employees';

export const EmployeesView = () => {
  const {
    data,
    error,
    isLoading,
    handlePageChange,
    pageCount,
    currentPage,
    statusFilter,
    handleStatusFilter,
    departmentFilter,
    handleDepartmentFilter,
    employeesRefetch,
  } = useEmployees();

  const [isTableView, setIsTableView] = useState(true);

  const handleChangeView = () => setIsTableView((prev) => !prev);

  if (error) {
    return (
      <div className='text-lg font-semibold text-center text-white'>
        Something Went Wrong
      </div>
    );
  }

  if (isLoading || !data) {
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
          view={isTableView}
          handleChangeView={handleChangeView}
          firstView={<LayoutGridIcon />}
          secondView={<TableIcon />}
          iconSize={true}
        />
      </div>

      {isTableView ? (
        <EmployeesTable
          data={data}
          handlePageChange={handlePageChange}
          pageCount={pageCount}
          currentPage={currentPage}
          employeesRefetch={employeesRefetch}
        />
      ) : (
        <EmployeesGrid
          data={data}
          handlePageChange={handlePageChange}
          pageCount={pageCount}
          currentPage={currentPage}
          employeesRefetch={employeesRefetch}
        />
      )}
    </div>
  );
};
