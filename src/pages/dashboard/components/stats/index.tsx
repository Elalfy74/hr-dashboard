import { MenuSquare, Smile, User2, UserPlus2 } from 'lucide-react';

import { Card } from '@/components/ui/card';

import { StateCard } from '@/components/state-card';
import { EmployeesRatio } from './employees-ratio';

export const Stats = () => {
  return (
    <div className='grid gap-main grid-cols-auto '>
      {stats.map((stat) => (
        <StateCard key={stat.takenNumber} {...stat} />
      ))}
      <Card className='h-[178px] relative'>
        <EmployeesRatio />
        <div className=' absolute pointer-events-none flex-col top-[20px] bottom-[20px] center right-[80px] left-0 text-center'>
          <h2 className='font-bold'>200</h2>
          <p className='text-sm'>Employees</p>
        </div>
      </Card>
    </div>
  );
};

const stats = [
  {
    icon: <User2 />,
    color: '#EEE8FA',
    title: 'total employees',
    takenNumber: 200,
    totalNumber: 200,
  },
  {
    icon: <MenuSquare />,
    color: '#C2E9F2',
    title: 'on leave',
    takenNumber: 12,
    totalNumber: 200,
  },
  {
    icon: <UserPlus2 />,
    color: '#E5EDE6',
    title: 'New joined',
    takenNumber: 15,
    totalNumber: 200,
  },
  {
    icon: <Smile />,
    color: '#FBE7DC',
    title: 'total employees',
    takenNumber: 120,
    totalNumber: 200,
  },
];
