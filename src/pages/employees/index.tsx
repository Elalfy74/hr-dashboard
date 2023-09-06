import { Section } from '@/components/ui/section';

import { Welcome } from '../../components/welcome';
import { EmployeesView } from './components/employees-view';
import { AddEmployee } from './components/add-employee';

export const Employees = () => {
  return (
    <>
      <Welcome title='Employees'>
        <AddEmployee />
      </Welcome>
      <Section>
        <EmployeesView />
      </Section>
    </>
  );
};
