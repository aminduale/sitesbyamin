import { Link } from 'wouter';
import { formatBusinessHours } from '@/lib/utils';

export default function Footer() {
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
    <footer className="bg-primary-dark py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hero');
                }}
                className="flex items-center"
              >
                <span className="text-accent font-montserrat font-bold text-2xl">
                  Sites<span className="text-white">ByAmin</span>
                </span>
              </a>
            </div>
            <p className="text-white/70 mb-6">
              Creating beautiful, functional websites that elevate your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-accent transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  Custom Web Design
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  Responsive Design
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  E-Commerce Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('hero');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('portfolio');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="text-white/70 hover:text-accent transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-accent mr-2"></i>
                <a href="mailto:sitesbyamin@gmail.com" className="text-white/70 hover:text-accent transition">
                  sitesbyamin@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone text-accent mr-2"></i>
                <a href="tel:+254759236716" className="text-white/70 hover:text-accent transition">
                  +254 759 236 716
                </a>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-location-dot text-accent mr-2"></i>
                <span className="text-white/70">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-clock text-accent mr-2"></i>
                <span className="text-white/70">
                  {formatBusinessHours("10am", "6pm", "Mon-Fri")}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SitesByAmin. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-accent text-sm transition">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-accent text-sm transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
