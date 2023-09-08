import { Mail, Smartphone } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { EmployeeWithDepartment } from '@/types';

import { Status } from '../components/status';
import { EmployeeCardActions } from './employee-card-action';

interface EmployeeCardProps {
  employee: EmployeeWithDepartment;
  employeesRefetch: () => void;
}

export const EmployeeCard = ({
  employee,
  employeesRefetch,
}: EmployeeCardProps) => {
  return (
    <Card>
      <CardHeader className='p-3 pb-0'>
        <EmployeeCardActions id={employee.id} onDone={employeesRefetch} />
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
