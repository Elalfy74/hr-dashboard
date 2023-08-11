import { LayoutGrid, Table } from 'lucide-react';

import { cn } from '@/lib/utils';

interface SwitchProps {
  isTableView: boolean;
  handleChangeView: () => void;
}

export const Switch = ({ isTableView, handleChangeView }: SwitchProps) => {
  return (
    <div
      className='relative flex items-center justify-between w-24 h-12 p-1 border rounded-full cursor-pointer text-zinc-300'
      onClick={handleChangeView}
    >
      <LayoutGrid
        className={cn(
          'relative z-10 duration-300 w-8 h-8 p-1 ml-1 rounded-full ',
          {
            'text-mainBlack': !isTableView,
          }
        )}
      />
      <Table
        className={cn(
          'relative z-10 w-8 h-8 duration-300 p-1 mr-1 rounded-full',
          {
            'text-mainBlack': isTableView,
          }
        )}
      />
      <div
        className={cn(
          'absolute  w-10 left-1 h-10 transition-all duration-300 rounded-full top-1 bg-mainPurple',
          {
            'translate-x-[2.875rem]': isTableView,
          }
        )}
      ></div>
    </div>
  );
};
