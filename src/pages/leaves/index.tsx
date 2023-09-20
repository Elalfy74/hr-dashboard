import { PlusIcon } from 'lucide-react';

import { Section } from '@/components/ui/section';
import { Welcome } from '@/components/welcome';
import { AppButton } from '@/components/app-button';

import { LeavesRatios } from './components/leaves-ratios';
import { Holidays } from './components/holidays';
import { AppliedLeaves } from './components/applied-leaves';
import { PendingLeaves } from './components/pending-leaves';

export const Leaves = () => (
  <>
    <Welcome title='Leaves'>
      <AppButton icon={<PlusIcon />}>Apply Leave</AppButton>
    </Welcome>
    <Section>
      <div className='h-[75vh] grid grid-cols-4 grid-rows-3 gap-x-main '>
        <LeavesRatios />
        <Holidays />
        <AppliedLeaves />
        <PendingLeaves />
      </div>
    </Section>
  </>
);
