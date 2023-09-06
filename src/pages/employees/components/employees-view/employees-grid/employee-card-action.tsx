import { useState } from 'react';
import { MoreVertical } from 'lucide-react';

import { DeleteAlert } from '@/components/delete-alert';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useDeleteEmployee } from '../hooks/use-delete-employee';

export const EmployeeCardActions = ({
  id,
  refetch,
}: {
  id: number;
  refetch: () => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { alertOpen, setAlertOpen, isLoading, mutate } = useDeleteEmployee(
    () => {
      setMenuOpen(false);
      refetch();
    }
  );

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='self-end'>
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className='cursor-pointer '>View</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DeleteAlert
            open={alertOpen}
            onOpenChange={setAlertOpen}
            title='Employee'
            onClick={() => mutate(id)}
            isLoading={isLoading}
          >
            <button className='text-red-400 cursor-pointer px-2 py-1.5'>
              Delete
            </button>
          </DeleteAlert>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
