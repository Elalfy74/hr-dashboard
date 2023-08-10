import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

const badgeVariants = cva(
  'rounded-full text-mainBlack font-normal capitalize ',
  {
    variants: {
      variant: {
        purple: 'bg-mainPurple',
        cyan: 'bg-mainCyan',
        green: 'bg-mainGreen',
        blue: 'bg-mainCyan',
        orange: 'bg-mainOrange',
      },
    },
  }
);

export interface UserInfoProps extends VariantProps<typeof badgeVariants> {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;

  text: string;
  badgeText: string;
}

export const UserInfo = (props: UserInfoProps) => {
  return (
    <div className='flex items-center justify-between '>
      <div className='flex items-center gap-2'>
        <Avatar className='border'>
          <AvatarImage src={props.avatar} alt='avatar' />
          <AvatarFallback>{props.firstName[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className='text-lg font-medium text-mainBlack'>
            {props.firstName} {props.lastName}
          </h2>
          <p className='text-zinc-400'>{props.text}</p>
        </div>
      </div>

      <Badge className={cn(badgeVariants({ variant: props.variant }))}>
        {props.badgeText}
      </Badge>
    </div>
  );
};
