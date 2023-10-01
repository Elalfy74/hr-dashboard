import { DataTable } from '@/components/ui/data-table';
import { Card } from '@/components/ui/card';
import { Loader } from '@/components/ui/loader';

import { useLeaves } from '../../../hooks/use-leaves';
import { useTotalLeavesCount } from '../../../hooks/use-total-leaves-count';
import { columns } from './columns';

const ITEMS_PER_PAGE = 10;

export const LeavesTable = () => {
  const { totalLeaves } = useTotalLeavesCount();

  const pageCount = totalLeaves
    ? Math.ceil(totalLeaves / ITEMS_PER_PAGE)
    : undefined;

  const {
    formattedLeaves,
    leavesLoading,
    refetchLeaves,
    handlePageChange,
    paginatePage,
  } = useLeaves(ITEMS_PER_PAGE);

  if (leavesLoading || !formattedLeaves) {
    return (
      <div className='center'>
        <Loader text='' className='w-10 h-10 text-white' />
      </div>
    );
  }

  return (
    <Card className='overflow-hidden'>
      <DataTable
        columns={columns(refetchLeaves)}
        data={formattedLeaves}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
        paginatePage={paginatePage}
      />
    </Card>
  );
};
