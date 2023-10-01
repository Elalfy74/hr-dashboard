import { useState } from 'react';

import { LeaveStatus } from '@/types';

export const useLeavesFilter = (resetPage: () => void) => {
  let filter;
  let nullFilter: undefined | ['approved'];

  const [leaveStatus, setLeaveStatus] = useState<LeaveStatus | undefined>(
    undefined
  );
  const handleChangeStatus = (status: LeaveStatus) => {
    setLeaveStatus(status);
    resetPage();
  };

  const statusAsBoolean = getOriginalStatus(leaveStatus);

  if (statusAsBoolean === null) {
    nullFilter = ['approved'];
  } else {
    filter = { approved: statusAsBoolean };
  }

  return {
    leaveStatus,
    handleChangeStatus,
    filter,
    nullFilter,
  };
};

const getOriginalStatus = (
  status?: LeaveStatus
): boolean | undefined | null => {
  if (status === 'approved') return true;
  if (status === 'rejected') return false;
  if (status === 'pending') return null;

  return;
};
