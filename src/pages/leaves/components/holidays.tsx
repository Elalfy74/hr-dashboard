import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const Holidays = () => {
  return (
    <Card className='flex flex-col row-span-3'>
      <CardHeader>
        <CardTitle>Holidays</CardTitle>
      </CardHeader>
      <CardContent className='flex-1'>
        <ul className='flex flex-col justify-between h-full'>
          {data.map((holiday, i) => (
            <li className='flex gap-3' key={holiday.name}>
              <div
                className={cn(
                  ' w-12 h-12 center text-mainBlack flex-col font-semibold bg-mainPurple rounded-xl text-sm',
                  {
                    'bg-mainGreen': i > 4,
                  }
                )}
              >
                <p>{holiday.dayAsNum}</p>
                <p>{holiday.month}</p>
              </div>
              <div>
                <p className='font-medium'>{holiday.name}</p>
                <p className='text-zinc-500'>{holiday.day}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const data = [
  {
    name: "New Year's Day",
    month: 'JAN',
    day: 'Saturday',
    dayAsNum: 13,
  },
  {
    name: 'Coptic Christmas Day',
    month: 'JAN',
    day: 'Sunday',
    dayAsNum: 12,
  },
  {
    name: 'Sinai Liberation Day',
    month: 'APR',
    day: 'Monday',
    dayAsNum: 21,
  },
  {
    name: 'Labor Day',
    month: 'MAY',
    day: 'Tuesday',
    dayAsNum: 3,
  },
  {
    name: 'Revolution Day',
    month: 'JUL',
    day: 'Tuesday',
    dayAsNum: 7,
  },
  {
    name: 'Eid al-Fitr',
    month: 'JUN',
    day: 'Sunday',
    dayAsNum: 30,
  },
  {
    name: 'Eid al-Adha',
    month: 'JUL',
    day: 'Tuesday',
    dayAsNum: 11,
  },
  {
    name: 'Islamic New Year',
    month: 'SEP',
    day: 'Tuesday',
    dayAsNum: 23,
  },
  {
    name: "Prophet Muhammad's Birthday",
    month: 'NOV',
    day: 'Saturday',
    dayAsNum: 9,
  },
  {
    name: "Prophet Muhammad's Birthday",
    month: 'NOV',
    day: 'Saturday',
    dayAsNum: 9,
  },
];
