import { AppBadge, appBadgeVariants } from '@/components/app-badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VariantProps } from 'class-variance-authority';

export const AppliedLeaves = () => {
  return (
    <Card className='flex flex-col row-span-2 '>
      <CardHeader>
        <CardTitle>Applied Leaves</CardTitle>
      </CardHeader>
      <CardContent className='flex-1'>
        <ul className='flex flex-col justify-between h-full'>
          {data.map((item) => (
            <li key={item.date} className='flex items-center justify-between'>
              <div className='text-sm'>
                <p className='font-semibold'>{item.date}</p>
                <p className='capitalize'>{item.reason}</p>
              </div>
              <AppBadge variant={getBadgeVariant(item.status)}>
                {item.status}
              </AppBadge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const data = [
  { date: '5 December, 2022', status: 'pending', reason: 'quitting' },

  { date: '4 September, 2023', status: 'rejected', reason: 'vacation' },

  { date: '10 August, 2023', status: 'rejected', reason: 'others' },

  { date: '26 April, 2023', status: 'rejected', reason: 'marriage' },

  { date: '14 February, 2023', status: 'rejected', reason: 'marriage' },

  { date: '20 October, 2022', status: 'approved', reason: 'others' },

  { date: '14 January, 2023', status: 'pending', reason: 'vacation' },

  { date: '27 February, 2023', status: 'rejected', reason: 'marriage' },
];

const getBadgeVariant = (
  status: string
): VariantProps<typeof appBadgeVariants>['variant'] => {
  if (status === 'pending') return 'purple';
  if (status === 'approved') return 'green';
  if (status === 'rejected') return 'blue';
};
