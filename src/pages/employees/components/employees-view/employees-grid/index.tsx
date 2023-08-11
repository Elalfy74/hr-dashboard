import { EmployeesData } from '../employees-table';
import { EmployeeCard } from './employee-card';

export const EmployeesGrid = (props: EmployeesData) => {
  return (
    <div className='grid gap-main grid-cols-auto'>
      {props.data.map((employee) => (
        <EmployeeCard employee={employee} key={employee.id} />
      ))}
    </div>
  );
};
