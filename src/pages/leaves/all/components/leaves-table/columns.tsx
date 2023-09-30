import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';

import type { FormattedLeave } from '@/types';

import { LeaveStatusBadge } from '../../../components/leave-status-badge';
import { LeavePeriodBadge } from '../../../components/leave-period-badge';
import { LeavesTableActions } from './leaves-table-actions';

export const columns: (onDone: () => void) => ColumnDef<FormattedLeave>[] = (
  onDone
) => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
  },

  {
    accessorKey: 'first_name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Employee Name' />;
    },
    cell: ({ row }) => (
      <div>
        {row.original.first_name} {row.original.last_name}
      </div>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Email' />;
    },
  },

  {
    accessorKey: 'leave_reason',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Reason' />;
    },
  },

  {
    accessorKey: 'status',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Status' />;
    },
    cell: ({ row }) => <LeaveStatusBadge status={row.original.status} />,
  },

  {
    accessorKey: 'departments',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Department' />;
    },
    cell: ({ row }) => {
      return <div>{row.original.departments?.name}</div>;
    },
  },
  {
    accessorKey: 'leave_type_days',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Leave Period' />;
    },
    cell: ({ row }) => {
      return <LeavePeriodBadge leave={row.original} />;
    },
  },

  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const { id } = row.original;

      return <LeavesTableActions id={id} onDone={onDone} />;
    },
  },
];
