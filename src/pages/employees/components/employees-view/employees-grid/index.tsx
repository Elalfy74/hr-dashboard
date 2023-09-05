import { animated, useTrail } from '@react-spring/web';

import type { EmployeesData } from '../employees-table';

import { Pagination } from '@/components/pagination';

import { EmployeeCard } from './employee-card';

export const EmployeesGrid = ({
  data: employees,
  pageCount,
  currentPage,
  ...props
}: EmployeesData) => {
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
      {pageCount && (
        <div className='mt-4 center'>
          <Pagination
            handlePageClick={(e) => props.handlePageChange(e.selected)}
            pageCount={pageCount}
            initialPage={currentPage}
          />
        </div>
      )}
    </>
  );
};
