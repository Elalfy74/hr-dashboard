import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const LoggedUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={cn(
            'gap-2 rounded-full cursor-pointer center px-4 py-2.5 duration-300 bg-white/10 text-zinc-50',
            'hover:bg-white/20'
          )}
        >
          <Avatar>
            <AvatarImage
              src='https://robohash.org/autdebitisnemo.png?size=200x200&set=set1'
              alt='user avatar'
            />
          </Avatar>

          <span>Mahmoud Elalfy</span>

          <ChevronDown />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='z-30 w-52 border-zinc-600 bg-zinc-700 text-zinc-50'>
        <DropdownMenuItem className='focus:bg-white/20'>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className='focus:bg-white/20 focus:text-zinc-50'>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
