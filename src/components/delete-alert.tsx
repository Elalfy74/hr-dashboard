import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Loader } from './ui/loader';

interface DeleteAlertProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  onClick: () => void;
  children: React.ReactNode;
  isLoading: boolean;
}
export function DeleteAlert(props: DeleteAlertProps) {
  return (
    <AlertDialog open={props.open} onOpenChange={props.onOpenChange}>
      <AlertDialogTrigger asChild>{props.children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently{' '}
            <span className='font-semibold'>{props.title}</span> and all his
            data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            variant='destructive'
            onClick={props.onClick}
            disabled={props.isLoading}
          >
            {props.isLoading ? <Loader /> : 'Delete'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
