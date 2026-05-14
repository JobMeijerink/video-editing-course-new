import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Globe, Laptop, Camera } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_laptop_beach_277c56e1.png";

export default function HeroSection() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
    console.log('Scrolled to How It Works section');
  };

  const handleStartJourney = () => {
    console.log('Start Journey CTA clicked');
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419] animate-gradient" />
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-30 lg:opacity-20">
        <img 
          src={heroImage} 
          alt="Video editing lifestyle" 
          className="w-full h-full object-cover object-[85%_50%] lg:object-center"
        />
        {/* Smooth blur edges for mobile */}
        <div className="absolute inset-0 lg:hidden" style={{
          background: `
            linear-gradient(to bottom, transparent 60%, rgba(15, 20, 25, 0.7) 85%, rgba(15, 20, 25, 1) 100%),
            linear-gradient(to top, transparent 85%, rgba(15, 20, 25, 0.5) 100%),
            linear-gradient(to right, rgba(15, 20, 25, 0.4) 0%, transparent 15%, transparent 85%, rgba(15, 20, 25, 0.4) 100%)
          `
        }} />
      </div>
      {/* Floating icons with 3D effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 animate-float-slow">
          <Globe className="w-12 h-12 text-primary/20" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))' }} />
        </div>
        <div className="absolute top-40 right-20 animate-float-slow" style={{ animationDelay: '5s' }}>
          <Laptop className="w-14 h-14 text-accent/20" style={{ filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))' }} />
        </div>
        <div className="absolute bottom-40 left-20 animate-float-slow" style={{ animationDelay: '10s' }}>
          <Camera className="w-13 h-13 text-chart-2/20" style={{ filter: 'drop-shadow(0 0 20px rgba(255, 100, 50, 0.3))' }} />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-slow" style={{ animationDelay: '7s' }}>
          <Play className="w-12 h-12 text-primary/20" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))' }} />
        </div>
        
        {/* Animated arrows */}
        <div className="absolute top-1/2 left-8 flex flex-col gap-2 opacity-30">
          <span className="text-4xl font-bold text-primary animate-arrow">&gt;&gt;</span>
        </div>
        <div className="absolute top-1/3 right-8 flex flex-col gap-2 opacity-30" style={{ animationDelay: '1s' }}>
          <span className="text-4xl font-bold text-accent animate-arrow">&gt;&gt;</span>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="md:text-5xl lg:text-6xl font-bold mb-6 text-[30px]">
          Your Roadmap to{" "}
          <span className="relative inline-block pb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-chart-2 bg-clip-text text-transparent">
              Freedom
            </span>
            <svg className="absolute bottom-0 left-0 w-full h-4" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M6 2 Q30 14 60 10 T114 8" stroke="url(#gradient-hero)" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d9ff" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <br />
          Through Video Editing
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-4 max-w-4xl mx-auto">Learn the skills that let you work from anywhere in the world—<br className="hidden sm:inline" />no experience required.</p>
        
        <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-12 max-w-3xl mx-auto">Master professional video editing and discover how to find remote clients 
        who pay you to live life on your terms.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            size="lg" 
            className="text-sm sm:text-lg px-5 sm:px-8 py-5 sm:py-6 rounded-full font-bold bg-gradient-to-r from-chart-2 to-destructive hover:opacity-90 transition-opacity border-0"
            onClick={handleStartJourney}
            data-testid="button-start-journey"
          >
            Start Your Journey to Freedom
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-sm sm:text-lg px-5 sm:px-8 py-5 sm:py-6 rounded-full font-semibold backdrop-blur-md bg-background/20 border-2 hover:bg-background/30"
            onClick={scrollToHowItWorks}
            data-testid="button-see-how-it-works"
          >
            See How It Works
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
      {/* Smooth gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 lg:h-48 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-20" />
    </section>
  );
}
