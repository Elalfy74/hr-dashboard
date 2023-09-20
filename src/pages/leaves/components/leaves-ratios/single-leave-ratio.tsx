import { ResponsivePie } from '@nivo/pie';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader } from '@/components/ui/loader';

interface PendingRatioProps {
  title: string;
  color: string;
  data?: { id: number; value: number; label: string }[] | null;
  isLoading: boolean;
}

export const SingleLeaveRatio = (props: PendingRatioProps) => {
  const { color, title, data, isLoading } = props;

  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Leaves {title}</CardTitle>
      </CardHeader>
      <CardContent className='relative h-[150px] p-3 pt-0'>
        {isLoading && (
          <div className='h-full center'>
            <Loader text='' className='w-6 h-6 mr-0' />
          </div>
        )}
        {data && (
          <>
            <ResponsivePie
              data={data}
              margin={{ top: 10, right: 80, bottom: 10 }}
              innerRadius={0.7}
              padAngle={3}
              startAngle={0}
              endAngle={360}
              cornerRadius={4}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
              }}
              colors={[color, '#212326']}
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
              <h2 className='font-bold'>{data[0].value}</h2>
              <p className='text-sm'>{data[0].label}</p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
