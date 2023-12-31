import { Link } from 'react-router-dom';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader } from '@/components/ui/loader';

import { usePendingLeaves } from './hooks/use-pending-leaves';

import { LeaveRequest } from './components/leave-request';

export const PendingLeaves = () => {
  const { formattedLeaves, pendingLeavesLoading, refetch } = usePendingLeaves();

  return (
    <Card className='col-span-2 row-span-2'>
      <CardHeader className='flex-row justify-between'>
        <CardTitle>Pending Leaves</CardTitle>
        <Link to='/leaves/all' className='text-blue-500 hover:text-blue-700'>
          See All
        </Link>
      </CardHeader>
      <CardContent>
        {pendingLeavesLoading && (
          <div className='center'>
            <Loader text='' className='w-8 h-8' />
          </div>
        )}
        <ScrollArea className='h-[24rem]'>
          {formattedLeaves && (
            <div className='flex flex-col gap-4'>
              {formattedLeaves.map((leave) => (
                <LeaveRequest key={leave.id} leave={leave} refetch={refetch} />
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
