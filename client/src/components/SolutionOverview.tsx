import { Video, Users, Palette, Briefcase, TrendingUp, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function SolutionOverview() {
  return (
    <section className="py-16 lg:py-20 bg-background section-pattern relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-bright-white">
            The{" "}
            <span className="relative inline-block pb-3">
              <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                Freedom Formula
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-4" viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M10 2 Q50 14 100 10 T190 8" stroke="url(#gradient6)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
:<br />
            <span className="text-bright-white">
              Master Video Editing + Find Remote Clients
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Part 1 - Video Editing Mastery */}
          <Card className="p-6 lg:p-8 backdrop-blur-md bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-bright-white">Part 1: Video Editing Mastery</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3" data-testid="item-editing-skill-1">
                  <Palette className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Industry-Standard Software</p>
                    <p className="text-muted-foreground">Master Premiere Pro, DaVinci Resolve, and Final Cut Pro</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3" data-testid="item-editing-skill-2">
                  <Palette className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Core Techniques</p>
                    <p className="text-muted-foreground">Cutting, color correction, transitions, and effects that wow</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3" data-testid="item-editing-skill-3">
                  <Palette className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Portfolio Building</p>
                    <p className="text-muted-foreground">Create a portfolio that gets you hired by top clients</p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          {/* Part 2 - Client Acquisition */}
          <Card className="p-6 lg:p-8 backdrop-blur-md bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-accent/20 border border-accent/30">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-bright-white">Part 2: Client Acquisition</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3" data-testid="item-client-skill-1">
                  <Globe className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Where to Find Remote Clients</p>
                    <p className="text-muted-foreground">The exact platforms and strategies that work</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3" data-testid="item-client-skill-2">
                  <Briefcase className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Pitch & Close Deals</p>
                    <p className="text-muted-foreground">Proven templates and strategies to win high-paying projects</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3" data-testid="item-client-skill-3">
                  <TrendingUp className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">Scale Your Income</p>
                    <p className="text-muted-foreground">Build recurring clients and increase rates over time</p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
