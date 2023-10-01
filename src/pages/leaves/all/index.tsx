import { PlusIcon } from 'lucide-react';

import { AppButton } from '@/components/app-button';
import { Section } from '@/components/ui/section';
import { Welcome } from '@/components/welcome';

import { LeavesView } from './components/leaves-view';

export const AllLeaves = () => {
  return (
    <>
      <Welcome title='Leaves'>
        <AppButton icon={<PlusIcon />}>Add Leaves</AppButton>
      </Welcome>
      <Section>
        <LeavesView />
      </Section>
    </>
  );
};
