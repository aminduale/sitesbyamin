import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      content: 'This platform has transformed how we approach digital solutions. The results have been nothing short of extraordinary.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      content: 'The tools and support provided have significantly accelerated our development process. Highly recommended!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      content: 'Our team productivity has increased dramatically. The intuitive interface makes complex tasks simple.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Innovators Worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden p-6 transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-indigo-600">{testimonial.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-500">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;