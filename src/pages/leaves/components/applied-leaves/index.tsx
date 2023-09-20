import type { VariantProps } from 'class-variance-authority';

import { AppBadge, appBadgeVariants } from '@/components/app-badge';
import { Loader } from '@/components/ui/loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { type LeaveStatus, useLeaves } from './use-leaves';

export const AppliedLeaves = () => {
  const { uniformedLeaves, leavesLoading } = useLeaves();

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

        {uniformedLeaves && (
          <ul className='flex flex-col justify-between h-full'>
            {uniformedLeaves.map((leave) => (
              <li key={leave.id} className='flex justify-between leaves-center'>
                <div className='text-sm'>
                  <p className='font-semibold'>{leave.createdAt}</p>
                  <p className='capitalize text-zinc-400'>{leave.reason}</p>
                </div>
                <AppBadge variant={getBadgeVariant(leave.status)}>
                  {leave.status}
                </AppBadge>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

const getBadgeVariant = (
  status: LeaveStatus
): VariantProps<typeof appBadgeVariants>['variant'] => {
  if (status === 'pending') return 'purple';
  if (status === 'approved') return 'green';
  if (status === 'rejected') return 'blue';
};
