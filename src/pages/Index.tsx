
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
      <div id="pricing">
        <PricingSection />
      </div>
      <TestimonialsSection />
      
      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-8">
                Ready to Experience the Future of Internet?
              </h2>
              <p className="text-2xl text-blue-200 mb-10 leading-relaxed">
                Join thousands of satisfied customers who've made the switch to reliable, 
                high-speed satellite internet. Get connected in as little as 24 hours!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                <a 
                  href="tel:1-800-555-0123" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full text-2xl font-black hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>📞 Call Now: 1-800-555-0123</span>
                </a>
                <Link 
                  to="/contact" 
                  className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-2xl font-black border border-white/30 hover:bg-white/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-3">30-Day Guarantee</h3>
                  <p className="text-blue-200">Risk-free trial period</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-3">24/7 Support</h3>
                  <p className="text-blue-200">Always here to help</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-3">Best Value</h3>
                  <p className="text-blue-200">Competitive pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900/95 backdrop-blur-xl text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo & About */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">SkyLink</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Leading provider of high-speed satellite internet services across the United States. 
                Connecting communities and empowering businesses with reliable, fast internet access.
              </p>
              <div className="flex space-x-6">
                <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                  📞 1-800-555-0123
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-black mb-8 text-cyan-400">Quick Links</h3>
              <div className="space-y-4">
                <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium">Home</Link>
                <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium">About Us</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium">Contact</Link>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium text-left">Pricing</button>
              </div>
            </div>

            {/* Legal & Support */}
            <div>
              <h3 className="text-2xl font-black mb-8 text-cyan-400">Legal & Support</h3>
              <div className="space-y-4">
                <Link to="/privacy" className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium">Terms of Service</Link>
                <Link to="/shipping" className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium">Shipping Info</Link>
                <Link to="/returns" className="block text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium">Returns & Refunds</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 mt-16 text-center">
            <p className="text-gray-300 text-lg">
              © {new Date().getFullYear()} SkyLink Satellite Internet. All rights reserved. 
              <span className="block sm:inline sm:ml-4 mt-2 sm:mt-0 font-semibold text-cyan-400">
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
