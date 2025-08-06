
import React, { useState } from 'react';
import { Check, Satellite, Wifi, Globe, Zap } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Satellite constellation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-60 left-40 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute bottom-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
        </div>

        {/* Orbital paths */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-300 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-indigo-300 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Satellites */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
          <Satellite className="w-8 h-8 text-blue-400 opacity-60" />
        </div>
        <div className="absolute top-32 right-20 animate-bounce delay-1000" style={{ animationDuration: '4s' }}>
          <Wifi className="w-6 h-6 text-indigo-400 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-32 animate-bounce delay-2000" style={{ animationDuration: '3.5s' }}>
          <Globe className="w-7 h-7 text-cyan-400 opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Lightning-Fast{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Satellite Internet
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-100 mb-4 font-light">
              🚀 Connect Anywhere • Stream Everything • Work Remotely
            </p>
            <p className="text-lg sm:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience blazing-fast internet speeds up to <strong className="text-cyan-400">1 Gbps</strong> with 
              our next-generation satellite technology. Perfect for streaming, gaming, and remote work.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-300">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">✅ 99.9% Uptime</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">🌐 Nationwide Coverage</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">⚡ Ultra-Low Latency</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in delay-500">
            <a 
              href="tel:1-800-555-0123" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
            >
              <span className="flex items-center justify-center space-x-3">
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                <span>Get Connected Now!</span>
              </span>
            </a>
            <a 
              href="#pricing" 
              className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-xl font-bold border border-white/30 hover:bg-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
            >
              🎯 View Plans & Pricing
            </a>
          </div>

          {/* Enhanced Zip Checker */}
          <div className="max-w-xl mx-auto animate-fade-in delay-700">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Check Availability in Your Area</h3>
              <p className="text-blue-200 mb-6">Enter your ZIP code to see available plans and speeds</p>
              
              <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  placeholder="Enter ZIP Code (e.g., 90210)"
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-transparent font-medium text-lg"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>🔍 Check Now</span>
                </button>
              </form>
              
              {showMessage && (
                <div className="mt-6 p-6 bg-emerald-500/20 backdrop-blur-md text-emerald-100 rounded-2xl border border-emerald-400/30 animate-fade-in">
                  <div className="flex items-center justify-center space-x-3">
                    <Check className="w-6 h-6" />
                    <span className="font-bold text-lg">🎉 Great news! Service available in your area!</span>
                  </div>
                  <p className="text-center mt-2 text-emerald-200">Our team will contact you within 30 minutes to discuss your options.</p>
                </div>
              )}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in delay-1000">
            <p className="text-blue-300 text-lg mb-6">Trusted by over 500,000+ satisfied customers nationwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white/80 text-sm">⭐⭐⭐⭐⭐ 4.8/5 Rating</div>
              <div className="text-white/80 text-sm">🏆 Best Satellite Internet 2024</div>
              <div className="text-white/80 text-sm">🛡️ BBB A+ Rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
