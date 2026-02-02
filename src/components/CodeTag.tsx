import { cn } from "@/lib/utils";

interface CodeTagProps {
  children: React.ReactNode;
  variant?: "open" | "close";
  className?: string;
}

export const CodeTag = ({ children, variant = "open", className }: CodeTagProps) => {
  return (
    <span className={cn("font-mono text-accent inline-flex items-center", className)}>
      <span className="text-primary">&lt;</span>
      {variant === "close" && <span className="text-primary">/</span>}
      <span>{children}</span>
      <span className="text-primary">&gt;</span>
    </span>
  );
};
