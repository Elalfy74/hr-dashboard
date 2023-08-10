import { Section } from '@/components/ui/section';

import { Welcome } from '../../components/welcome';
import { EmployeesTable } from './components/employees-table';

export const Employees = () => {
  return (
    <>
      <Welcome title='Employees' />
      <Section>
        <EmployeesTable />
      </Section>
    </>
  );
};
