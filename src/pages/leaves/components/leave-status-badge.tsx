import { VariantProps } from 'class-variance-authority';

import { AppBadge, appBadgeVariants } from '@/components/app-badge';

import type { LeaveStatus } from '@/types';

export const LeaveStatusBadge = ({ status }: { status: LeaveStatus }) => {
  return <AppBadge variant={getBadgeVariant(status)}>{status}</AppBadge>;
};

const getBadgeVariant = (
  status: LeaveStatus
): VariantProps<typeof appBadgeVariants>['variant'] => {
  if (status === 'pending') return 'purple';
  if (status === 'approved') return 'green';
  return 'blue';
};
