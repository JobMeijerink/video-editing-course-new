import { Card } from "@/components/ui/card";
import { Clock, Unlink, DollarSign, Signpost, Laptop, Construction } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const painPoints = [
  {
    title: "Tired of the 9-5 Grind",
    description: "Stuck in the same routine with no end in sight.",
    Icon: Clock,
  },
  {
    title: "Trapped by Location",
    description: "Want to travel but your job chains you to one place.",
    Icon: Unlink,
  },
  {
    title: "Looking for Real Skills",
    description: "Tired of 'get rich quick' schemes that don't work.",
    Icon: DollarSign,
  },
  {
    title: "Worried You're Too Late",
    description: "Feeling like you've missed your chance to change.",
    Icon: Signpost,
  },
  {
    title: "No Clear Path Forward",
    description: "Need a step-by-step system that actually works.",
    Icon: Laptop,
  },
  {
    title: "Fear of Taking the Leap",
    description: "Scared to leave stability for the unknown.",
    Icon: Construction,
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-2/20 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 text-bright-white">
            Stuck in the Same Place?{" "}
            <span className="relative inline-block pb-3">
              <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                You're Not Alone
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-4" viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M10 2 Q50 14 100 10 T190 8" stroke="url(#gradient1)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {painPoints.map((point, index) => (
            <Card 
              key={index}
              className="p-6 border-card-border card-3d"
              data-testid={`card-pain-point-${index}`}
            >
              <div className="flex items-start gap-5">
                {/* Symbol on the left - prominent and aligned */}
                <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <point.Icon 
                      className="w-20 h-20"
                      style={{
                        color: 'rgb(0, 255, 255)',
                        filter: 'drop-shadow(0 3px 10px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 255, 0.7)) drop-shadow(0 0 50px rgba(0, 255, 255, 0.5))',
                        strokeWidth: 2
                      }}
                    />
                  </div>
                </div>
                
                {/* Text content on the right */}
                <div className="flex-1 space-y-2 pt-1">
                  <h3 className="text-lg font-bold leading-tight text-bright-white">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <p className="text-xl lg:text-2xl font-semibold text-bright-white" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.4)' }}>
              There's a better way. And it's simpler than you think.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
