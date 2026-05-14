import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "Do I need any prior experience with video editing?",
    answer: "Not at all! This course is designed for complete beginners. We start from the absolute basics and build up your skills systematically. Many of our most successful students had never opened editing software before taking this course."
  },
  {
    question: "What equipment do I need to get started?",
    answer: "You'll need a computer (Mac or PC) with at least 16GB of RAM (less is not impossible, but not advisable) and editing software (Adobe Premiere Pro). We'll guide you through setting this all up in the first module."
  },
  {
    question: "How long does it take to start earning money?",
    answer: "Most students land their first paid client inbetween 6-10 weeks if they follow the course consistently. However, the timeline varies based on how much time you dedicate to learning and applying the client acquisition strategies we teach."
  },
  {
    question: "Can I really work from anywhere?",
    answer: "Yes! Video editing is 100% location-independent. As long as you have a laptop and internet connection, you can work from anywhere in the world. Many of our students are currently working from different countries while traveling."
  },
  {
    question: "What if I don't have time to complete the course quickly?",
    answer: "The course is self-paced. Whether you want to complete it in a few weeks or spread it over several months, you can learn at your own speed."
  },
  {
    question: "How is this different from YouTube tutorials?",
    answer: "YouTube tutorials are great for learning specific techniques, but they don't give you a complete system, nor are sustainable from a motivation perspective. This course provides a structured path from beginner to paid professional, including the business side that most free content ignores—how to find clients, price your services, and build a sustainable income. All surrounded by a supportive and community and a bunch of extra assets and templates that you wouldn't have access to otherwise"
  },
  {
    question: "What kind of income can I expect?",
    answer: "Beginner video editors typically charge $500-$1,000 per project. As you gain experience and build your portfolio, rates of $2,000-$5,000+ per project are common. Many of our students earn $3,000-$10,000+ per month working remotely."
  },
  {
    question: "Is there support if I get stuck?",
    answer: "Absolutely! Paid plans include chat or VIP support. Premium members get access to a live coaching call and Chat support. VIP members get access to a private WhatsApp group, 1-on 1 coaching, and direct feedback on their work. This way you'll never be left struggling alone."
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "The course is designed for people of all technical skill levels. Learning video editing is not complicated. We break everything down into simple, easy-to-follow steps. If you can use basic computer functions like opening files and clicking buttons, you can learn video editing."
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 14-day money-back guarantee. If you don't feel confident in your editing adventure, we'll refund your investment in full. No questions asked."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-chart-2/20 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl font-bold text-primary/40 animate-arrow">&gt;&gt;</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-bright-white">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="border border-border rounded-lg px-6"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="hover:no-underline py-6 text-left">
                <h3 className="text-xl font-semibold pr-4 text-white">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-lg text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
