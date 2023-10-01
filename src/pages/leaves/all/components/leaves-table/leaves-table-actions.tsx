import { Trash2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DeleteAlert } from '@/components/delete-alert';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import type { FormattedLeave } from '@/types';
import { useDeleteEntity } from '@/hooks/use-delete-entity';

import { deleteLeave } from '@/services/leaves';
import { ViewLeave } from '@/pages/leaves/components/view-leave';

interface ActionsProps {
  leave: FormattedLeave;
  onDone: () => void;
}

export const LeavesTableActions = ({ leave, onDone }: ActionsProps) => {
  const { alertOpen, setAlertOpen, deleteEntity, isDeleting } = useDeleteEntity(
    {
      deleteFun: deleteLeave,
      entity: 'Leave',
      onDone,
    }
  );

  const handleDeleteLeave = () => deleteEntity(leave.id);

  return (
    <div className='flex gap-2'>
      <ViewLeave leave={leave} refetch={onDone} />

      <DeleteAlert
        title='Leave'
        onDelete={handleDeleteLeave}
        open={alertOpen}
        onOpenChange={setAlertOpen}
        isLoading={isDeleting}
      >
        <Button variant='destructive' size='icon'>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='w-full h-full center'>
                <Trash2Icon className='w-4 h-4' />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </DeleteAlert>
    </div>
  );
};
