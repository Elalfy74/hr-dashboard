import { uploadImage } from './supabase/storage';
import { BaseRepo } from './base-repo';
import type { EmployeeWithDepartment, PaginationParam } from '@/types';

import { AddEmployeeFormState } from '@/pages/employees/components/add-employee/add-employee-schema';
import { EditEmployeeFormState } from '@/pages/employees/components/edit-employee/edit-employee-schema';

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

export async function getSingleEmployee(id: number) {
  return employeesRepo.findOne({
    id,
    select: `*, departments!inner (name)`,
  }) as Promise<EmployeeWithDepartment>;
}

export async function addEmployee(input: AddEmployeeFormState) {
  const avatarUrl = await uploadImage(input.avatar, 'avatars');

  const date_of_joining = input.date_of_joining.toISOString();

  return employeesRepo.create({
    ...input,
    date_of_joining,
    avatar: avatarUrl,
  });
}

interface UpdateEmployeeParam {
  id: number;
  input: EditEmployeeFormState;
}

export async function updateEmployee({ id, input }: UpdateEmployeeParam) {
  let avatarUrl;
  let date_of_joining;

  if (input.date_of_joining) {
    date_of_joining = input.date_of_joining.toISOString();
  }

  if (input.avatar) {
    avatarUrl = await uploadImage(input.avatar, 'avatars');
  }

  return employeesRepo.updateOne({
    id,
    input: { ...input, date_of_joining, avatar: avatarUrl },
  });
}

export async function deleteEmployee(id: number) {
  return employeesRepo.deleteOne({ id });
}
