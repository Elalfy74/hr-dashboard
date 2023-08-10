import { LoaderIcon } from 'lucide-react';

export const Loader = ({ text }: { text?: string }) => {
  return (
    <>
      <LoaderIcon className='w-4 h-4 mr-2 animate-spin' />
      {text || 'Please Wait'}
    </>
  );
};
