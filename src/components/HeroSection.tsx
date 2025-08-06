
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const HeroSection = () => {
  const [zipCode, setZipCode] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.trim()) {
      setShowMessage(true);
      setZipCode('');
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Satellite Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='satellite-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23334155;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%231e40af;stop-opacity:0.3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='400' cy='300' rx='200' ry='100' fill='url(%23satellite-grad)' transform='rotate(-15 400 300)'/%3E%3Ccircle cx='400' cy='300' r='15' fill='%233b82f6'/%3E%3Cpath d='M385 295 Q400 280 415 295' stroke='%233b82f6' stroke-width='3' fill='none'/%3E%3Cpath d='M385 305 Q400 320 415 305' stroke='%233b82f6' stroke-width='3' fill='none'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
              Reliable Satellite Internet{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                Wherever You Are
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-600 mb-4 font-semibold">
              Fast. Affordable. Anywhere.
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Experience lightning-fast satellite internet that reaches every corner of America. No more waiting, no more limits.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in delay-300">
            <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              🚀 Call Now
            </a>
            <a href="#plans" className="bg-white/30 backdrop-blur-xl text-gray-800 px-10 py-5 rounded-full text-xl font-bold border border-white/40 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
              🎯 View Plans
            </a>
          </div>

          {/* Enhanced Zip Code Checker */}
          <div className="max-w-lg mx-auto animate-fade-in delay-500">
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Check Your Area Coverage</h3>
              <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Enter your ZIP code"
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white/30 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-transparent font-medium"
                  maxLength={5}
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  ✨ Check Now
                </button>
              </form>
              
              {showMessage && (
                <div className="mt-6 p-6 bg-green-100/80 backdrop-blur-md text-green-800 rounded-2xl border border-green-200/50 animate-fade-in">
                  <div className="flex items-center justify-center space-x-3">
                    <Check className="w-6 h-6" />
                    <span className="font-bold text-lg">🎉 Inquiry received! We'll call you shortly.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
