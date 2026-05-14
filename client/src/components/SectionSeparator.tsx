import { Sparkles, Zap, Star, Award, Trophy, Target } from "lucide-react";

type SeparatorVariant = "sparkles" | "zap" | "star" | "award" | "trophy" | "target";

interface SectionSeparatorProps {
  variant?: SeparatorVariant;
  fromColor?: string;
  toColor?: string;
}

const iconMap = {
  sparkles: Sparkles,
  zap: Zap,
  star: Star,
  award: Award,
  trophy: Trophy,
  target: Target,
};

export default function SectionSeparator({ 
  variant = "sparkles",
  fromColor = "from-background",
  toColor = "to-secondary/20"
}: SectionSeparatorProps) {
  const Icon = iconMap[variant];
  
  return (
    <div className={`relative h-24 bg-gradient-to-b ${fromColor} ${toColor} flex items-center justify-center`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse-glow" 
               style={{ animationDuration: '4s' }} />
          <div className="relative bg-gradient-to-br from-primary/30 to-accent/30 rounded-full p-4 border border-primary/20 backdrop-blur-sm">
            <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
