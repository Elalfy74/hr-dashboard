import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';

import { approveOrRejectLeave } from '@/services/leaves';

export const useApproveOrRejectLeave = (onDone: () => void) => {
  const { toast } = useToast();

  const { mutate, isLoading, variables } = useMutation({
    mutationFn: approveOrRejectLeave,
    onSuccess: (_, { action }) => {
      toast({
        description: `Leave has been ${action}ed`,
      });
      onDone();
    },
  });

  return {
    approveOrReject: mutate,
    approveLoading: isLoading && variables?.action === 'approve',
    rejectLoading: isLoading && variables?.action === 'reject',
  };
};
