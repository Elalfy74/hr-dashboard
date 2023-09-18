import { PencilIcon, Trash2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DeleteAlert } from '@/components/delete-alert';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { useDisclosure } from '@/hooks/use-disclosure';

import { useDeleteEmployee } from '../hooks/use-delete-employee';
import { EditEmployee } from '../../edit-employee';

interface ActionsProps {
  id: number;
  onDone: () => void;
}

export const EmployeesTableActions = ({ id, onDone }: ActionsProps) => {
  const {
    alertOpen,
    setAlertOpen,
    openAlert,
    deleteEmployeeLoading,
    deleteEmployee,
  } = useDeleteEmployee(onDone);

  // Form Dialog
  const {
    isOpen: formIsOpen,
    setIsOpened: setOpenForm,
    close: closeForm,
    open: openForm,
  } = useDisclosure(false);

  const onActionDone = () => {
    closeForm();
    onDone();
  };

  const handleDeleteEmployee = () => deleteEmployee(id);

  return (
    <div className='flex gap-2'>
      <EditEmployee
        id={id}
        onDone={onActionDone}
        isOpen={formIsOpen}
        open={openForm}
        setIsOpened={setOpenForm}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='bg-mainPurple hover:bg-mainPurple/90'
              onClick={openForm}
            >
              <PencilIcon className='w-4 h-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </EditEmployee>

      <DeleteAlert
        title='Employee'
        onDelete={handleDeleteEmployee}
        open={alertOpen}
        onOpenChange={setAlertOpen}
        isLoading={deleteEmployeeLoading}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='destructive' size='icon' onClick={openAlert}>
              <Trash2Icon className='w-4 h-4' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </DeleteAlert>
    </div>
  );
};
