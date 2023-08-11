import { Section } from '@/components/ui/section';

import { Welcome } from '../../components/welcome';
import { EmployeesView } from './components/employees-view';

export const Employees = () => {
  return (
    <>
      <Welcome title='Employees' />
      <Section>
        <EmployeesView />
      </Section>
    </>
  );
};
