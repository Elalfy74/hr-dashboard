import {
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
} from 'react';
import { cn } from '@/lib/utils';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

export const AppButton = ({ children, icon, ...props }: AppButtonProps) => {
  let Icon: ReactElement | undefined;

  if (icon) {
    Icon = cloneElement(icon as ReactElement, {
      className: 'w-4',
    });
  }

  return (
    <button
      {...props}
      className={cn(
        'gap-1 rounded-3xl center text-mainBlack px-3 py-2.5 bg-mainPurple h-fit font-medium',
        'hover:bg-opacity-90 duration-300'
      )}
    >
      {Icon} {children}
    </button>
  );
};
