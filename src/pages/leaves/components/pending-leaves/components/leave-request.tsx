import type { LeaveWithDepartment } from '@/types';

import { ViewLeave } from './view-leave';
import { LeaveRequestActions } from './leave-request-actions';
import { LeavePeriodBadge } from '../../leave-period-badge';

export const LeaveRequest = ({
  leave,
  refetch,
}: {
  leave: LeaveWithDepartment;
  refetch: () => void;
}) => {
  return (
    <div className='flex items-center justify-between px-4 py-3 text-sm bg-opacity-25 border rounded-full bg-zinc-100'>
      <div className='min-w-[130px]'>
        <p className='font-semibold text-blue-400 capitalize'>
          {leave.first_name} {leave.last_name}
        </p>
        <p>{leave.departments?.name}</p>
      </div>

      <p className='min-w-[60px] text-center'>{leave.leave_reason}</p>

      <LeavePeriodBadge leave={leave} />

      <div className='flex gap-3'>
        <LeaveRequestActions id={leave.id} onDone={refetch} />
        <ViewLeave refetch={refetch} leave={leave} />
      </div>
    </div>
  );
};
