
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, ArrowLeft, Users, Award, Globe, Shield, Clock, Heart } from 'lucide-react';

const About = () => {
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
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SkyLink</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              We're on a mission to connect every corner of America with reliable, high-speed satellite internet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SkyLink, we believe that everyone deserves access to fast, reliable internet, regardless of where they live. 
                We're bridging the digital divide by bringing cutting-edge satellite internet technology to rural and remote areas 
                that have been underserved by traditional internet providers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment goes beyond just providing internet access. We're building connections that enable communities 
                to thrive, students to learn, businesses to grow, and families to stay connected.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl p-8 border border-blue-200/30">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">500K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-gray-600">US Coverage</div>
                </div>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                  <div className="text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg text-center">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver consistent, dependable internet service you can count on, day or night.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg text-center">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our 24/7 customer support team is always ready to help with any questions or issues.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-lg text-center">
              <Heart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to strengthening communities by providing the connectivity they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/30 shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Ready to Join the SkyLink Family?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the difference of reliable satellite internet built for your community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:1-800-555-0123" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Call Now: 1-800-555-0123
                </a>
                <Link to="/" className="bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 hover:shadow-xl transition-all duration-300">
                  View Plans
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
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
