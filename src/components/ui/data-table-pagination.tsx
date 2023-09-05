import { Pagination } from './pagination';

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
      <Pagination
        handleNext={props.handleNext}
        canNext={props.canNext}
        handlePrev={props.handlePrev}
        canPrev={props.canPrev}
      />
    </div>
  );
};
