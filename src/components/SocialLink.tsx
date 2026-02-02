import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const SocialLink = ({ href, icon, label, className }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group relative flex items-center justify-center w-12 h-12 rounded-xl",
        "glass-card transition-all duration-300",
        "hover:border-primary/30 hover:scale-110 hover:glow",
        className
      )}
    >
      <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
        {icon}
      </span>
    </a>
  );
};
