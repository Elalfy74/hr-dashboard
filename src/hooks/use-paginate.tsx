import { useState } from 'react';

export const usePaginate = () => {
  const [page, setPage] = useState(1);

  // Because React Paginate Start From 0
  const handlePageChange = (e: { selected: number }) => setPage(e.selected + 1);
  const resetPage = () => handlePageChange({ selected: 0 });

  const paginatePage = page - 1;

  return {
    page,
    paginatePage,
    handlePageChange,
    resetPage,
  };
};
