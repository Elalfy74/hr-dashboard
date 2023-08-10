import { cn } from '@/lib/utils';

interface StatusProps {
  active: boolean;
}

export const Status = ({ active }: StatusProps) => {
  return (
    <div
      className={cn(
        'rounded-full text-mainBlack center font-semibold uppercase px-3 py-2',
        {
          'bg-mainGreen': active,
          'bg-mainPurple': !active,
        }
      )}
    >
      {active ? 'Active' : 'Inactive'}
    </div>
  );
};
