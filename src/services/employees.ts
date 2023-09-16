import { uploadImage } from './supabase/storage';
import { BaseRepo } from './base-repo';
import type { EmployeeWithDepartment, PaginationParam } from '@/types';

import { IFormState } from '@/pages/employees/components/add-employee/add-employee-schema';

const employeesRepo = new BaseRepo('employees');

interface GetEmployeesFilter {
  active?: boolean;
  department?: number;
}

interface GetEmployeesParam extends PaginationParam {
  filter: GetEmployeesFilter;
}

export async function getEmployees(param: GetEmployeesParam) {
  return employeesRepo.findMany({
    ...param,
    select: `*, departments!inner (name)`,
  }) as Promise<EmployeeWithDepartment[]>;
}

export async function getEmployeesCount(filter: GetEmployeesFilter) {
  return employeesRepo.findCount({ filter });
}

export async function addEmployee(input: IFormState) {
  const avatarUrl = await uploadImage(input.avatar, 'avatars');

  const date_of_joining = input.date_of_joining.toISOString();

  return employeesRepo.create({
    ...input,
    date_of_joining,
    avatar: avatarUrl,
  });
}

export async function deleteEmployee(id: number) {
  return employeesRepo.deleteOne({ id });
}
