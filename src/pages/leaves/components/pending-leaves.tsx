import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { AppBadge } from '@/components/app-badge';
import { AppButton } from '@/components/app-button';

export const PendingLeaves = () => {
  return (
    <Card className='col-span-2 row-span-2'>
      <CardHeader>
        <CardTitle>Pending Leaves</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className='h-[27rem]'>
          <div className='flex flex-col gap-4'>
            <LeaveRequest />
            <LeaveRequest />
            <LeaveRequest />
            <LeaveRequest />
            <LeaveRequest />
            <LeaveRequest />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export const LeaveRequest = () => (
  <div className='flex items-center justify-between px-4 py-3 text-sm bg-opacity-25 border rounded-full bg-zinc-100'>
    <div>
      <p className='font-semibold text-blue-400'>Mahmoud Elalfy</p>
      <p>Development</p>
    </div>

    <p>Vacation</p>

    <AppBadge variant='purple'>20 May to 21 May</AppBadge>
    <div className='flex justify-end gap-3'>
      <AppButton>Approve</AppButton>
      <Button className='rounded-full' variant='destructive'>
        Reject
      </Button>
    </div>
  </div>
);
