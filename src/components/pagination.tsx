import ReactPaginate from 'react-paginate';
import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';

interface PaginationProps {
  pageCount: number;
  page: number;
  handlePageClick: (e: { selected: number }) => void;
}

export const Pagination = ({
  page,
  pageCount,
  handlePageClick,
}: PaginationProps) => {
  return (
    <ReactPaginate
      containerClassName='flex gap-6 items-center'
      pageLinkClassName='w-10 h-8 center rounded-full border border-zinc-300'
      activeLinkClassName='bg-mainPurple'
      breakLabel='...'
      forcePage={page}
      nextLabel={<ChevronRightIcon className='w-4 h-4' />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<ChevronLeftIcon className='w-4 h-4' />}
      renderOnZeroPageCount={null}
      disabledLinkClassName='cursor-not-allowed'
    />
  );
};
