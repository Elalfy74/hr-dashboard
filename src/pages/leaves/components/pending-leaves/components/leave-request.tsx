import { AppBadge } from '@/components/app-badge';

import type { LeaveWithDepartment } from '@/types';

import { ViewLeave } from './view-leave';
import { LeaveRequestActions } from './leave-request-actions';

export const LeaveRequest = ({
  leave,
  refetch,
}: {
  leave: LeaveWithDepartment;
  refetch: () => void;
}) => {
  const leavePeriod = leave.leave_type_days
    ? `${leave.start_date} To ${leave.end_date}`
    : `${leave.selected_day}`;

  const leaveTime = leave.leave_type_days
    ? undefined
    : `${leave.start_hour} To ${leave.end_hour}`;

  return (
    <div className='flex items-center justify-between px-4 py-3 text-sm bg-opacity-25 border rounded-full bg-zinc-100'>
      <div className='min-w-[130px]'>
        <p className='font-semibold text-blue-400 capitalize'>
          {leave.first_name} {leave.last_name}
        </p>
        <p>{leave.departments?.name}</p>
      </div>

      <p className='min-w-[60px] text-center'>{leave.leave_reason}</p>

      <div className='flex gap-2'>
        <AppBadge variant='purple'>{leavePeriod}</AppBadge>
        {leaveTime && <AppBadge variant='blue'>{leaveTime}</AppBadge>}
      </div>

      <div className='flex gap-3'>
        <LeaveRequestActions id={leave.id} onDone={refetch} />
        <ViewLeave
          refetch={refetch}
          leave={leave}
          leavePeriod={leavePeriod}
          leaveTime={leaveTime}
        />
      </div>
    </div>
  );
};
