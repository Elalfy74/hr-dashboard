import { useState } from 'react';
import { Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from '@/components/ui/dialog';

import AddEmployeeForm from './add-employee-form';

export const AddEmployee = () => {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={cn(
            'gap-1 rounded-3xl center text-mainBlack px-3 py-2.5 bg-mainPurple h-fit font-medium',
            'hover:bg-mainPurple/90 duration-300'
          )}
        >
          <Plus className='w-4' />
          Add Employee
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-xl'>
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
        </DialogHeader>
        <AddEmployeeForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};
