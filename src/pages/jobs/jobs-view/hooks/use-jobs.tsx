import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getJobs, getJobsCount } from '@/services/jobs';

const ITEMS_PER_PAGE = 10;

export const useJobs = () => {
  const [page, setPage] = useState(1);
  // Because React Paginate Start From 0
  const handlePageChange = (page: number) => setPage(page + 1);

  const { data: count } = useQuery({
    queryKey: ['Jobs Count'],
    queryFn: getJobsCount,
  });

  const {
    data: jobsData,
    error: jobsError,
    isLoading: jobsLoading,
    refetch: jobsRefetch,
  } = useQuery({
    queryKey: ['Jobs', page],
    queryFn: () => getJobs(page, ITEMS_PER_PAGE),
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
  };
};
