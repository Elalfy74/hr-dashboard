import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Event } from './event';

export const EventsCard = () => {
  return (
    <Card className='flex-[3] flex flex-col'>
      <CardHeader>
        <CardTitle>News & Events</CardTitle>
      </CardHeader>

      <CardContent className='grid content-between flex-1 grid-cols-2 gap-6'>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </CardContent>
    </Card>
  );
};
