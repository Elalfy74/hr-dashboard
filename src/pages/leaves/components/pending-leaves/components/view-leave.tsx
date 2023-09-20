import { EyeIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { TextField } from '@/components/ui/text-field';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import type { LeaveWithDepartment } from '@/types';

import { LeaveRequestActions } from './leave-request-actions';

interface ViewLeaveProps {
  leave: LeaveWithDepartment;
  leavePeriod: string;
  leaveTime?: string;
  refetch: () => void;
}

export const ViewLeave = (props: ViewLeaveProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='icon'>
          <EyeIcon className='w-4 h-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-xl'>
        <DialogHeader>
          <DialogTitle>Leave Info</DialogTitle>
        </DialogHeader>
        <ViewLeaveContent {...props} />
      </DialogContent>
    </Dialog>
  );
};

const ViewLeaveContent = ({ leave, ...props }: ViewLeaveProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <TextField
        label='Full Name'
        text={`${leave.first_name} ${leave.last_name}`}
      />

      <TextField label='Email' text={leave.email} />

      <TextField label='Department' text={leave.departments!.name} />

      <TextField label='Leave Reason' text={leave.leave_reason} />

      <TextField label='Leave Period' text={props.leavePeriod} />

      {props.leaveTime && (
        <TextField label='Leave Time' text={props.leaveTime} />
      )}

      {leave.comments && <TextField label='Comments' text={leave.comments} />}

      <div className='flex items-center justify-center gap-10 mt-4'>
        <LeaveRequestActions id={leave.id} onDone={props.refetch} />
      </div>
    </div>
  );
};
