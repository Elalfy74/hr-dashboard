import { Mail, MoreVertical, Smartphone } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { EmployeeWithDepartment } from '@/types';

import { Status } from '../components/status';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { DeleteAlert } from '@/components/delete-alert';
import { useDeleteEmployee } from '../hooks/use-delete-employee';
import { useState } from 'react';

export const EmployeeCard = ({
  employee,
}: {
  employee: EmployeeWithDepartment;
}) => {
  return (
    <Card>
      <CardHeader className='p-3 pb-0'>
        <EmployeeCardActions id={employee.id} />
      </CardHeader>

      <CardContent className='flex flex-col items-center px-3 pb-3'>
        <Avatar className='w-16 h-16'>
          <AvatarImage src={employee.avatar || undefined} alt='avatar' />
          <AvatarFallback>{employee.first_name[0]}</AvatarFallback>
        </Avatar>

        <h2 className='mt-1 text-lg font-semibold text-mainBlack'>
          {employee.first_name} {employee.last_name}
        </h2>
        <h4 className='capitalize text-zinc-500'>{employee.designation}</h4>

        <Status active={employee.active} className='mt-1 mb-3' />

        <Card className='w-full my-1 font-medium bg-mainWhite text-mainBlack'>
          <CardHeader className='p-4'>
            <div className='flex items-center gap-2 text-sm'>
              <Mail className='w-4 h-4' />
              <span>{employee.email}</span>
            </div>

            <div className='flex items-center gap-2 text-sm'>
              <Smartphone className='w-4 h-4' />
              <span>{employee.phone}</span>
            </div>
          </CardHeader>
        </Card>

        <Card className='w-full mt-2 font-medium bg-violet-100 text-mainBlack'>
          <CardHeader className='p-4'>
            <div className='flex items-center justify-between gap-2 text-sm'>
              <p>Department</p>
              <span className='font-semibold'>
                {employee.departments?.name}
              </span>
            </div>

            <div className='flex items-center justify-between gap-2 text-sm'>
              <p>Date Of Joining</p>
              <span className='font-semibold'>{employee.date_of_joining}</span>
            </div>
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
  );
};

export const EmployeeCardActions = ({ id }: { id: number }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { alertOpen, setAlertOpen, isLoading, mutate } = useDeleteEmployee(
    id,
    () => setMenuOpen(false)
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
            onClick={mutate}
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
