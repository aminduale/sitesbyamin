import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await apiRequest('POST', '/api/contact', formValues);
      
      if (res.ok) {
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      value: "sitesbyamin@gmail.com",
      isLink: true,
      href: "mailto:sitesbyamin@gmail.com"
    },
    {
      icon: "fa-solid fa-phone",
      title: "Phone",
      value: "+254 759 236 716",
      isLink: true,
      href: "tel:+254759236716"
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Location",
      value: "Nairobi, Kenya",
      isLink: false
    },
    {
      icon: "fa-solid fa-clock",
      title: "Business Hours",
      value: "Monday to Friday, 10am to 6pm",
      isLink: false
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-white/80">Ready to discuss your project? Reach out to us today.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-primary/30 rounded-xl p-8 border border-secondary/20">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Get In Touch</h3>
              
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <i className={`${item.icon} text-accent text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    {item.isLink ? (
                      <a href={item.href} className="text-white/80 hover:text-accent transition">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/80">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-primary/30 rounded-xl p-8 border border-secondary/20">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required
                    className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Your email" 
                    required
                    className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formValues.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required
                  className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  value={formValues.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Your message" 
                  required
                  className="w-full px-4 py-3 bg-dark border border-secondary/20 rounded-lg focus:outline-none focus:border-accent"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                variant="accent"
                className="w-full py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
