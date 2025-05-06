export default function StatsCounter() {
    const stats = [
      { value: "100+", label: "Websites Delivered" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "5+", label: "Years Experience" },
      { value: "24", label: "Industry Awards" },
    ];
  
    return (
      <section className="bg-primary-dark py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-secondary/20 bg-primary/50">
                <div className="font-montserrat font-bold text-3xl md:text-4xl text-accent">{stat.value}</div>
                <div className="mt-2 text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  