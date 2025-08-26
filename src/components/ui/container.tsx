import { IChildren } from "@/types";
import { cn } from "@/lib/utils";

interface ContainerProps extends IChildren {
  aos?: "fade-up" | "fade-right" | "fade-left";
  className?: string;
  backgroundColor?: string;
}

const Container = ({
  children,
  aos,
  className,
  backgroundColor,
}: ContainerProps) => {
  return (
    <section className={backgroundColor} data-aos={aos}>
      <div
        className={cn(
          "container mx-auto px-3 py-8 lg:py-14 xl:py-16 2xl:py-24",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
