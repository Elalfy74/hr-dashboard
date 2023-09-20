import { PlusIcon } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

import { AppButton } from './app-button';

interface FormDialogProps {
  label: string;
  action: 'add' | 'edit';
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  triggerComponent?: React.ReactNode;
}

export const FormDialog = (props: FormDialogProps) => {
  const { action, label, open, onOpenChange, children, triggerComponent } =
    props;

  const trigger: React.ReactNode = triggerComponent || (
    <AppButton icon={<PlusIcon />}>Add {label}</AppButton>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
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
