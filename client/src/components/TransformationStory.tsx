import instructorImage from "@assets/generated_images/Instructor_professional_headshot_0cf62c8c.png";
import ScrollReveal from "./ScrollReveal";

import DBBAC514_1776_49DC_82A0_D501867F6B01 from "@assets/DBBAC514-1776-49DC-82A0-D501867F6B01.jpeg";

export default function TransformationStory() {
  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-background section-pattern relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-10" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, transparent 100%)' }} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0) 0%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left" className="order-2 lg:order-1 flex flex-col items-center space-y-6">
            <div className="relative pb-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-chart-2 rounded-full opacity-20 blur-2xl" />
              <img 
                src={DBBAC514_1776_49DC_82A0_D501867F6B01}
                alt="Instructor"
                className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-primary/50 object-cover mx-auto lg:ml-[55px] lg:mr-[55px] mt-[1px] mb-[1px]"
                data-testid="img-instructor"
              />
              
              {/* Name label at bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-700 to-amber-500 border border-amber-600">
                  <p className="text-base lg:text-lg whitespace-nowrap tracking-wide font-semibold text-white">
                    Jacob Meijerink
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl p-6 border border-primary/20 bg-primary/5 backdrop-blur-sm max-w-md relative z-10">
              <p className="text-[15px] md:text-lg italic text-foreground/90 leading-relaxed">''If I could do it without anyone's help,
                you can 100% do it with mine.''</p>
            </div>
          </ScrollReveal>

          {/* Content side */}
          <ScrollReveal direction="right" className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-bright-white">
              <span className="whitespace-nowrap">Why I Built This Course:</span>{" "}
              <span className="relative inline-block pb-3">
                <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
                  From Stuck to Free
                </span>
                <svg className="absolute -bottom-1 left-0 w-full h-4" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M8 2 Q40 14 80 10 T152 8" stroke="url(#gradient5)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00d9ff" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            
            <div className="space-y-4 text-[15px] md:text-lg leading-relaxed text-foreground/80">
              <p>4 years ago, I graduated from university, however it didn't convince me to enter the regular job market. I wanted to learn a valuable + remote skill that allowed me to live on my own terms.</p>
              
              <p>Then I thought about video editing. At first, it was just a hobby, but because of the rising popularity of content creation, I realized earning a serious income with it was more than realistic.</p>
              
              <p>After some trial and error, I landed my first remote client. That's when I left everything behind and started my journey in South-America, all while editing videos from my laptop. Fast forward 4 years later, I'm editing videos from wherever I want.</p>
              
              <p>
                <span className="text-primary font-semibold">The breakthrough?</span> Learning 
                not just how to edit, but sharing the whole formula I used from zero to $5000 - $15000 per month.
              </p>
              
              <p className="text-xl font-semibold text-foreground">
                Your journey to freedom starts here. Let me show you the way.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
