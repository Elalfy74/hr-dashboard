import { Section } from '@/components/ui/section';

import { Welcome } from '../../components/welcome';
import { Stats } from './components/stats';
import { ChartsEvents } from './components/charts-events';
import { OverviewSection } from './components/overview-section';

export const Dashboard = () => {
  return (
    <>
      <Welcome title='Welcome' subTitle='Hello Andrew.' />
      <Section>
        <Stats />
        <ChartsEvents />
        <OverviewSection />
      </Section>
    </>
  );
};
