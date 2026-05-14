import { Award, MapPin, Briefcase, Star } from "lucide-react";
import IMG_7598 from "@assets/IMG_7598.jpg";
import IMG_7347 from "@assets/IMG_7347.jpeg";
import IMG_beach from "@assets/B030364E-182D-4A4A-B4E3-047694392258_1765309354419.jpeg";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "4+", label: "Years Experience", icon: Award, gradient: "from-cyan-500/10 to-blue-500/10", border: "border-cyan-500/20" },
  { value: "8+", label: "Countries Worked From such as Argentina, Brazil, Spain & Italy", icon: MapPin, gradient: "from-purple-500/10 to-pink-500/10", border: "border-purple-500/20" },
  { value: "100+", label: "Projects Delivered", icon: Briefcase, gradient: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-500/20" },
  { value: "4.9", label: "Client Rating", icon: Star, gradient: "from-amber-500/10 to-yellow-500/10", border: "border-amber-500/20" }
];

export default function InstructorCredibility() {
  return (
    <section className="py-16 lg:py-20 bg-background section-pattern relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-bright-white">
              Who's Teaching You?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Image side - 3 photos stacked vertically at 55% size, centered and aligned with title */}
          <ScrollReveal direction="left" className="flex flex-col gap-16 lg:max-w-[55%] mx-auto lg:mt-20">
            {/* First image - mountains selfie */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-chart-2 rounded-3xl opacity-20 blur-2xl" />
              <img 
                src={IMG_7347}
                alt="Course instructor in mountains"
                className="relative w-full aspect-square rounded-2xl border-2 border-primary/30 object-cover object-[50%_50%]"
                data-testid="img-instructor-mountains"
              />
            </div>
            {/* Second image - laptop workspace */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-chart-2 rounded-3xl opacity-20 blur-2xl" />
              <img 
                src={IMG_7598}
                alt="Course instructor workspace"
                className="relative w-full aspect-square rounded-2xl border-2 border-primary/30 object-cover"
                data-testid="img-instructor-workspace"
              />
            </div>
            {/* Third image - beach selfie */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-chart-2 rounded-3xl opacity-20 blur-2xl" />
              <img 
                src={IMG_beach}
                alt="Course instructor at beach"
                className="relative w-full aspect-square rounded-2xl border-2 border-primary/30 object-cover object-[50%_55%]"
                data-testid="img-instructor-beach"
              />
            </div>
          </ScrollReveal>

          {/* Content side - unchanged */}
          <ScrollReveal direction="right" className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-bright-white whitespace-nowrap">Your Guide to Freedom</h3>
              <div className="p-6 rounded-xl backdrop-blur-md bg-gradient-to-r from-slate-400/5 via-amber-200/5 to-slate-300/5 border border-amber-200/10">
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4">I'm a full-time video editor who's worked with YouTubers, E-commerce brands, social media outlets and more—all while traveling the world. I've edited everything from vlogs, podcasts, short-form content, explainer videos, documentaries to social media campaigns. I've generated 500+ million views across all platforms and now make a comfortable living through my skill and portfolio.</p>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">What makes me different? I don't just teach editing—I teach you how to build a portfolio and network that gives you freedom. Because technical skills mean nothing if you can't find clients who pay well, or any clients at all. Client acquisition is a complete other side of the story. I made several mistakes along the way, and I can make sure you avoid them.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl backdrop-blur-md bg-gradient-to-r ${stat.gradient} ${stat.border} border`}
                    data-testid={`stat-${index}`}
                  >
                    <Icon className="w-8 h-8 text-primary mb-2" />
                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-xl backdrop-blur-md bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
              <p className="text-lg italic leading-relaxed">
                "My goal isn't just to teach you video editing. It's to give you the exact 
                system I used to go from broke and stuck to earning six figures while working 
                from wherever I want to be."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
