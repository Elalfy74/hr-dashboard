import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';

import { useDisclosure } from '@/hooks/use-disclosure';

interface UseDeleteEntityProps {
  onDone: () => void;
  deleteFun: (id: number) => Promise<void>;
  entity: string;
}

export const useDeleteEntity = ({
  entity,
  onDone,
  deleteFun,
}: UseDeleteEntityProps) => {
  const { toast } = useToast();

  const {
    isOpen: alertOpen,
    setIsOpened: setAlertOpen,
    close: closeAlert,
    open: openAlert,
  } = useDisclosure();

  const { mutate: deleteEntity, isLoading: isDeleting } = useMutation({
    mutationFn: deleteFun,
    onSuccess: () => {
      closeAlert();

      onDone();

      toast({
        description: `${entity} has been deleted `,
      });
    },
  });

  return {
    alertOpen,
    setAlertOpen,
    openAlert,
    deleteEntity,
    isDeleting,
  };
};
