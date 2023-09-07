import { cn } from '@/lib/utils';
import { ReactElement, cloneElement } from 'react';

interface SwitchProps {
  isFirstActive: boolean;
  toggleActive: () => void;
  firstView: React.ReactNode;
  secondView: React.ReactNode;
  iconSize: boolean;
}

export const Switch = (props: SwitchProps) => {
  const { isFirstActive, toggleActive, firstView, secondView, iconSize } =
    props;

  // If isFirstActive then the first element will be active

  const firstViewCloned = cloneElement(firstView as ReactElement, {
    className: cn('relative z-10 duration-300  p-1 ml-1 rounded-full ', {
      // Active Class
      'text-mainBlack': isFirstActive,
      'w-8 h-8': iconSize,
    }),
  });

  const secondViewCloned = cloneElement(secondView as ReactElement, {
    className: cn('relative z-10 duration-300 p-1 mr-1 rounded-full', {
      // Active Class
      'text-mainBlack': !isFirstActive,
      'w-8 h-8': iconSize,
    }),
  });

  return (
    <div
      className={cn(
        'relative flex items-center justify-between w-24 h-12 p-1 border rounded-full cursor-pointer text-zinc-300',
        {
          'w-40': !iconSize,
        }
      )}
      onClick={toggleActive}
    >
      {firstViewCloned}
      {secondViewCloned}
      <div
        className={cn(
          'absolute  w-1/2 left-1 h-10  transition-all duration-300 rounded-full top-1 bg-mainPurple',
          {
            'translate-x-[4.5rem]': !isFirstActive && !iconSize,
            'translate-x-10': !isFirstActive && iconSize,
          }
        )}
      ></div>
    </div>
  );
};
