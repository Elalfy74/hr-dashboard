import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';

import { deleteJob } from '@/services/jobs';

export const useDeleteJob = (onDone: () => void = () => {}) => {
  const { toast } = useToast();

  const [alertOpen, setAlertOpen] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      setAlertOpen(false);
      toast({
        description: 'Job has been deleted ',
      });

      onDone();
    },
  });

  return {
    alertOpen,
    setAlertOpen,
    deleteJob: mutate,
    isLoading,
  };
};
