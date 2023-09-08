import { useState } from 'react';

export type StatusFilter = 'active' | 'inactive' | undefined;

export const useFilters = (resetPage: () => void) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(undefined);
  const [departmentFilter, setDepartmentFilter] = useState<number | undefined>(
    undefined
  );

  let statusAsBoolean: boolean | undefined;

  if (statusFilter === 'active') {
    statusAsBoolean = true;
  } else if (statusFilter === 'inactive') {
    statusAsBoolean = false;
  } else {
    statusAsBoolean = undefined;
  }

  const handleStatusFilter = (status: StatusFilter) => {
    setStatusFilter(status);
    resetPage();
  };

  const handleDepartmentFilter = (department: number) => {
    setDepartmentFilter(department);
    resetPage();
  };

  return {
    statusFilter,
    statusAsBoolean,
    handleStatusFilter,
    departmentFilter,
    handleDepartmentFilter,
  };
};
