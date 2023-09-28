import { AppButton } from '@/components/app-button';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';

import { useApproveOrRejectLeave } from '../hooks/use-approve-reject-leave';

export const LeaveRequestActions = ({
  id,
  onDone,
}: {
  id: number;
  onDone: () => void;
}) => {
  const { approveOrReject, approveLoading, rejectLoading } =
    useApproveOrRejectLeave(onDone);

  return (
    <>
      <AppButton
        disabled={approveLoading || rejectLoading}
        onClick={() =>
          approveOrReject({
            id,
            action: 'approve',
          })
        }
      >
        {approveLoading ? <Loader /> : 'Approve'}
      </AppButton>

      <Button
        className='text-base rounded-full'
        variant='destructive'
        disabled={approveLoading || rejectLoading}
        onClick={() =>
          approveOrReject({
            id,
            action: 'reject',
          })
        }
      >
        {rejectLoading ? <Loader /> : 'Reject'}
      </Button>
    </>
  );
};
