import { type VariantProps, cva } from 'class-variance-authority';

import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

export const appBadgeVariants = cva(
  'rounded-full text-mainBlack font-normal capitalize min-w-[5rem] center',
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

interface AppBadgeProps extends VariantProps<typeof appBadgeVariants> {
  children: React.ReactNode;
}

export const AppBadge = (props: AppBadgeProps) => {
  return (
    <Badge className={cn(appBadgeVariants({ variant: props.variant }))}>
      {props.children}
    </Badge>
  );
};
