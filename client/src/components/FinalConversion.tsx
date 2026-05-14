import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinalConversion() {
  const handleStartNow = () => {
    console.log('Final CTA - Start Now clicked');
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-2/20 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles className="w-5 h-5 text-accent" />
            <p className="text-sm font-semibold text-accent">Limited Time Offer</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-bright-white">
            Your Freedom Journey Starts Today
          </h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
          6 months from now, you could be editing videos from wherever you dream of being...
        </p>

        <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-12 max-w-3xl mx-auto">
          Or you could still be stuck in the same place, wishing you'd taken action. 
          The choice is yours. But the time to decide is now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 rounded-full font-bold bg-gradient-to-r from-chart-2 to-destructive hover:opacity-90 transition-opacity border-0"
            onClick={handleStartNow}
            data-testid="button-final-cta"
          >
            Start Your Journey Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-card-border">
            <p className="text-3xl font-bold text-primary mb-2">14-Day</p>
            <p className="text-muted-foreground">Money-Back Guarantee</p>
          </div>
          <div className="p-6 rounded-xl border border-card-border">
            <p className="font-bold text-accent mb-2 text-[22px]">Free, Premium & VIP</p>
            <p className="text-muted-foreground">Course Access</p>
          </div>
          <div className="p-6 rounded-xl border border-card-border">
            <p className="text-3xl font-bold text-chart-4 mb-2">10+</p>
            <p className="text-muted-foreground">Success Stories</p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
