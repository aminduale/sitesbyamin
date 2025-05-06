interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function ServiceItem({ icon, title, description, features }: ServiceItemProps) {
  return (
    <div className="bg-primary/30 rounded-xl p-6 border border-secondary/20 card-hover transition duration-300">
      <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
        <i className={`${icon} text-accent text-2xl`}></i>
      </div>
      <h3 className="font-montserrat font-bold text-xl mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <ul className="space-y-2 text-white/80">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <i className="fa-solid fa-check text-accent mr-2"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  const services: ServiceItemProps[] = [
    {
      icon: "fa-solid fa-paintbrush",
      title: "Custom Web Design",
      description: "Unique, tailored websites that perfectly represent your brand identity and business goals.",
      features: ["Responsive for all devices", "User-friendly navigation", "Brand-aligned visuals"]
    },
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description: "Clean, efficient code that ensures your website performs flawlessly and loads quickly.",
      features: ["Modern frameworks", "SEO-friendly structure", "Fast loading speeds"]
    },
    {
      icon: "fa-solid fa-mobile-screen",
      title: "Responsive Design",
      description: "Websites that look and function perfectly on all devices, from desktops to smartphones.",
      features: ["Mobile-first approach", "Cross-browser compatibility", "Adaptive layouts"]
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      title: "SEO Optimization",
      description: "Ensure your website ranks well on search engines and attracts the right visitors.",
      features: ["Keyword research", "Performance optimization", "Meta data optimization"]
    },
    {
      icon: "fa-solid fa-cart-shopping",
      title: "E-Commerce Solutions",
      description: "Fully functional online stores that provide seamless shopping experiences.",
      features: ["Secure payment gateways", "Inventory management", "Customer accounts"]
    },
    {
      icon: "fa-solid fa-gear",
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing at its best with our maintenance services.",
      features: ["Regular updates", "Security monitoring", "Performance optimization"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Our Web Design Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-white/80">We offer comprehensive web solutions tailored to your specific business needs.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
