import { DataTable } from '@/components/ui/data-table';
import { Card } from '@/components/ui/card';

import type { FormattedLeave } from '@/types';

import { columns } from './columns';

interface LeavesTableProps {
  formattedLeaves: FormattedLeave[];
  refetchLeaves: () => void;
  pageCount: number;

  handlePageChange: (e: { selected: number }) => void;
  paginatePage: number;
}

export const LeavesTable = (props: LeavesTableProps) => {
  const {
    formattedLeaves,
    refetchLeaves,
    pageCount,
    handlePageChange,
    paginatePage,
  } = props;

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
