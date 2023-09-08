import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getJobs, getJobsCount } from '@/services/jobs';
import { useBoolean } from '@/hooks/use-boolean';

const ITEMS_PER_PAGE = 10;

export const useJobs = () => {
  const [page, setPage] = useState(1);
  // Because React Paginate Start From 0
  const handlePageChange = (page: number) => setPage(page + 1);

  // As We need To reset to page 1
  const { value: isActiveJobsView, toggle: toggleIsActive } = useBoolean(true);

  const handleToggle = () => {
    setPage(1);
    toggleIsActive();
  };

  const { data: count } = useQuery({
    queryKey: ['Jobs Count', isActiveJobsView],
    queryFn: () => getJobsCount({ active: isActiveJobsView }),
  });

  const {
    data: jobsData,
    error: jobsError,
    isLoading: jobsLoading,
    refetch: jobsRefetch,
  } = useQuery({
    queryKey: ['Jobs', page, isActiveJobsView],
    queryFn: () =>
      getJobs(page, ITEMS_PER_PAGE, {
        active: isActiveJobsView,
      }),
    keepPreviousData: true,
  });

  const pageCount = count ? Math.ceil(count / ITEMS_PER_PAGE) : undefined;

  return {
    jobsData,
    jobsError,
    jobsLoading,
    handlePageChange,
    currentPage: page,
    pageCount,
    jobsRefetch,
    isActiveJobsView,
    toggleIsActive: handleToggle,
  };
};
