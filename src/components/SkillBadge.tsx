import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const SkillBadge = ({ children, className }: SkillBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium",
        "glass-card text-muted-foreground",
        "transition-all duration-300 hover:text-foreground hover:border-primary/20",
        className
      )}
    >
      {children}
    </span>
  );
};
