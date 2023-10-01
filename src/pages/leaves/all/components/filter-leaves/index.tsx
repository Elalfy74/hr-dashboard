import { FilterItem } from '@/components/filter-item';
import { LeaveStatus } from '@/types';

interface FilterLeavesProps {
  leaveStatus: LeaveStatus | undefined;
  handleChangeStatus: (status: LeaveStatus) => void;
}

export const FilterLeaves = (props: FilterLeavesProps) => {
  const { leaveStatus, handleChangeStatus } = props;

  return (
    <FilterItem
      options={[
        {
          value: 'pending',
          label: 'pending',
        },
        {
          value: 'approved',
          label: 'approved',
        },
        {
          value: 'rejected',
          label: 'rejected',
        },
      ]}
      placeholder='Select a Status'
      onSelect={(value) => handleChangeStatus(value as LeaveStatus)}
      value={leaveStatus}
    />
  );
};
