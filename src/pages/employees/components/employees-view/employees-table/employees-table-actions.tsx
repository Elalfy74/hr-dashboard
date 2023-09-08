import { Link } from 'react-router-dom';
import { PencilIcon, Trash2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DeleteAlert } from '@/components/delete-alert';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { useDeleteEmployee } from '../hooks/use-delete-employee';

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

  const handleDeleteEmployee = () => deleteEmployee(id);

  return (
    <div className='flex gap-2'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='bg-mainPurple hover:bg-mainPurple/90'
          >
            <Link to={`/employees/${id}`}>
              <PencilIcon className='w-4 h-4' />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit</p>
        </TooltipContent>
      </Tooltip>

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
