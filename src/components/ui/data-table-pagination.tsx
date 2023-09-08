import { Pagination } from '../pagination';

interface PaginationProps {
  selectedRow: number;
  totalRows: number;
  handlePageChange: (e: { selected: number }) => void;
  pageCount?: number;
  paginatePage: number;
}

export const DataTablePagination = (props: PaginationProps) => {
  return (
    <div className='flex items-center justify-end px-8 py-4 space-x-2'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {props.selectedRow} of {props.totalRows} row(s) selected.
      </div>
      {props.pageCount && (
        <Pagination
          pageCount={props.pageCount}
          handlePageClick={props.handlePageChange}
          page={props.paginatePage}
        />
      )}
    </div>
  );
};
