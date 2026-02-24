import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ExpectedOutcomes } from "@/components/sections/ExpectedOutcomes";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { About } from "@/components/sections/About";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyChoose />
        <HowItWorks />
        <ExpectedOutcomes />
        <ServicesSection />
        <CredentialsSection />
        <About />
        <TestimonialsSection />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
