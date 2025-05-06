import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-6">
          Ready to Transform Your Online Presence?
        </h2>
        <p className="text-primary/80 text-lg max-w-2xl mx-auto mb-8">
          Let's create a website that perfectly represents your brand and helps you achieve your business goals.
        </p>
        <Button 
          className="bg-primary hover:bg-primary-light text-white text-lg"
          size="lg"
          onClick={() => scrollToSection('contact')}
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
}
