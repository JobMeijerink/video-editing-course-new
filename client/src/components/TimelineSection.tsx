import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MonitorPlay, PlayCircle, Briefcase, FolderOpen, Users, Lightbulb, LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const components = [
  {
    title: "FREE Community & Client Pool",
    icon: Users,
    color: "from-indigo-400 to-violet-500",
    description: "Supportive community sharing assets, feedback, wins + FREE client giveaways landing on your lap.",
    details: "Connect with fellow editors, share your progress, and access exclusive opportunities!",
    comingSoon: false
  },
  {
    title: "Editing Mastery + AI Implementation",
    icon: MonitorPlay,
    color: "from-cyan-400 to-blue-500",
    description: "The most efficient video editing tutorial out there. Only learn what you need to know and let AI do the rest.",
    details: "All the ins and outs of my editing process in under 15 hours + AI tool-training (unbelievably simple!).",
    comingSoon: false
  },
  {
    title: "Premium Practice",
    icon: PlayCircle,
    color: "from-purple-400 to-pink-500",
    description: "Multiple live edit tutorials for a wide range of videos + a library consisting of 100+ hours of footage. Directly link these edits in your portfolio, free to share!",
    details: "Practice material: vlogs, advertisements, podcasts, short form & more. Get feedback and inspiration from the community & Jacob himself!",
    comingSoon: false
  },
  {
    title: "Asset Library",
    icon: FolderOpen,
    color: "from-orange-400 to-red-500",
    description: "Jacob's Personal Asset Library he literally uses to edit his own videos.",
    details: "On top of that, I provide extra premium stock and assets to elevate your projects!",
    comingSoon: false
  },
  {
    title: "Client Engine",
    icon: Briefcase,
    color: "from-emerald-400 to-teal-500",
    description: "Full client acquisition guide. 4+ years of sales knowledge combined into 1 module. Learn how to monetize your skills by finding remote clients and build on your own brand.",
    details: "Just copy what I did and benefit! Value: $2500",
    comingSoon: false
  },
  {
    title: "Digital Nomad Coaching",
    icon: Lightbulb,
    color: "from-yellow-400 to-amber-500",
    description: "Tag along in my life as a full-time traveler and video editor.",
    details: "How to keep up a routine, how to save money while traveling, how I plan my trips & more!",
    comingSoon: true
  }
];

function AnimatedIcon({ icon: Icon, color }: { icon: LucideIcon; color: string }) {
  return (
    <div className="relative w-24 h-24 animate-float-slow" 
         style={{ animationDuration: '20s' }}>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-2xl opacity-50 animate-pulse-glow`}
           style={{ animationDuration: '3s' }} />
      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${color} rounded-3xl border border-white/20`}
           style={{ 
             filter: 'drop-shadow(0 15px 40px rgba(0, 217, 255, 0.4))'
           }}>
        <Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section className="py-16 lg:py-20 bg-background section-pattern relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 text-bright-white">
            Your Journey to Freedom –{" "}
            <span className="relative inline-block pb-3">
              <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                6 Components
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-4" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M6 2 Q40 14 80 10 T154 8" stroke="url(#gradient3)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn at your own pace with our clear, structured approach
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <Card 
              key={index}
              className={`p-6 backdrop-blur-md bg-card/50 border-card-border card-3d relative overflow-hidden group ${
                component.comingSoon ? 'border-dashed border-2 border-yellow-400/50' : ''
              }`}
              data-testid={`component-${index}`}
            >
              {/* Coming Soon overlay */}
              {component.comingSoon && (
                <div className="absolute top-3 right-3 z-20">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold animate-pulse">
                    Coming Soon
                  </Badge>
                </div>
              )}
              
              {/* Animated icon background */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${component.comingSoon ? 'opacity-10' : 'opacity-15'}`}>
                <AnimatedIcon icon={component.icon} color={component.color} />
              </div>
              
              <div className={`relative z-10 space-y-3 ${component.comingSoon ? 'opacity-80' : ''}`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${component.color} bg-opacity-20`}>
                  <component.icon className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white tracking-wider uppercase">Component {index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-bright-white">{component.title}</h3>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {component.description}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  {component.details}
                </p>
              </div>
            </Card>
          ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
