import { animated, useTrail } from '@react-spring/web';

import type { EmployeesData } from '../employees-table';
import { Pagination } from '@/components/pagination';

import { EmployeeCard } from './employee-card';

export const EmployeesGrid = (props: EmployeesData) => {
  const { data: employees, employeesRefetch, currentPage, pageCount } = props;

  const trails = useTrail(employees.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <>
      <div className='grid gap-main grid-cols-autoFill'>
        {trails.map((styles, i) => (
          <animated.div style={styles} key={employees[i].id}>
            <EmployeeCard
              employee={employees[i]}
              employeesRefetch={employeesRefetch}
            />
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
