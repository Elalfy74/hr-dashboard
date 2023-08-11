import { cn } from '@/lib/utils';

interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
}

export const Status = ({ active, className }: StatusProps) => {
  return (
    <div
      className={cn(
        'rounded-full text-mainBlack center font-medium uppercase px-4 py-1',
        {
          'bg-mainGreen': active,
          'bg-mainPurple': !active,
        },
        className
      )}
    >
      {active ? 'Active' : 'Inactive'}
    </div>
  );
};
