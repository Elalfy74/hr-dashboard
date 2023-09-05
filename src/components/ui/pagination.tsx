import { Button } from './button';

interface PaginationProps {
  handleNext: () => void;
  canNext: boolean;
  handlePrev: () => void;
  canPrev: boolean;
}
export const Pagination = (props: PaginationProps) => {
  return (
    <div>
      <Button
        variant='outline'
        size='sm'
        onClick={props.handlePrev}
        disabled={!props.canPrev}
      >
        Previous
      </Button>
      <Button
        variant='outline'
        size='sm'
        onClick={props.handleNext}
        disabled={!props.canNext}
      >
        Next
      </Button>
    </div>
  );
};
