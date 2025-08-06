
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialsSection />
      
      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future of Internet?
              </h2>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Join thousands of satisfied customers who've made the switch to reliable, 
                high-speed satellite internet. Get connected in as little as 24 hours!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a 
                  href="tel:1-800-555-0123" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>📞 Call Now: 1-800-555-0123</span>
                </a>
                <Link 
                  to="/contact" 
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-bold border border-white/30 hover:bg-white/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-2">30-Day Guarantee</h3>
                  <p className="text-blue-200 text-sm">Risk-free trial period</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-2">24/7 Support</h3>
                  <p className="text-blue-200 text-sm">Always here to help</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-2">Best Value</h3>
                  <p className="text-blue-200 text-sm">Competitive pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo & About */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SkyLink</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of high-speed satellite internet services across the United States. 
                Connecting communities and empowering businesses with reliable, fast internet access.
              </p>
              <div className="flex space-x-4">
                <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300">
                  📞 1-800-555-0123
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
                <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold mb-6">Legal & Support</h3>
              <div className="space-y-3">
                <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/shipping" className="block text-gray-300 hover:text-white transition-colors">Shipping Info</Link>
                <Link to="/returns" className="block text-gray-300 hover:text-white transition-colors">Returns & Refunds</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-12 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} SkyLink Satellite Internet. All rights reserved. 
              <span className="block sm:inline sm:ml-4 mt-2 sm:mt-0">
                Connecting America, One Home at a Time.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
