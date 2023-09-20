import { Database } from './database.types';

export type Employee = EntityValue<'employees'>;

type WithDepartment = {
  departments: {
    name: string;
  } | null;
};
export type EmployeeWithDepartment = Employee & WithDepartment;

export type Job = EntityValue<'jobs'>;

export type Leave = EntityValue<'leaves'>;

export type LeaveWithDepartment = Leave & WithDepartment;

export type Entity = keyof Database['public']['Tables'];

export type EntityValue<T extends Entity> =
  Database['public']['Tables'][T]['Row'];

export type CreateEntity<T extends Entity> =
  Database['public']['Tables'][T]['Insert'];

export type Filter<T extends Entity> = Partial<EntityValue<T>>;

export type NullFilter<T extends Entity> = (keyof EntityValue<T>)[];

export type PaginationParam = {
  page?: number;
  itemsPerPage?: number;
};

export interface SortParams<T extends Entity> {
  orderBy?: keyof EntityValue<T>;
  asc?: boolean;
}
