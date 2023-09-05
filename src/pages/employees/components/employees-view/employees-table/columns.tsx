/* eslint-disable react-hooks/rules-of-hooks */
import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

import { EmployeeWithDepartment } from '@/types';

import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';

import { Status } from '../components/status';
import { Button } from '@/components/ui/button';
import { EyeIcon, Trash2Icon } from 'lucide-react';
import { DeleteAlert } from '@/components/delete-alert';
import { useDeleteEmployee } from '../hooks/use-delete-employee';

export const columns: ColumnDef<EmployeeWithDepartment>[] = [
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
      <div className='flex items-center gap-2'>
        <img
          src={row.original.avatar || undefined}
          alt='avatar'
          className='w-8 border rounded-full'
        />
        {row.original.first_name} {row.original.last_name}
      </div>
    ),
  },

  {
    accessorKey: 'designation',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Designation' />;
    },
  },

  {
    accessorKey: 'active',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Status' />;
    },
    cell: ({ row }) => <Status active={row.original.active} />,
  },

  {
    accessorKey: 'email',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Email' />;
    },
  },

  {
    accessorKey: 'phone',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Phone' />;
    },
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
    accessorKey: 'date_of_joining',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title='Date Of Joining' />;
    },
  },

  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const { id } = row.original;

      const { alertOpen, setAlertOpen, isLoading, mutate } =
        useDeleteEmployee(id);

      return (
        <div className='flex gap-2'>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='bg-mainPurple hover:bg-mainPurple/90'
          >
            <Link to={`/employees/${id}`}>
              <EyeIcon className='w-4 h-4' />
            </Link>
          </Button>
          <DeleteAlert
            title='Employee'
            onClick={mutate}
            open={alertOpen}
            onOpenChange={setAlertOpen}
            isLoading={isLoading}
          >
            <Button variant='destructive' size='icon'>
              <Trash2Icon className='w-4 h-4' />
            </Button>
          </DeleteAlert>
        </div>
      );
    },
  },
];
