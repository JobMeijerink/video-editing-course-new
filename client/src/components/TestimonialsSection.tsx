import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import student1 from "@assets/generated_images/Student_testimonial_photo_1_28bc9c86.png";
import student2 from "@assets/generated_images/Student_testimonial_photo_2_c4d775c2.png";
import student3 from "@assets/generated_images/Student_testimonial_photo_3_bdfb6a36.png";
import student4 from "@assets/generated_images/Student_testimonial_photo_4_30f2df6c.png";
import student5 from "@assets/generated_images/Student_testimonial_photo_5_7c28999e.png";
import student6 from "@assets/generated_images/Student_testimonial_photo_6_670b6932.png";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Chiang Mai, Thailand",
    image: student1,
    quote: "I went from stuck in Ohio to editing full-time from Thailand in just 6 weeks. This course changed everything.",
    result: "First $2K/month client in 6 weeks"
  },
  {
    name: "Marcus Rodriguez",
    location: "Lisbon, Portugal",
    image: student2,
    quote: "Zero video skills to $3K/month in recurring clients. The step-by-step approach made it so easy.",
    result: "$3K/month from 3 clients"
  },
  {
    name: "Emily Watson",
    location: "Bali, Indonesia",
    image: student3,
    quote: "Corporate burnout to working beachside in 4 months. This taught me the business side too.",
    result: "Quit corporate job in 4 months"
  },
  {
    name: "David Kim",
    location: "Mexico City, Mexico",
    image: student4,
    quote: "I was skeptical, but the client acquisition module alone was worth 10x. Now I'm fully booked.",
    result: "Fully booked within 3 months"
  },
  {
    name: "Jessica Morales",
    location: "Barcelona, Spain",
    image: student5,
    quote: "As a single mom, I needed flexibility. Now I earn more than my 9-5 on my own schedule.",
    result: "Earning more than previous job"
  },
  {
    name: "Alex Turner",
    location: "Remote Worldwide",
    image: student6,
    quote: "I've worked from 12 countries this year. The freedom is incredible and the skills are real.",
    result: "Worked from 12 countries"
  }
];

export default function TestimonialsSection() {
  const doubledTestimonials = [...testimonials, ...testimonials];
  
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-2/20 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
            </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-bright-white">
            Real Students, Real{" "}
            <span className="relative inline-block pb-3">
              <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                Freedom
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-4" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M6 2 Q30 14 60 10 T114 8" stroke="url(#gradient4)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* First Row - Scrolling Right */}
      <div className="relative mb-8">
        <div className="flex gap-6 animate-scroll-right">
          {doubledTestimonials.map((testimonial, index) => (
            <Card 
              key={`right-${index}`}
              className="flex-shrink-0 w-[400px] p-6 border-card-border transition-all duration-300"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-chart-4 text-chart-4" />
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/30 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="mt-3 inline-block px-3 py-1 rounded-full bg-chart-4/10 border border-chart-4/20">
                <p className="text-xs font-semibold text-chart-4">{testimonial.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Second Row - Scrolling Left */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll-left">
          {doubledTestimonials.map((testimonial, index) => (
            <Card 
              key={`left-${index}`}
              className="flex-shrink-0 w-[400px] p-6 border-card-border transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-chart-4 text-chart-4" />
                ))}
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/30 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="mt-3 inline-block px-3 py-1 rounded-full bg-chart-4/10 border border-chart-4/20">
                <p className="text-xs font-semibold text-chart-4">{testimonial.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
