import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-20 md:py-28 px-6", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  const isCentered = className?.includes("text-center");
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {label && (
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-lg max-w-2xl leading-relaxed",
            isCentered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
