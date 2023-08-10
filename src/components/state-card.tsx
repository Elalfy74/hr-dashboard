import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

interface StateCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  totalNumber: number;
  takenNumber: number;
}

export const StateCard = (props: StateCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Avatar className='w-12 h-12'>
          <AvatarFallback
            style={{
              backgroundColor: props.color,
            }}
            className='text-[#2123268c]'
          >
            {props.icon}
          </AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <h3 className='capitalize'>{props.title}</h3>
        <h2 className='text-lg'>
          <span className='text-3xl font-bold'>{props.takenNumber}</span>/
          {props.totalNumber}
        </h2>
      </CardContent>
    </Card>
  );
};
