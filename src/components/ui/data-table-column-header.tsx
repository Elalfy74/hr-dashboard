import { Column } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from './button';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <Button
      variant='ghost'
      className='p-0 text-left capitalize'
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {title}
      <ArrowUpDown className='w-4 h-4 ml-2' />
    </Button>
  );
}
