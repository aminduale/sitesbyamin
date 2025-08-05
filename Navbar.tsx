import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#3B82F6] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-xl font-bold text-white hover:text-white/90 transition-colors"
              >
                SitesByAmin
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#portfolio" className="text-white/80 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
                Portfolio
              </a>
              <a href="#testimonials" className="text-white/80 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-white/80 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium">
              Get Started
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#portfolio"
              className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="mt-4 px-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;