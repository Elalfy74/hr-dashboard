import { PaginationParam, SortParams } from '@/types';

import { BaseRepo } from './base-repo';

const leavesRepo = new BaseRepo('leaves');

interface GetLeavesParam extends PaginationParam, SortParams<'leaves'> {}

export const getLeaves = async (param: GetLeavesParam) => {
  return leavesRepo.findMany(param);
};

// Count
export const getTotalLeavesCount = async () => {
  return leavesRepo.findCount({});
};

export const getPendingLeavesCount = async () => {
  return leavesRepo.findCount({
    nullFilter: ['approved'],
  });
};

export const getLeavesAsDaysCount = async () => {
  return leavesRepo.findCount({
    filter: {
      leave_type_days: true,
    },
  });
};

export const getMarriageLeavesCount = async () => {
  return leavesRepo.findCount({
    filter: {
      leave_reason: 'Marriage',
    },
  });
};
