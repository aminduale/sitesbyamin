import React from 'react';
import { Building2, Dumbbell, Home, Building, Palette, Code, Rocket, HeartHandshake } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Hotels & Resorts',
      description: 'Showcase your luxury accommodations with an elegant website design.',
      icon: Building2,
      items: [
        {
          title: 'Luxury Hotels',
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          title: 'Beach Resorts',
          image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg'
        },
        {
          title: 'Boutique Hotels',
          image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'
        }
      ]
    },
    {
      name: 'Fitness & Gym',
      description: 'Motivate and attract clients with an energetic, dynamic website.',
      icon: Dumbbell,
      items: [
        {
          title: 'Modern Gym',
          image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg'
        },
        {
          title: 'Yoga Studio',
          image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg'
        },
        {
          title: 'CrossFit Box',
          image: 'https://images.pexels.com/photos/28080/pexels-photo.jpg'
        }
      ]
    },
    {
      name: 'Real Estate',
      description: 'Showcase properties with stunning galleries and virtual tours.',
      icon: Home,
      items: [
        {
          title: 'Luxury Homes',
          image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
        },
        {
          title: 'Modern Apartments',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
        },
        {
          title: 'Commercial Spaces',
          image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg'
        }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#3B82F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Specialized Website Solutions
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Beautiful, responsive websites tailored to your industry
          </p>
        </div>
        <div className="mt-20 space-y-20">
          {features.map((feature, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center space-x-4">
                <feature.icon className="h-8 w-8 text-white" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{feature.name}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {feature.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="relative group bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;