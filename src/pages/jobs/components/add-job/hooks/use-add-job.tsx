import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';
import { addJob } from '@/services/jobs';

export const useAddJob = (onDone: () => void) => {
  const { toast } = useToast();

  const { mutate, isLoading } = useMutation({
    mutationFn: addJob,
    onSuccess: () => {
      toast({
        description: 'Job has been added.',
      });
      onDone();
    },
  });

  return {
    addJob: mutate,
    isLoading,
  };
};
