import { ResponsivePie } from '@nivo/pie';

export const EmployeesRatio = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 20, right: 80, bottom: 20 }}
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
    colors={['#212326', '#CEBDF2']}
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
);

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
