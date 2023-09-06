import { uploadImage } from './storage';
import { supabase } from './supabase';

import { IFormState } from '@/pages/employees/components/add-employee/add-employee-schema';

interface Filter {
  active?: boolean;
  department?: string;
}

export async function getEmployees(
  page = 1,
  itemsPerPage = 10,
  filter: Filter
) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;

  const query = supabase
    .from('employees')
    .select(`*, departments!inner (name)`);

  if (filter.active !== undefined) {
    query.eq('active', filter.active);
  }

  if (filter.department) {
    query.eq('departments.name', filter.department);
  }

  query.range(startIndex, endIndex);

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
}

export async function getEmployeesCount() {
  const { count, error } = await supabase
    .from('employees')
    .select('*', { count: 'exact', head: true });

  if (error) throw new Error(error.message);

  return count;
}

export async function addEmployee(input: IFormState) {
  const avatarUrl = await uploadImage(input.avatar, 'avatars');

  const date_of_joining = input.date_of_joining.toISOString();

  const { error } = await supabase.from('employees').insert({
    ...input,
    date_of_joining,
    avatar: avatarUrl,
  });

  if (error) throw new Error(error.message);
}

export async function deleteEmployee(id: number) {
  const { error } = await supabase.from('employees').delete().eq('id', id);

  if (error) throw new Error(error.message);
}
