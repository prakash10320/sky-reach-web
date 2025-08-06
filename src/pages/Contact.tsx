
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, ArrowLeft, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SkyLink</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
                Call Now
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              We're here to help you get connected. Reach out to our team for any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                    <a href="tel:1-800-555-0123" className="text-2xl font-bold text-blue-600 hover:text-indigo-600 transition-colors">
                      1-800-555-0123
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">Send us your questions anytime</p>
                    <a href="mailto:support@skylinkinternet.com" className="text-lg font-semibold text-blue-600 hover:text-indigo-600 transition-colors">
                      support@skylinkinternet.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-3">We're available when you need us</p>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Monday - Friday:</span>
                        <span className="text-gray-900 font-semibold">24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Weekends:</span>
                        <span className="text-gray-900 font-semibold">24/7</span>
                      </div>
                      <div className="text-sm text-green-600 font-semibold mt-2">Emergency Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">ZIP Code</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12345"
                    maxLength={5}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Need Immediate Help?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call for Support</h3>
                <p className="text-gray-600 mb-6">
                  Speak directly with our technical support team for immediate assistance with your service.
                </p>
                <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Call Now
                </a>
              </div>

              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Check Coverage</h3>
                <p className="text-gray-600 mb-6">
                  Find out if SkyLink service is available in your area and get a personalized quote.
                </p>
                <Link to="/" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Check Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">SkyLink</span>
          </div>
          <p className="text-gray-300 mb-4">
            © {new Date().getFullYear()} SkyLink Satellite Internet. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
