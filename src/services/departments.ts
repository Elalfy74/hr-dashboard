import { BaseRepo } from './base-repo';

const departmentsRepo = new BaseRepo('departments');

export function getDepartments() {
  return departmentsRepo.findMany({});
}
