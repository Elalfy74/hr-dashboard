import { AppBadge } from '../../../components/app-badge';

import type { FormattedLeave, LeaveWithDepartment } from '@/types';

export const LeavePeriodBadge = ({
  leave,
}: {
  leave: FormattedLeave | LeaveWithDepartment;
}) => {
  const { leavePeriod, leaveTime } = formatLeavePeriodAndTime(leave);

  return (
    <div className='flex gap-2'>
      <AppBadge variant='purple'>{leavePeriod}</AppBadge>
      {leaveTime && <AppBadge variant='blue'>{leaveTime}</AppBadge>}
    </div>
  );
};

export const formatLeavePeriodAndTime = (
  leave: FormattedLeave | LeaveWithDepartment
) => {
  const leavePeriod = leave.leave_type_days
    ? `${leave.start_date} To ${leave.end_date}`
    : `${leave.selected_day}`;

  const leaveTime = leave.leave_type_days
    ? undefined
    : `${leave.start_hour} To ${leave.end_hour}`;

  return {
    leavePeriod,
    leaveTime,
  };
};
