import HeroSection from "@/components/HeroSection";
import TransformationStory from "@/components/TransformationStory";
import PainPoints from "@/components/PainPoints";
import TimelineSection from "@/components/TimelineSection";
import TargetAudience from "@/components/TargetAudience";
import InstructorCredibility from "@/components/InstructorCredibility";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalConversion from "@/components/FinalConversion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TransformationStory />
      <PainPoints />
      <TimelineSection />
      <TargetAudience />
      <InstructorCredibility />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalConversion />
      <Footer />
    </div>
  );
}
