import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Section = (props: SectionProps) => {
  return (
    <section className={cn('px-6 pb-8 -mt-40', props.className)} {...props}>
      {props.children}
    </section>
  );
};
