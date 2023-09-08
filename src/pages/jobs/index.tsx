import { Section } from '@/components/ui/section';
import { Welcome } from '@/components/welcome';

import { AddJob } from './components/add-job';
import { JobsView } from './components/jobs-view';

export const Jobs = () => {
  return (
    <>
      <Welcome title='Jobs' subTitle='6 Active jobs'>
        <AddJob />
      </Welcome>
      <Section>
        <JobsView />
      </Section>
    </>
  );
};
