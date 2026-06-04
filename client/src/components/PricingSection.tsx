import { Card } from "@/components/ui/card";
import { Check, X, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const GRAD =
  "linear-gradient(100deg,#22d3ee 0%,#6366f1 45%,#a855f7 70%,#ec4899 100%)";

type Feature = { included: boolean; text: string; sub?: string };

type Tier = {
  name: string;
  amount: string;
  per: string;
  subprice: React.ReactNode;
  popular: boolean;
  features: Feature[];
  cta: string;
  ctaVariant: "outline" | "solid" | "vip";
  testId: string;
};

const pricingTiers: Tier[] = [
  {
    name: "Free Access",
    amount: "$0",
    per: " /forever",
    subprice: <>No card required — join in 60 seconds</>,
    popular: false,
    features: [
      { included: true, text: "Community access" },
      {
        included: true,
        text: "Client Pool access",
        sub: "1 claim/month — after a 48h head start",
      },
      { included: true, text: "Premium subscription giveaways" },
      { included: false, text: "Weekly Q&A session" },
      { included: false, text: "Chat support" },
      { included: false, text: "Editing Mastery course" },
      { included: false, text: "Editing Practice drills" },
      { included: false, text: "Client Engine system" },
      { included: false, text: "Asset library + premium assets" },
      { included: false, text: "Custom career roadmap" },
    ],
    cta: "Start with free access",
    ctaVariant: "outline",
    testId: "Client Engine Package",
  },
  {
    name: "Premium",
    amount: "$29",
    per: " /month",
    subprice: (
      <>
        or <strong className="font-semibold text-indigo-300">$290/year</strong>{" "}
        — 2 months free
        <br />
        Annual unlocks your 1-on-1 call
      </>
    ),
    popular: true,
    features: [
      {
        included: true,
        text: "Editing Mastery",
        sub: "The full self-paced course",
      },
      {
        included: true,
        text: "Editing Practice",
        sub: "Guided drills with feedback",
      },
      {
        included: true,
        text: "Client Engine",
        sub: "The system to land paying clients",
      },
      { included: true, text: "Personal asset library + premium assets" },
      {
        included: true,
        text: "Instant Client Pool access",
        sub: "Claim up to 5 leads/month, before the free pool",
      },
      { included: true, text: "Chat support" },
      {
        included: true,
        text: "1-on-1 call with Jacob",
        sub: "$250 value — included with annual",
      },
      { included: false, text: "Private WhatsApp group" },
      { included: false, text: "1-on-1 mentorship" },
      { included: false, text: "Custom career roadmap" },
    ],
    cta: "Go Premium",
    ctaVariant: "solid",
    testId: "Premium",
  },
  {
    name: "VIP",
    amount: "$1,499",
    per: " /year",
    subprice: (
      <>
        ≈ $125/month · by application
        <br />
        Limited seats each cohort
      </>
    ),
    popular: false,
    features: [
      { included: true, text: "Everything in Premium" },
      {
        included: true,
        text: "1-on-1 mentorship",
        sub: "Ongoing personal guidance",
      },
      {
        included: true,
        text: "Private WhatsApp group",
        sub: "Direct access to Jacob",
      },
      {
        included: true,
        text: "Hand-matched clients",
        sub: "Highest-budget leads routed to you first, no competition",
      },
      { included: true, text: "VIP support" },
      { included: true, text: "Early access to new content" },
      { included: true, text: "Exclusive networking events" },
      { included: true, text: "Custom career roadmap" },
    ],
    cta: "Apply — book a call",
    ctaVariant: "vip",
    testId: "VIP",
  },
];

const ctaClasses: Record<Tier["ctaVariant"], string> = {
  outline:
    "bg-transparent text-white border border-white/20 hover:bg-white/5",
  solid: "text-[#04101f] font-bold border-0 hover:brightness-110",
  vip: "border border-purple-500/50 text-purple-200 hover:bg-purple-500/10",
};

export default function PricingSection() {
  const handleSelectPlan = (planName: string) => {
    console.log(`${planName} plan selected`);
  };

  return (
    <section
      id="pricing"
      className="py-16 lg:py-20 bg-background section-pattern relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight text-bright-white">
              Choose Your Path to{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: GRAD }}
                >
                  Freedom
                </span>
                <span
                  className="absolute left-0 right-0 -bottom-2 h-[5px] rounded"
                  style={{ backgroundImage: GRAD }}
                  aria-hidden="true"
                />
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Start free. Learn the craft. Land the clients.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.testId}
                className={`rounded-[22px] p-8 pt-9 flex flex-col transition-transform duration-300 ${
                  tier.popular
                    ? "bg-[#0f1730] border-[1.5px] border-cyan-400 shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_24px_60px_-28px_rgba(34,211,238,0.55)] lg:-translate-y-3 lg:hover:-translate-y-[18px]"
                    : "bg-[#0d1322] border border-white/10 lg:hover:-translate-y-1.5"
                }`}
                data-testid={`pricing-card-${tier.testId}`}
              >
                {tier.popular && (
                  <span className="self-center mb-4 bg-cyan-400 text-[#04293a] text-xs font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full">
                    Most popular
                  </span>
                )}

                <div className="text-center mb-1">
                  <h3 className="text-xl font-semibold text-bright-white">
                    {tier.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-[46px] font-extrabold tracking-tight text-white">
                      {tier.amount}
                    </span>
                    <span className="text-[17px] font-medium text-muted-foreground">
                      {tier.per}
                    </span>
                  </div>
                  <p className="mt-1 mb-1 text-[13px] leading-snug text-muted-foreground min-h-[36px]">
                    {tier.subprice}
                  </p>
                </div>

                <div className="h-px bg-white/10 my-5" aria-hidden="true" />

                <ul className="space-y-[15px] flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-[14.5px] leading-relaxed"
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-white/25 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={
                          feature.included ? "text-white" : "text-white/30"
                        }
                      >
                        {feature.text}
                        {feature.sub && (
                          <span
                            className={`block text-[12.5px] mt-0.5 ${
                              feature.included
                                ? "text-muted-foreground"
                                : "text-white/25"
                            }`}
                          >
                            {feature.sub}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-7 w-full text-center py-4 rounded-[14px] text-base font-semibold cursor-pointer transition active:scale-[0.985] ${ctaClasses[tier.ctaVariant]}`}
                  style={
                    tier.ctaVariant === "solid"
                      ? { backgroundImage: GRAD }
                      : undefined
                  }
                  onClick={() => {
                    handleSelectPlan(tier.name);
                    window.open(
                      "https://www.skool.com/vantage-point-editing-6309/plans",
                      "_blank",
                    );
                  }}
                  data-testid={`button-select-${tier.testId}`}
                >
                  {tier.cta}
                </button>
              </div>
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
                <h3 className="text-2xl font-bold mb-2 text-bright-white">
                  14-Day Money-Back Guarantee
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you complete at least half of the classes included in your
                  package and don't feel confident in your editing skills or
                  your sales skills get a full refund. No questions asked.
                  Plus, payment plans are available to make this investment
                  even easier.
                </p>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
