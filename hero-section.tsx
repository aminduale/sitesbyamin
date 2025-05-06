import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
    <section id="hero" className="bg-gradient-purple min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-shadow">
              Transforming <span className="text-accent">Ideas</span> Into Digital Excellence
            </h1>
            <p className="mt-6 text-white/90 text-lg md:text-xl max-w-xl">
              Creating beautiful, functional websites that elevate your business. From cafes to fitness centers to real estate agencies - we bring your vision to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
              >
                View Our Work
              </Button>
              <Button 
                variant="outlineWhite" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative animate-float">
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Responsive website designs on multiple devices" 
              className="rounded-xl shadow-lg mx-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-primary rounded-lg py-2 px-4 shadow-lg">
              <p className="font-montserrat font-bold">100+ Websites Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
