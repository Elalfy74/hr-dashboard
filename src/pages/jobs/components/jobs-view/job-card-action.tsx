import { useDisclosure } from '@/hooks/use-disclosure';

import { CardActions } from '@/components/card-actions';

import { useDeleteJob } from './hooks/use-delete-job';
import { EditJob } from '../edit-job';

interface JobCardActions {
  id: number;
  onDone: () => void;
}

export const JobCardActions = ({ id, onDone }: JobCardActions) => {
  //  Actions Menu
  const { isOpen, setIsOpened, close } = useDisclosure(false);

  const onActionDone = () => {
    close();
    onDone();
  };

  const { alertOpen, setAlertOpen, deleteJobLoading, deleteJob } =
    useDeleteJob(onActionDone);

  const handleDeleteJob = () => deleteJob(id);

  const EditJobComponent: React.FC = () => (
    <EditJob id={id} onUpdateDone={onActionDone} />
  );

  return (
    <CardActions
      title='Job'
      alertOpen={alertOpen}
      setAlertOpen={setAlertOpen}
      isMenuOpen={isOpen}
      setIsMenuOpen={setIsOpened}
      handleDelete={handleDeleteJob}
      isDeleteLoading={deleteJobLoading}
      editComponent={<EditJobComponent />}
    />
  );
};
