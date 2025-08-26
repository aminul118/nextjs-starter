import { cn } from "@/lib/utils";

type SectionBannerProps = {
  title?: string;
  description?: string;
  className?: string;
  backgroundImagePath?: string;
  overlay?: boolean; // allow disabling overlay if needed
};

const SectionBanner: React.FC<SectionBannerProps> = ({
  title,
  description,
  className,
  backgroundImagePath,
  overlay = true,
}) => {
  return (
    <div
      className={cn(
        "relative flex h-64 w-full items-center justify-center bg-cover bg-center",
        className
      )}
      style={{
        backgroundImage: backgroundImagePath
          ? `url('${backgroundImagePath}')`
          : "none",
      }}
    >
      {backgroundImagePath && overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="relative z-10 max-w-2xl px-4 text-center">
        {title && (
          <h2 className="mb-4 text-2xl font-bold lg:text-4xl">{title}</h2>
        )}
        {description && <p className="text-lg">{description}</p>}
      </div>
    </div>
  );
};

export default SectionBanner;
