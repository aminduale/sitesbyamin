import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  rating: number;
  quote: string;
  author: {
    initials: string;
    name: string;
    title: string;
  };
}

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      quote: "Working with SitesByAmin transformed our cafe's online presence. The website perfectly captures our atmosphere and has significantly increased our reservations!",
      author: {
        initials: "SC",
        name: "Sarah Chen",
        title: "Owner, Aroma Café"
      }
    },
    {
      rating: 5,
      quote: "Our fitness center needed a website that could handle class bookings and membership management. SitesByAmin delivered beyond our expectations!",
      author: {
        initials: "JM",
        name: "James Miller",
        title: "Director, PowerFit Gym"
      }
    },
    {
      rating: 4.5,
      quote: "The property search functionality on our new real estate website has made it so much easier for clients to find what they're looking for. Highly recommend!",
      author: {
        initials: "AJ",
        name: "Amanda Johnson",
        title: "Broker, Prime Properties"
      }
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fa-solid fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fa-solid fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-white/80">Hear from businesses that have transformed their online presence with our services.</p>
        </div>
        
        <div className="relative testimonial-slider">
          <div className="overflow-x-auto hide-scrollbar pb-8">
            <div className="flex gap-6 snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={cn(
                    "min-w-full md:min-w-[400px] snap-center bg-dark/50 rounded-xl p-8 border border-secondary/20",
                    {
                      "opacity-100": activeSlide === index,
                      "opacity-60": activeSlide !== index
                    }
                  )}
                  style={{
                    scrollSnapAlign: "center"
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-accent">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="italic text-white/90 font-playfair text-lg mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mr-4">
                      <span className="font-bold text-lg">{testimonial.author.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author.name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.author.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleSlideChange(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all", 
                  activeSlide === index ? "bg-accent" : "bg-white/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
