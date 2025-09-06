import { cn } from '@/lib/utils';
import { IChildren } from '@/types';

interface ContainerProps extends IChildren {
  className?: string;
  backgroundColor?: string;
}

const Container = ({
  children,
  className,
  backgroundColor,
  ...props
}: ContainerProps) => {
  return (
    <section className={backgroundColor} {...props}>
      <div
        className={cn(
          'container mx-auto px-3 py-8 lg:py-14 xl:py-16 2xl:py-24',
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
