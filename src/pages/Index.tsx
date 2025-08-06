
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import PricingSection from '../components/PricingSection';
import WhyChooseSection from '../components/WhyChooseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { Phone, Globe, Star, MapPin, Shield, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PricingSection />
      <WhyChooseSection />
      <TestimonialsSection />

      {/* Coverage Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Globe className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black mb-8">
              Nationwide Satellite Coverage
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Delivering high-speed internet to every corner of America, including the most remote locations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center space-y-4">
                <MapPin className="w-12 h-12 text-blue-300" />
                <span className="text-2xl font-bold">99% Coverage</span>
                <span className="text-blue-200">Nationwide Availability</span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Star className="w-12 h-12 text-blue-300" />
                <span className="text-2xl font-bold">24/7 Service</span>
                <span className="text-blue-200">Always Connected</span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Shield className="w-12 h-12 text-blue-300" />
                <span className="text-2xl font-bold">Secure & Fast</span>
                <span className="text-blue-200">Protected Connection</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Connected?</h3>
              <p className="text-lg text-blue-100 mb-6">Join thousands of satisfied customers across all 50 states</p>
              <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                📞 Call Now: 1-800-555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">
              Ready to Experience SkyLink?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join the satellite internet revolution. Fast speeds, reliable connection, unbeatable support.
            </p>
            
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 sm:p-16 border border-white/30 shadow-2xl mb-16">
              <div className="flex items-center justify-center mb-8">
                <Phone className="w-12 h-12 text-blue-600 mr-6" />
                <a href="tel:1-800-555-0123" className="text-4xl sm:text-5xl font-black text-gray-900 hover:text-blue-600 transition-colors">
                  1-800-555-0123
                </a>
              </div>
              <p className="text-xl text-gray-600 mb-10">Call Now for Instant Activation & Special Offers</p>
              
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-transparent font-medium"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-transparent font-medium"
                  maxLength={5}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-transparent font-medium"
                />
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-16 py-5 rounded-2xl text-xl font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                🚀 Get Started Today
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-blue-600 mb-3" />
                <span className="font-bold text-gray-900">500K+ Customers</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-12 h-12 text-blue-600 mb-3" />
                <span className="font-bold text-gray-900">4.9/5 Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-blue-600 mb-3" />
                <span className="font-bold text-gray-900">99.9% Uptime</span>
              </div>
              <div className="flex flex-col items-center">
                <Building className="w-12 h-12 text-blue-600 mb-3" />
                <span className="font-bold text-gray-900">A+ BBB Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-black">SkyLink</span>
              </div>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed mb-6">
                America's trusted satellite internet provider. Connecting communities, empowering dreams.
              </p>
              <div className="flex space-x-4">
                <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300">
                  📞 Call Now
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Support</h3>
              <ul className="space-y-4">
                <li><a href="tel:1-800-555-0123" className="text-gray-300 hover:text-white transition-colors font-medium">Customer Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Technical Help</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors font-medium">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors font-medium">Terms of Service</Link></li>
                <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors font-medium">Shipping Policy</Link></li>
                <li><Link to="/returns" className="text-gray-300 hover:text-white transition-colors font-medium">Returns & Refunds</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © {new Date().getFullYear()} SkyLink Satellite Internet. All rights reserved. | Connecting America, One Home at a Time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
