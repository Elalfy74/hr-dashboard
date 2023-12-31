import { PencilIcon, Trash2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DeleteAlert } from '@/components/delete-alert';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { useDeleteEmployee } from '../hooks/use-delete-employee';
import { EditEmployee } from '../../edit-employee';

interface ActionsProps {
  id: number;
  onDone: () => void;
}

export const EmployeesTableActions = ({ id, onDone }: ActionsProps) => {
  const { alertOpen, setAlertOpen, deleteEntity, isDeleting } =
    useDeleteEmployee(onDone);

  const handleDeleteEmployee = () => deleteEntity(id);

  return (
    <div className='flex gap-2'>
      <EditEmployee id={id} onDone={onDone}>
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
      </EditEmployee>

      <DeleteAlert
        title='Employee'
        onDelete={handleDeleteEmployee}
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
