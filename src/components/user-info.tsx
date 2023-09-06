import { type VariantProps } from 'class-variance-authority';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { AppBadge, appBadgeVariants } from './app-badge';

export interface UserInfoProps extends VariantProps<typeof appBadgeVariants> {
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

      <AppBadge variant={props.variant}>{props.badgeText}</AppBadge>
    </div>
  );
};
