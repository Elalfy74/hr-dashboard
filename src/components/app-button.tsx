import { cn } from '@/lib/utils';
import { ReactElement, ReactNode, cloneElement } from 'react';

interface AppButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

export const AppButton = ({ children, icon, onClick }: AppButtonProps) => {
  let Icon: ReactElement | undefined;

  if (icon) {
    Icon = cloneElement(icon as ReactElement, {
      className: 'w-4',
    });
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'gap-1 rounded-3xl center text-mainBlack px-3 py-2.5 bg-mainPurple h-fit font-medium',
        'hover:bg-mainPurple/90 duration-300'
      )}
    >
      {Icon} {children}
    </button>
  );
};
