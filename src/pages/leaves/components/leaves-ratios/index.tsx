import { SingleLeaveRatio } from './single-leave-ratio';

export const LeavesRatios = () => {
  return (
    <>
      <SingleLeaveRatio
        number={0}
        text={'A'}
        color='#CEBDF2'
        title={'Pending'}
      />

      <SingleLeaveRatio
        number={0}
        text={'B'}
        color={'#E5EDE6'}
        title={'Marriage'}
      />
      <SingleLeaveRatio
        number={0}
        text={'C'}
        color={'#FBE7DC'}
        title={'Period'}
      />
    </>
  );
};
