import { supabase } from './supabase';

import { IFormState } from '@/pages/employees/components/add-employee/add-employee-schema';

export async function getEmployees(page = 1, itemsPerPage = 10) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;

  const { data, error } = await supabase
    .from('employees')
    .select(
      `*, departments (
        name
    )`
    )
    .range(startIndex, endIndex);

  if (error) throw new Error(error.message);

  return data;
}

export async function addEmployee(input: IFormState) {
  const date_of_joining = input.date_of_joining.toISOString();

  const { error } = await supabase.from('employees').insert({
    ...input,
    date_of_joining,
    avatar: undefined,
  });

  if (error) throw new Error(error.message);
}
