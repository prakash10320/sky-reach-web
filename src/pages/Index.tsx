
import React, { useState } from 'react';
import { Phone, Check, Globe, Shield, Clock, Truck, MessageCircle, Zap, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [zipCode, setZipCode] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.trim()) {
      setShowMessage(true);
      setZipCode('');
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  const plans = [
    {
      name: "Standard",
      speed: "50 Mbps",
      price: "$49",
      features: ["Unlimited Data", "Free Installation", "24/7 Support", "No Contracts"],
      popular: false
    },
    {
      name: "Premium",
      speed: "100 Mbps", 
      price: "$69",
      features: ["Unlimited Data", "Priority Support", "Free Equipment", "No Data Caps"],
      popular: true
    },
    {
      name: "Elite",
      speed: "200 Mbps",
      price: "$99",
      features: ["Ultra-Fast Speed", "Premium Support", "Advanced Security", "Business Ready"],
      popular: false
    }
  ];

  const features = [
    { icon: Check, title: "No Contracts", desc: "Flexible plans with no long-term commitments" },
    { icon: Truck, title: "Free Installation", desc: "Professional setup at no extra cost" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
    { icon: Globe, title: "Rural Area Ready", desc: "Coverage even in remote locations" },
    { icon: Shield, title: "Secure Connection", desc: "Advanced encryption and security" },
    { icon: MessageCircle, title: "Easy Setup", desc: "Quick and simple installation process" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SkyLink</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</Link>
              <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
                Call Now
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="py-4 space-y-4">
              <Link to="/about" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</Link>
              <a href="tel:1-800-555-0123" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
                Call Now
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Reliable Satellite Internet{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Wherever You Are
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium">
              Fast. Affordable. Anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Call Now
              </a>
              <a href="#plans" className="bg-white/80 backdrop-blur-md text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                View Plans
              </a>
            </div>

            {/* Zip Code Checker */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Enter your ZIP code"
                  className="flex-1 px-6 py-4 rounded-full bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={5}
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Check Availability
                </button>
              </form>
              
              {showMessage && (
                <div className="mt-4 p-4 bg-green-100/80 backdrop-blur-md text-green-800 rounded-2xl border border-green-200/50 animate-fade-in">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5" />
                    <span className="font-semibold">Inquiry received! We'll call you shortly.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-speed satellite internet plans designed for every need and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-300/30 shadow-xl' 
                    : 'bg-white/50 border-white/20 shadow-lg hover:bg-white/70'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-gray-600 mb-4">{plan.speed}</div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-xl text-gray-600">/mo</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:1-800-555-0123"
                  className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl'
                      : 'bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg'
                  }`}
                >
                  Call Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose SkyLink?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the best in satellite internet technology with our premium features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <Globe className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Nationwide Coverage
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              We deliver fast internet even in remote & rural zones where traditional providers can't reach.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-300" />
                <span className="text-lg">99% Coverage</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-blue-300" />
                <span className="text-lg">Nationwide Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-300" />
                <span className="text-lg">Reliable Connection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Connected?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Need help choosing a plan? Our experts are ready to help you find the perfect internet solution.
            </p>
            
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/30 shadow-xl mb-12">
              <div className="flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-blue-600 mr-4" />
                <a href="tel:1-800-555-0123" className="text-3xl sm:text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  1-800-555-0123
                </a>
              </div>
              <p className="text-lg text-gray-600 mb-8">Call to Activate Now</p>
              
              <form className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={5}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </form>
              
              <button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">SkyLink</span>
              </div>
              <p className="text-gray-300 max-w-md">
                Connecting you to the world with reliable, high-speed satellite internet. Available everywhere, affordable for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</Link></li>
                <li><Link to="/returns" className="text-gray-300 hover:text-white transition-colors">Returns & Refunds</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} SkyLink Satellite Internet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
