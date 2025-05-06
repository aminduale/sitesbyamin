import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
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
    <header className={cn(
      "fixed w-full bg-primary/95 backdrop-blur-sm z-50 transition-all duration-300",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center"
          >
            <span className="text-accent font-montserrat font-bold text-2xl md:text-3xl">
              Sites<span className="text-white">ByAmin</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-white/80 hover:text-white font-medium transition"
            >
              Services
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
              className="text-white/80 hover:text-white font-medium transition"
            >
              Portfolio
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-white/80 hover:text-white font-medium transition"
            >
              About
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="bg-accent hover:bg-accent/90 text-primary font-bold px-5 py-2 rounded-md transition"
            >
              Contact
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn("md:hidden bg-primary-dark", isMenuOpen ? "block" : "hidden")}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 pb-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-white/80 hover:text-white font-medium transition py-2"
            >
              Services
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
              className="text-white/80 hover:text-white font-medium transition py-2"
            >
              Portfolio
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-white/80 hover:text-white font-medium transition py-2"
            >
              About
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="bg-accent hover:bg-accent/90 text-primary font-bold px-5 py-2 rounded-md transition w-full text-center"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
