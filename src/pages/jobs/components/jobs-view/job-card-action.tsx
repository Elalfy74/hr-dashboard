import { CardActions } from '@/components/card-actions';

import { useDisclosure } from '@/hooks/use-disclosure';
import { useDeleteEntity } from '@/hooks/use-delete-entity';

import { deleteJob } from '@/services/jobs';
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

  const { alertOpen, setAlertOpen, deleteEntity, isDeleting } = useDeleteEntity(
    {
      deleteFun: deleteJob,
      entity: 'Job',
      onDone: onActionDone,
    }
  );

  const handleDeleteJob = () => deleteEntity(id);

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
      isDeleteLoading={isDeleting}
      editComponent={<EditJobComponent />}
    />
  );
};
