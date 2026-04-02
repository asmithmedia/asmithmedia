import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  variant?: "purple" | "blue" | "mixed";
}

export function GradientBlob({
  className,
  variant = "purple",
}: GradientBlobProps) {
  const gradients = {
    purple: "from-primary/20 via-primary/5 to-transparent",
    blue: "from-accent/20 via-accent/5 to-transparent",
    mixed: "from-primary/15 via-accent/10 to-transparent",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full bg-gradient-radial blur-3xl pointer-events-none",
        gradients[variant],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${
          variant === "purple"
            ? "rgba(127,84,179,0.15)"
            : variant === "blue"
            ? "rgba(59,130,246,0.15)"
            : "rgba(127,84,179,0.1), rgba(59,130,246,0.1)"
        } 0%, transparent 70%)`,
      }}
      aria-hidden
    />
  );
}
