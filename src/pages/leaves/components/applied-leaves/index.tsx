import { Loader } from '@/components/ui/loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useLeaves } from '../../hooks/use-leaves';
import { LeaveStatusBadge } from '../leave-status-badge';

export const AppliedLeaves = () => {
  const { formattedLeaves, leavesLoading } = useLeaves();

  return (
    <Card className='flex flex-col row-span-2 '>
      <CardHeader>
        <CardTitle>Applied Leaves</CardTitle>
      </CardHeader>
      <CardContent className='flex-1'>
        {leavesLoading && (
          <div className='center'>
            <Loader className='w-8 h-8 ' text='' />
          </div>
        )}

        {formattedLeaves && (
          <ul className='flex flex-col justify-between h-full'>
            {formattedLeaves.map((leave) => (
              <li key={leave.id} className='flex justify-between leaves-center'>
                <div className='text-sm'>
                  <p className='font-semibold'>{leave.created_at}</p>
                  <p className='capitalize text-zinc-400'>
                    {leave.leave_reason}
                  </p>
                </div>
                <LeaveStatusBadge status={leave.status} />
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
