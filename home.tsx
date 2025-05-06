import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero-section";
import StatsCounter from "@/components/stats-counter";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import ProcessSection from "@/components/process-section";
import AboutSection from "@/components/about-section";
import CTASection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsCounter />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ProcessSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
