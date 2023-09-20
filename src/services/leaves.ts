import { Filter, NullFilter, PaginationParam, SortParams } from '@/types';

import { BaseRepo } from './base-repo';

const leavesRepo = new BaseRepo('leaves');

interface GetLeavesParam extends PaginationParam, SortParams<'leaves'> {
  filter?: Filter<'leaves'>;
  nullFilter?: NullFilter<'leaves'>;
  withDepartment?: boolean;
}

export const getLeaves = async (param: GetLeavesParam) => {
  return leavesRepo.findMany({
    ...param,
    select: param.withDepartment ? `*, departments!inner (name)` : undefined,
  });
};

interface UpdateLeaveParam {
  id: number;
  input: Filter<'leaves'>;
}

export const updateLeave = async (param: UpdateLeaveParam) => {
  return leavesRepo.updateOne(param);
};

interface ApproveOrRejectLeaveParam {
  id: number;
  action: 'approve' | 'reject';
}

export const approveOrRejectLeave = async ({
  id,
  action,
}: ApproveOrRejectLeaveParam) => {
  return leavesRepo.updateOne({
    id,
    input: {
      approved: action === 'approve',
    },
  });
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

export const getLeavesForDaysCount = async () => {
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
