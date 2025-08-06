
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Rural Montana",
      rating: 5,
      text: "Finally, reliable internet in the middle of nowhere! SkyLink has been a game-changer for our family farm business.",
      avatar: "SJ"
    },
    {
      name: "Mike Rodriguez",
      location: "Texas Ranch",
      rating: 5,
      text: "Switched from unreliable DSL to SkyLink. Best decision ever! Kids can finally do their homework online.",
      avatar: "MR"
    },
    {
      name: "Emily Chen",
      location: "Remote Oregon",
      rating: 5,
      text: "As a remote worker, SkyLink's consistent speeds have made working from our mountain cabin possible.",
      avatar: "EC"
    },
    {
      name: "Robert Davis",
      location: "Rural Alabama",
      rating: 5,
      text: "Installation was quick and professional. Haven't had a single outage in 6 months. Highly recommend!",
      avatar: "RD"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've made the switch to reliable satellite internet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-blue-600 mb-6 opacity-80" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 font-medium leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
