import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Monitor, Scissors, Palette, Headphones, Sparkles, Folder, Globe, Users, DollarSign, MessageCircle, TrendingUp, Plane, LucideIcon } from "lucide-react";

const modules = [
  {
    number: 1,
    title: "Video Editing Fundamentals",
    icon: Monitor,
    color: "from-cyan-400 to-blue-500",
    duration: "2.5 hours",
    keyTopics: "Software, interface, workflow, shortcuts"
  },
  {
    number: 2,
    title: "Essential Editing Techniques",
    icon: Scissors,
    color: "from-purple-400 to-pink-500",
    duration: "3.5 hours",
    keyTopics: "Cutting, pacing, B-roll, transitions"
  },
  {
    number: 3,
    title: "Color Grading & Visual Style",
    icon: Palette,
    color: "from-emerald-400 to-teal-500",
    duration: "3 hours",
    keyTopics: "Color theory, LUTs, cinematic looks"
  },
  {
    number: 4,
    title: "Audio & Sound Design",
    icon: Headphones,
    color: "from-orange-400 to-red-500",
    duration: "2 hours",
    keyTopics: "Dialogue cleanup, mixing, sound effects"
  },
  {
    number: 5,
    title: "Effects & Motion Graphics",
    icon: Sparkles,
    color: "from-indigo-400 to-violet-500",
    duration: "2.5 hours",
    keyTopics: "Text animation, effects, speed ramping"
  },
  {
    number: 6,
    title: "Portfolio Building",
    icon: Folder,
    color: "from-yellow-400 to-amber-500",
    duration: "2 hours",
    keyTopics: "Demo reel, case studies, presentation"
  },
  {
    number: 7,
    title: "Personal Branding",
    icon: Globe,
    color: "from-rose-400 to-red-500",
    duration: "1.5 hours",
    keyTopics: "Online presence, portfolio site, social"
  },
  {
    number: 8,
    title: "Finding Clients",
    icon: Users,
    color: "from-blue-400 to-cyan-500",
    duration: "2.5 hours",
    keyTopics: "Platforms, outreach, proposals, networking"
  },
  {
    number: 9,
    title: "Pricing & Negotiation",
    icon: DollarSign,
    color: "from-green-400 to-emerald-500",
    duration: "1.5 hours",
    keyTopics: "Value pricing, packages, contracts"
  },
  {
    number: 10,
    title: "Client Management",
    icon: MessageCircle,
    color: "from-violet-400 to-purple-500",
    duration: "2 hours",
    keyTopics: "Communication, delivery, feedback"
  },
  {
    number: 11,
    title: "Scaling Your Business",
    icon: TrendingUp,
    color: "from-pink-400 to-rose-500",
    duration: "2 hours",
    keyTopics: "Recurring clients, raising rates, systems"
  },
  {
    number: 12,
    title: "Living the Freedom Life",
    icon: Plane,
    color: "from-amber-400 to-yellow-500",
    duration: "1.5 hours",
    keyTopics: "Remote work, travel, tax, productivity"
  }
];


export default function CurriculumSection() {
  return (
    <section className="py-16 lg:py-20 bg-background section-pattern relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 text-bright-white">
            Everything You Need to Go From{" "}
            <span className="relative inline-block pb-3">
              <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                Beginner to Paid Pro
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-4" viewBox="0 0 240 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M12 2 Q60 14 120 10 T228 8" stroke="url(#gradient9)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient9" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Badge variant="secondary" className="text-base px-4 py-1">
              12 Modules
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-1">
              25+ Hours
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-1">
              Lifetime Access
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative">
          {modules.map((module) => (
            <Card 
              key={module.number}
              className="p-5 border-card-border card-3d relative overflow-hidden group"
              data-testid={`module-${module.number}`}
            >
              {/* Fading background symbol - same style as Timeline */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-[0.08] pointer-events-none">
                <div className={`w-full h-full bg-gradient-to-br ${module.color} rounded-3xl flex items-center justify-center`}>
                  <module.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary">MODULE {module.number}</span>
                  <Badge variant="outline" className="text-xs">{module.duration}</Badge>
                </div>
                <h3 className="text-base font-bold leading-tight text-bright-white">{module.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {module.keyTopics}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
