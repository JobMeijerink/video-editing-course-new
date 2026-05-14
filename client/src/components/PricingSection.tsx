import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pricingTiers = [
  {
    name: "Free Access",
    price: "$0/month",
    popular: false,
    features: [
      { included: true, text: "Community Access" },
      { included: true, text: "Client Pool (free potential client giveaways)" },
      { included: true, text: "Premium Subscription Giveways" },
      { included: false, text: "Weekly Q&A Session" },
      { included: false, text: "Chat support" },
      { included: false, text: "Vantage Point Editing Mastery" },
      { included: false, text: "Vantage Point Editing Practice" },
      { included: false, text: "Client Engine" },
      { included: false, text: "Asset library + Premium Assets Access" },
      { included: false, text: "Custom career roadmap" }
    ],
    cta: "Start With Free Access",
    testId: "Client Engine Package"
  },
  {
    name: "Premium",
    price: "$29/month",
    popular: true,
    features: [
      { included: true, text: "Vantage Point Editing Mastery" },
      { included: true, text: "Vantage Point Editing Practice" },
      { included: true, text: "Client Engine" },
      { included: true, text: "Personal Asset library + Many More Premium Assets" },
      { included: true, text: "High Client Pool Priority (free potential client giveaways)" },
      { included: true, text: "1-on-1 Call With Jacob (Value: $250 - Only with Annual Payment)" },
      { included: true, text: "Chat support" },
      { included: false, text: "Private Whatsapp Group" },
      { included: false, text: "1 on 1 Mentorship" },
      { included: false, text: "Custom career roadmap" }
    ],
    cta: "Go Premium",
    testId: "Premium"
  },
  {
    name: "VIP",
    price: "$1499/year",
    popular: false,
    features: [
      { included: true, text: "Everything in Premium" },
      { included: true, text: "1 on 1 Mentorship" },
      { included: true, text: "Private Whatsapp Group" },
      { included: true, text: "Higher Client Pool Priority (free potential client giveaways)" },
      { included: true, text: "VIP support" },
      { included: true, text: "Early access to new content" },
      { included: true, text: "Exclusive networking events" },
      { included: true, text: "Custom career roadmap" }
    ],
    cta: "Get VIP Access",
    testId: "VIP"
  }
];

export default function PricingSection() {
  const handleSelectPlan = (planName: string) => {
    console.log(`${planName} plan selected`);
  };

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-background section-pattern relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-bright-white">
            Choose Your Path to{" "}
            <span className="relative inline-block pb-3">
              <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                Freedom
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-4" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M6 2 Q30 14 60 10 T114 8" stroke="url(#gradient10)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient10" x1="0%" y1="0%" x2="100%" y2="0%">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`p-8 backdrop-blur-md border-2 flex flex-col card-3d ${
                tier.popular 
                  ? 'bg-gradient-to-b from-primary/10 to-accent/5 border-primary scale-105 shadow-2xl' 
                  : 'bg-card/50 border-card-border'
              }`}
              data-testid={`pricing-card-${tier.testId}`}
            >
              {tier.popular && (
                <Badge className="self-center mb-4 bg-primary text-primary-foreground px-4 py-1">
                  MOST POPULAR
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-bright-white">{tier.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="font-bold text-[38px]">{tier.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-chart-4 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg"
                className={`w-full text-lg font-bold rounded-xl ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                    : ''
                }`}
                variant={tier.popular ? 'default' : 'outline'}
                onClick={() => {
                  handleSelectPlan(tier.name);
                  window.open('https://www.skool.com/vantage-point-editing-6309/plans', '_blank');
                }}
                data-testid={`button-select-${tier.testId}`}
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
          </div>
        </ScrollReveal>

        {/* Guarantee */}
        <ScrollReveal delay={0.3}>
          <Card className="p-8 backdrop-blur-md bg-card/50 border-card-border max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="p-4 rounded-full bg-chart-4/10 border-2 border-chart-4/20 flex-shrink-0">
              <Shield className="w-12 h-12 text-chart-4" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-bright-white">14-Day Money-Back Guarantee</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you complete at least half of the classes included in your package and don't feel confident in your editing skills or 
                your sales skills get a full refund. No questions asked. Plus, payment plans are available to make this 
                investment even easier.
              </p>
            </div>
          </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
