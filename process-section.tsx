interface ProcessStep {
    number: number;
    title: string;
    description: string;
  }
  
  export default function ProcessSection() {
    const steps: ProcessStep[] = [
      {
        number: 1,
        title: "Discovery",
        description: "We learn about your business, goals, and target audience to create a tailored strategy."
      },
      {
        number: 2,
        title: "Design",
        description: "We create wireframes and mockups that align with your brand identity and user needs."
      },
      {
        number: 3,
        title: "Development",
        description: "We build your site with clean code, ensuring it's responsive, fast, and SEO-friendly."
      },
      {
        number: 4,
        title: "Launch & Support",
        description: "We deploy your site and provide training and ongoing support to ensure your success."
      }
    ];
  
    return (
      <section className="py-16 md:py-24 bg-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Our Design Process</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-white/80">How we transform your ideas into stunning websites.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-primary/30 rounded-xl p-6 border border-secondary/20 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="font-montserrat font-bold text-xl mt-4 mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  