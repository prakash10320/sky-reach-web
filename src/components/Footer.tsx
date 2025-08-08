
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Contract Guard</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Protect yourself from contract scams with our AI-powered legal assistant. 
              Scan contracts, detect red flags, and get instant legal feedback.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@contractguard.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1-800-CONTRACT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/features" className="block text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link to="/testimonials" className="block text-gray-300 hover:text-white transition-colors">Testimonials</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Contract Guard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
