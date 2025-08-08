
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Developer",
      avatar: "SJ",
      rating: 5,
      text: "Contract Guard saved me from a $5,000 scam. The AI detected payment terms that were completely one-sided. I can't recommend this enough!",
      highlight: "Saved $5,000 from scam"
    },
    {
      name: "Mike Chen",
      role: "Graphic Designer",
      avatar: "MC",
      rating: 5,
      text: "The clause analysis is incredible. It explained complex legal terms in plain English and helped me negotiate better rates with clients.",
      highlight: "Better contract negotiations"
    },
    {
      name: "Emily Rodriguez",
      role: "Content Writer",
      avatar: "ER",
      rating: 5,
      text: "As a new freelancer, I was terrified of contracts. Contract Guard gives me confidence and helps me spot red flags I would never have noticed.",
      highlight: "Increased confidence"
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      avatar: "DK",
      rating: 5,
      text: "The speed is amazing. I can analyze a contract in seconds instead of spending hours trying to understand legal jargon. It's a game-changer.",
      highlight: "Instant analysis"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Consultant",
      avatar: "LT",
      rating: 5,
      text: "I've been using Contract Guard for 6 months. It's helped me avoid 3 potential scams and negotiate better terms on all my contracts.",
      highlight: "Avoided 3 scams"
    },
    {
      name: "Alex Martinez",
      role: "Video Editor",
      avatar: "AM",
      rating: 5,
      text: "The Pro plan is worth every penny. The detailed reports and recommendations have made me a much smarter negotiator.",
      highlight: "Smarter negotiations"
    },
    {
      name: "Rachel Green",
      role: "UX Designer",
      avatar: "RG",
      rating: 5,
      text: "Contract Guard caught intellectual property clauses that would have given my client ownership of all my work. Dodged a huge bullet!",
      highlight: "Protected IP rights"
    },
    {
      name: "Tom Wilson",
      role: "Copywriter",
      avatar: "TW",
      rating: 5,
      text: "The customer support is fantastic. They helped me understand a complex contract and even provided negotiation tips. Highly recommended!",
      highlight: "Excellent support"
    },
    {
      name: "Maya Patel",
      role: "Data Analyst",
      avatar: "MP",
      rating: 5,
      text: "I run a small freelance team and the Business plan is perfect. We can collaborate on contract reviews and everyone feels more secure.",
      highlight: "Team collaboration"
    }
  ];

  const averageRating = 5.0;
  const totalReviews = testimonials.length;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What Freelancers Say About <span className="text-blue-600">Contract Guard</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of freelancers who trust Contract Guard to protect their business
            </p>
            
            <div className="flex items-center justify-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-gray-900">{averageRating}/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{totalReviews}+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Quote className="w-8 h-8 text-blue-600 mb-6 opacity-80" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="bg-blue-50 px-4 py-2 rounded-lg mb-6">
                  <div className="text-sm text-blue-700 font-medium">{testimonial.highlight}</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Freelancers Worldwide</h2>
            <p className="text-xl text-gray-600">Real results from real users</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.3M</div>
              <div className="text-gray-600">Protected from Scams</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Contracts Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24hrs</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start protecting your freelance business today with our AI-powered contract analysis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
            >
              Try Free Now
            </a>
            <a
              href="/pricing"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors duration-300 font-semibold text-lg border border-blue-500"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
