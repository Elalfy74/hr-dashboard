import { Section } from '@/components/ui/section';
import { Welcome } from '@/components/welcome';
import { LeavesRatios } from './components/leaves-ratios';
import { PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AppliedLeaves } from './components/applied-leaves';
import { Holidays } from './components/holidays';
import { PendingLeaves } from './components/pending-leaves';

export const Leaves = () => (
  <>
    <Welcome title='Leaves'>
      <AddButton />
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

const AddButton: React.FC = () => (
  <button
    className={cn(
      'gap-1 rounded-3xl center text-mainBlack px-3 py-2.5 bg-mainPurple h-fit font-medium',
      'hover:bg-mainPurple/90 duration-300'
    )}
  >
    <PlusIcon className='w-4' />
    Apply Leave
  </button>
);
