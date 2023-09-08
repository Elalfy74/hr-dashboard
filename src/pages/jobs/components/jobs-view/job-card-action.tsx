import { CardActions } from '@/components/card-actions';

import { useDeleteJob } from './hooks/use-delete-job';
import { EditJob } from '../edit-job';
import { useDisclosure } from '@/hooks/use-disclosure';

interface JobCardActions {
  id: number;
  jobsRefetch: () => void;
}

export const JobCardActions = ({ id, jobsRefetch }: JobCardActions) => {
  //  Actions Menu
  const { isOpen, setIsOpened, close } = useDisclosure(false);

  const onActionDone = () => {
    close();
    jobsRefetch();
  };

  const { alertOpen, setAlertOpen, isLoading, deleteJob } =
    useDeleteJob(onActionDone);

  return (
    <CardActions
      title='Job'
      alertOpen={alertOpen}
      setAlertOpen={setAlertOpen}
      isMenuOpen={isOpen}
      setIsMenuOpen={setIsOpened}
      handleDelete={() => deleteJob(id)}
      isLoading={isLoading}
      editComponent={<EditJob id={id} onUpdateDone={onActionDone} />}
    />
  );
};
