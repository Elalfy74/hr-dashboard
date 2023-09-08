import { MoreVertical } from 'lucide-react';

import { DeleteAlert } from './delete-alert';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface CardActionsProps {
  title: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  alertOpen: boolean;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
  isDeleteLoading: boolean;
  editComponent: React.ReactNode;
}

export const CardActions = (props: CardActionsProps) => {
  const {
    handleDelete,
    title,
    isMenuOpen,
    setIsMenuOpen,
    alertOpen,
    setAlertOpen,
    isDeleteLoading,
    editComponent,
  } = props;

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='self-end'>
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className='cursor-pointer' asChild>
          {editComponent}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DeleteAlert
            open={alertOpen}
            onOpenChange={setAlertOpen}
            title={title}
            onDelete={handleDelete}
            isLoading={isDeleteLoading}
          >
            <button className='w-full text-left text-red-400 cursor-pointer px-2 py-1.5'>
              Delete
            </button>
          </DeleteAlert>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
