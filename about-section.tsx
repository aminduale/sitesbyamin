interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export default function AboutSection() {
  const values: ValueItem[] = [
    {
      icon: "fa-solid fa-lightbulb",
      title: "Innovation",
      description: "We stay at the forefront of web design trends and technologies to deliver cutting-edge solutions."
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision is reflected in every aspect of their website."
    },
    {
      icon: "fa-solid fa-gem",
      title: "Quality",
      description: "We are committed to excellence in every project, ensuring top-notch design and development."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-primary to-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">About SitesByAmin</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <p className="text-white/80 mb-6">
              We are a passionate team of web designers and developers based in Nairobi, Kenya. With over 5 years of experience, we've helped businesses of all sizes establish a strong online presence through beautiful, functional websites.
            </p>
            <p className="text-white/80 mb-6">
              Our mission is to deliver web solutions that not only look great but also drive real business results. We combine aesthetic design with technical expertise to create websites that stand out in today's competitive digital landscape.
            </p>
            <p className="text-white/80 mb-6">
              We believe in close collaboration with our clients, ensuring that every project reflects their unique brand identity and meets their specific business needs.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <i className="fa-solid fa-location-dot text-accent text-xl mr-2"></i>
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-clock text-accent text-xl mr-2"></i>
                <span>Mon-Fri, 10am-6pm</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="SitesByAmin team working on web design projects" 
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-primary rounded-lg py-2 px-4 shadow-lg">
              <p className="font-montserrat font-bold">5+ Years Experience</p>
            </div>
          </div>
        </div>
        
        {/* Team Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {values.map((value, index) => (
            <div key={index} className="bg-primary/30 rounded-xl p-6 border border-secondary/20">
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <i className={`${value.icon} text-accent text-2xl`}></i>
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-3">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
