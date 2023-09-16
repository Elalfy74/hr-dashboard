import { useQuery } from '@tanstack/react-query';

import { getJobs, getJobsCount } from '@/services/jobs';
import { useBoolean } from '@/hooks/use-boolean';
import { usePaginate } from '@/hooks/use-paginate';

const ITEMS_PER_PAGE = 10;

export const useJobs = () => {
  const { page, paginatePage, handlePageChange, resetPage } = usePaginate();

  const { value: isActiveJobsView, toggle: toggleIsActive } = useBoolean(true);

  // As We need To reset to page 1
  const handleToggle = () => {
    toggleIsActive();
    resetPage();
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
      getJobs({
        page,
        itemsPerPage: ITEMS_PER_PAGE,
        filter: { active: isActiveJobsView },
      }),
    keepPreviousData: true,
  });

  const pageCount = count ? Math.ceil(count / ITEMS_PER_PAGE) : undefined;

  return {
    jobsData,
    jobsError,
    jobsLoading,
    jobsRefetch,
    paginatePage,
    pageCount,
    handlePageChange,
    isActiveJobsView,
    toggleIsActive: handleToggle,
  };
};
