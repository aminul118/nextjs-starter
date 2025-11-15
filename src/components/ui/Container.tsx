import { cn } from '@/lib/utils';
import { IChildren, SectionProps } from '@/types';

type TContainer = IChildren &
  SectionProps & {
    className?: string;
    background?: string;
  };

const Container = ({ background, className, children }: TContainer) => {
  return (
    <section className={cn('px-2 py-6 lg:py-8', background, className)}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Container;
