import { BaseRepo } from './base-repo';

const leavesRepo = new BaseRepo('leaves');

export const getTotalLeavesCount = async () => {
  return leavesRepo.findCount({});
};

export const getPendingLeavesCount = async () => {
  return leavesRepo.findCount({
    filter: {
      approved: null,
    },
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
    likeFilter: {
      leave_reason: '%marriage%',
    },
  });
};
