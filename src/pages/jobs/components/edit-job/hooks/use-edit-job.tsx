import { useMutation, useQuery } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';

import { updateJob, getSingleJob } from '@/services/jobs';

export const useEditJob = (onDone: () => void, id: number) => {
  const { toast } = useToast();

  const { data: jobData, isLoading: getJobLoading } = useQuery({
    queryKey: ['Job', id],
    queryFn: () => getSingleJob(id),
  });

  const { mutate, isLoading: updateJobLoading } = useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      toast({
        description: 'Job has been updated.',
      });
      onDone();
    },
  });

  return {
    jobData,
    updateJob: mutate,
    updateJobLoading,
    getJobLoading,
  };
};
