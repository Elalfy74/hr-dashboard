import { useState } from 'react';

export type StatusFilter = 'active' | 'inactive' | undefined;

export const useFilters = () => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(undefined);
  const [departmentFilter, setDepartmentFilter] = useState<string | undefined>(
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
  };

  const handleDepartmentFilter = (department: string) => {
    setDepartmentFilter(department);
  };

  return {
    statusFilter,
    statusAsBoolean,
    handleStatusFilter,
    departmentFilter,
    handleDepartmentFilter,
  };
};
