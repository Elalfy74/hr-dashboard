import { PencilIcon, Trash2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DeleteAlert } from '@/components/delete-alert';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { useDeleteEntity } from '@/hooks/use-delete-entity';

import { deleteLeave } from '@/services/leaves';
import { EditLeave } from '../edit-leave';

interface ActionsProps {
  id: number;
  onDone: () => void;
}

export const LeavesTableActions = ({ id, onDone }: ActionsProps) => {
  const { alertOpen, setAlertOpen, deleteEntity, isDeleting } = useDeleteEntity(
    {
      deleteFun: deleteLeave,
      entity: 'Leave',
      onDone,
    }
  );

  const handleDeleteLeave = () => deleteEntity(id);

  return (
    <div className='flex gap-2'>
      <EditLeave id={id} onDone={onDone}>
        <Button
          variant='outline'
          size='icon'
          className='bg-mainPurple hover:bg-mainPurple/90'
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='w-full h-full center'>
                <PencilIcon className='w-4 h-4' />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </EditLeave>

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
