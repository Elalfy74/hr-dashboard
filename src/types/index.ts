import { Database } from './database.types';

export type Employee = Database['public']['Tables']['employees']['Row'];

export type EmployeeWithDepartment = Employee & {
  departments: {
    name: string;
  } | null;
};

export type Job = Database['public']['Tables']['jobs']['Row'];
