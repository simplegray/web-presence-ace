import { cn } from "@/lib/utils";
import profileImage from "@/assets/profile.jpg";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Glow effect behind avatar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl animate-pulse-slow" />
      
      {/* Avatar container */}
      <div className="relative">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-br from-primary to-accent">
          <div className="w-full h-full rounded-full overflow-hidden bg-background p-0.5">
            <img
              src={profileImage}
              alt="Hunter Gray"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        
        {/* Online indicator */}
        <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-background animate-pulse" />
      </div>
    </div>
  );
};
