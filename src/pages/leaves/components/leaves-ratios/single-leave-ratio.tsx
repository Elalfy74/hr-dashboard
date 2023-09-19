import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsivePie } from '@nivo/pie';

interface PendingRatioProps {
  title: string;
  number: number;
  text: string;
  color: string;
}

export const SingleLeaveRatio = (props: PendingRatioProps) => {
  const { color, number, text, title } = props;

  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle>Leaves {title}</CardTitle>
      </CardHeader>
      <CardContent className='relative h-[150px] p-3 pt-0'>
        <ResponsivePie
          data={data}
          margin={{ top: 10, right: 80, bottom: 10 }}
          innerRadius={0.7}
          padAngle={3}
          startAngle={0}
          cornerRadius={4}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]],
          }}
          colors={['#212326', color]}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          legends={[
            {
              anchor: 'right',
              direction: 'column',
              translateX: 100,
              itemsSpacing: 10,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
        <div className=' absolute pointer-events-none flex-col top-[20px] bottom-[20px] center right-[80px] left-0 text-center'>
          <h2 className='font-bold'>{number}</h2>
          <p className='text-sm'>{text}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const data = [
  {
    id: 'Office',
    label: 'Office',
    value: 473,
  },
  {
    id: 'Remote',
    label: 'Remote',
    value: 200,
  },
];
