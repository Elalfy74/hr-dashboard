import { PlusIcon } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

import { cn } from '@/lib/utils';

interface FormDialogProps {
  action: 'add' | 'edit';
  label: string;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  triggerComponent?: React.ReactNode;
}

export const FormDialog = (props: FormDialogProps) => {
  const { action, label, open, onOpenChange, children, triggerComponent } =
    props;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {triggerComponent ? (
          triggerComponent
        ) : (
          <button
            className={cn(
              'gap-1 rounded-3xl center text-mainBlack px-3 py-2.5 bg-mainPurple h-fit font-medium',
              'hover:bg-mainPurple/90 duration-300'
            )}
          >
            <PlusIcon className='w-4' />
            Add {label}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className='sm:max-w-xl'>
        <DialogHeader>
          <DialogTitle>
            {action === 'add' ? 'Add new' : 'Edit'} {label}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
