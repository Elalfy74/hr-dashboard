import { ResponsiveBar } from '@nivo/bar';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const Chart = () => (
  <ResponsiveBar
    data={data}
    keys={['On Time', 'Late Arrival', 'Absent']}
    indexBy='month'
    margin={{ top: 30, right: 20, bottom: 50, left: 60 }}
    padding={0.2}
    innerPadding={10}
    colors={['#222222', '#CEBDF2', '#f2f2f2']}
    borderRadius={16}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'top-right',
        direction: 'row',
        justify: false,
        translateY: -25,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    axisLeft={{
      tickValues: 5,
    }}
    axisBottom={{
      format: (value: string) => value.toUpperCase(),
    }}
    enableLabel={false}
    enableGridY={false}
    role='application'
    ariaLabel='Employees attendance overview'
    barAriaLabel={(e) =>
      e.id + ': ' + e.formattedValue + ' in month: ' + e.indexValue
    }
  />
);

export const ChartCard = () => {
  return (
    <Card className='flex-[4]  '>
      <CardHeader className='pb-2'>
        <CardTitle>Attendance Overview</CardTitle>
      </CardHeader>
      <CardContent className='p-0 h-72'>
        <Chart />
      </CardContent>
    </Card>
  );
};

const data = [
  {
    month: 'JAN',
    'On Time': 40,
    'Late Arrival': 30,
    Absent: 30,
  },
  {
    month: 'FEB',
    'On Time': 50,
    'Late Arrival': 30,
    Absent: 20,
  },
  {
    month: 'mar',
    'On Time': 20,
    'Late Arrival': 20,
    Absent: 60,
  },
  {
    month: 'apl',
    'On Time': 60,
    'Late Arrival': 20,
    Absent: 20,
  },
  {
    month: 'may',
    'On Time': 40,
    'Late Arrival': 40,
    Absent: 20,
  },
  {
    month: 'jun',
    'On Time': 50,
    'Late Arrival': 35,
    Absent: 15,
  },
  {
    month: 'jul',
    'On Time': 45,
    'Late Arrival': 30,
    Absent: 25,
  },
  {
    month: 'aug',
    'On Time': 45,
    'Late Arrival': 30,
    Absent: 25,
  },
  {
    month: 'sep',
    'On Time': 45,
    'Late Arrival': 30,
    Absent: 25,
  },
  {
    month: 'oct',
    'On Time': 45,
    'Late Arrival': 30,
    Absent: 25,
  },
  {
    month: 'nov',
    'On Time': 45,
    'Late Arrival': 30,
    Absent: 25,
  },
  {
    month: 'dec',
    'On Time': 45,
    'Late Arrival': 30,
    Absent: 25,
  },
];
