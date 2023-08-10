import { ChartCard } from './chart';
import { EventsCard } from './events-card';

export const ChartsEvents = () => {
  return (
    <div className='flex flex-col my-6 gap-main xl:flex-row'>
      <ChartCard />
      <EventsCard />
    </div>
  );
};
