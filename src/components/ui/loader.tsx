import { LoaderIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LoaderProps {
  text?: string;
  className?: string;
}

export const Loader = ({ text, className }: LoaderProps) => {
  return (
    <>
      <LoaderIcon className={cn('w-4 h-4 mr-2 animate-spin', className)} />
      {text ?? 'Please Wait'}
    </>
  );
};
