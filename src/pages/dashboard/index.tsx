import { Section } from '@/components/ui/section';

import { Welcome } from '../../components/welcome';
import { Stats } from './components/stats';
import { ChartsEvents } from './components/charts-events';
import { OverviewSection } from './components/overview-section';
import { AddEmployee } from '../employees/components/add-employee';

export const Dashboard = () => {
  return (
    <>
      <Welcome title='Welcome' subTitle='Hello Andrew.'>
        <AddEmployee />
      </Welcome>
      <Section>
        <Stats />
        <ChartsEvents />
        <OverviewSection />
      </Section>
    </>
  );
};
