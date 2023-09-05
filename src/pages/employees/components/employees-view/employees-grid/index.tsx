import { animated, useTrail } from '@react-spring/web';

import { Pagination } from '@/components/ui/pagination';

import { EmployeesData } from '../employees-table';
import { EmployeeCard } from './employee-card';

export const EmployeesGrid = ({ data: employees, ...props }: EmployeesData) => {
  const trails = useTrail(employees.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <>
      <div className='grid gap-main grid-cols-auto'>
        {trails.map((props, i) => (
          <animated.div style={props} key={employees[i].id}>
            <EmployeeCard employee={employees[i]} />
          </animated.div>
        ))}
      </div>
      <div className='mt-4 center'>
        <Pagination
          handleNext={props.handleNext}
          handlePrev={props.handlePrev}
          canNext={props.canNext}
          canPrev={props.canPrev}
        />
      </div>
    </>
  );
};
