import { useEffect, useRef } from 'react';

import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

interface StateCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  totalNumber: number;
  takenNumber: number;
}

const interval = 3000;

export const StateCard = (props: StateCardProps) => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startValue = 0;
    const endValue = props.takenNumber;
    const duration = Math.floor(interval / endValue);

    if (!counterRef.current) return;

    const counter = setInterval(() => {
      startValue += 1;
      counterRef.current!.textContent = startValue.toString();

      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);

    return () => {
      clearInterval(counter);
    };
  }, [props.takenNumber]);

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
          <span className='text-3xl font-bold' ref={counterRef}>
            {props.takenNumber}
          </span>
          /{props.totalNumber}
        </h2>
      </CardContent>
    </Card>
  );
};
