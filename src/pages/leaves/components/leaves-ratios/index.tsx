import { useLeavesCount } from './hooks/use-leaves-count';

import { SingleLeaveRatio } from './single-leave-ratio';

export const LeavesRatios = () => {
  const {
    totalLeavesLoading,
    pendingLeavesData,
    pendingLeavesLoading,
    marriageLeavesData,
    marriageLeavesLoading,
    periodLeavesData,
    periodLeavesLoading,
  } = useLeavesCount();

  return (
    <>
      <SingleLeaveRatio
        color='#CEBDF2'
        title='Pending'
        data={pendingLeavesData}
        isLoading={totalLeavesLoading || pendingLeavesLoading}
      />

      <SingleLeaveRatio
        color='#E5EDE6'
        title='Marriage'
        data={marriageLeavesData}
        isLoading={totalLeavesLoading || marriageLeavesLoading}
      />

      <SingleLeaveRatio
        color='#FBE7DC'
        title='Period'
        data={periodLeavesData}
        isLoading={totalLeavesLoading || periodLeavesLoading}
      />
    </>
  );
};
