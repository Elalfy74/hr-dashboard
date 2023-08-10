import { Button } from './button';

interface PaginationProps {
  selectedRow: number;
  totalRows: number;
  handleNext: () => void;
  canNext: boolean;
  handlePrev: () => void;
  canPrev: boolean;
}

export const DataTablePagination = (props: PaginationProps) => {
  return (
    <div className='flex items-center justify-end px-8 py-4 space-x-2'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {props.selectedRow} of {props.totalRows} row(s) selected.
      </div>
      <Button
        variant='outline'
        size='sm'
        onClick={props.handlePrev}
        disabled={!props.canPrev}
      >
        Previous
      </Button>
      <Button
        variant='outline'
        size='sm'
        onClick={props.handleNext}
        disabled={!props.canNext}
      >
        Next
      </Button>
    </div>
  );
};
