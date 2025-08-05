import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:sitesbyamin@gmail.com?subject=Website Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="bg-[#3B82F6] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SitesByAmin</h3>
            <p className="text-white/80">
              Creating beautiful, responsive websites for businesses across Kenya and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-white" />
                <a href="mailto:sitesbyamin@gmail.com" className="text-white/80 hover:text-white">
                  sitesbyamin@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-white" />
                <a href="tel:+254759236716" className="text-white/80 hover:text-white">
                  +254 759 236 716
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-white" />
                <span className="text-white/80">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 mr-2 text-white" />
                <a href="https://instagram.com/sitesbyamin" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                  @sitesbyamin
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 bg-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-3 py-2 bg-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-center text-white/80">
            © {new Date().getFullYear()} SitesByAmin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;