import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const scenarios = [
  "You're stuck in a job you hate and dream of location freedom",
  "You're a creative person who wants to monetize your skills",
  "You're a traveler who needs a skill that pays anywhere",
  "You're tired of side hustles that don't work",
  "You want a valuable skill companies actually pay for",
  "You have zero editing experience but are willing to learn",
  "You're ready to take control of your financial future",
  "You want to escape the 9-5 and live life on your terms"
];

export default function TargetAudience() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-2/20 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-bright-white text-center">
              This Is For You If...
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {scenarios.map((scenario, index) => (
            <Card 
              key={index}
              className="p-4 border-card-border card-3d"
              data-testid={`card-scenario-${index}`}
            >
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{scenario}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
