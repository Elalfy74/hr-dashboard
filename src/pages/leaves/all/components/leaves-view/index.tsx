import { Loader } from '@/components/ui/loader';

import { useLeaves } from '@/pages/leaves/hooks/use-leaves';
import { useTotalLeavesCount } from '@/pages/leaves/hooks/use-total-leaves-count';

import { FilterLeaves } from '../filter-leaves';
import { LeavesTable } from '../leaves-table';

const ITEMS_PER_PAGE = 10;

export const LeavesView = () => {
  const {
    formattedLeaves,
    leavesLoading,
    refetchLeaves,
    handlePageChange,
    paginatePage,
    leaveStatus,
    handleChangeStatus,
    filter,
    nullFilter,
  } = useLeaves(ITEMS_PER_PAGE);

  const { totalLeaves } = useTotalLeavesCount({
    status: leaveStatus,
    filter,
    nullFilter,
  });

  const pageCount = totalLeaves
    ? Math.ceil(totalLeaves / ITEMS_PER_PAGE)
    : undefined;

  if (leavesLoading || !formattedLeaves || !pageCount) {
    return (
      <div className='center'>
        <Loader text='' className='w-10 h-10 text-white' />
      </div>
    );
  }

  return (
    <>
      <div className='mb-4 '>
        <FilterLeaves
          leaveStatus={leaveStatus}
          handleChangeStatus={handleChangeStatus}
        />
      </div>
      <LeavesTable
        formattedLeaves={formattedLeaves}
        handlePageChange={handlePageChange}
        pageCount={pageCount}
        paginatePage={paginatePage}
        refetchLeaves={refetchLeaves}
      />
    </>
  );
};
