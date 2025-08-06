
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, Truck, Package, Clock, MapPin } from 'lucide-react';

const Shipping = () => {
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
            
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/30 shadow-lg">
            <div className="text-center mb-12">
              <Truck className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
              <p className="text-lg text-gray-600">Effective Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Package className="w-6 h-6 text-blue-600 mr-3" />
                    Equipment Shipping
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    SkyLink provides all necessary equipment for satellite internet service delivery. Our equipment shipping policy covers:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Satellite dish and mounting equipment</li>
                    <li>Modem and router hardware</li>
                    <li>All necessary cables and connectors</li>
                    <li>Installation guides and documentation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    Shipping Timeframes
                  </h2>
                  <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                    <h3 className="font-bold text-gray-900 mb-3">Standard Shipping</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Processing Time:</strong> 1-2 business days</li>
                      <li><strong>Delivery Time:</strong> 3-7 business days</li>
                      <li><strong>Cost:</strong> Free for all service plans</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Expedited Shipping</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Processing Time:</strong> Same day (orders placed before 2 PM ET)</li>
                      <li><strong>Delivery Time:</strong> 1-2 business days</li>
                      <li><strong>Cost:</strong> $29.99 (available upon request)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    Coverage Areas
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We ship equipment to all service areas within the continental United States:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>All 48 contiguous United States</li>
                    <li>Alaska and Hawaii (additional shipping time may apply)</li>
                    <li>Rural and remote locations</li>
                    <li>PO Boxes and APO/FPO addresses</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Installation</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In addition to equipment shipping, SkyLink offers professional installation services:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Installation Options</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>Professional Installation:</strong> Free with all plans</li>
                      <li><strong>Self-Installation:</strong> Detailed guides included</li>
                      <li><strong>Installation Scheduling:</strong> Within 7-14 days of equipment delivery</li>
                      <li><strong>Technician Support:</strong> Available during installation</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Tracking</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Track your equipment shipment every step of the way:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Email confirmation with tracking number</li>
                    <li>Real-time shipment updates</li>
                    <li>Delivery confirmation</li>
                    <li>Customer support for shipping questions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Damage or Loss</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If your equipment arrives damaged or is lost in transit:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Report damage within 48 hours of delivery</li>
                    <li>Keep all original packaging materials</li>
                    <li>Contact customer service immediately</li>
                    <li>Replacement equipment shipped at no charge</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment Returns</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When service is cancelled, equipment must be returned:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Pre-paid return shipping label provided</li>
                    <li>30-day return window from cancellation date</li>
                    <li>Equipment must be in original condition</li>
                    <li>Failure to return may result in equipment charges</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For questions about shipping or equipment delivery:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <p className="text-gray-800 font-semibold">SkyLink Shipping Department</p>
                    <p className="text-gray-700">Email: shipping@skylinkinternet.com</p>
                    <p className="text-gray-700">Phone: 1-800-555-0123</p>
                    <p className="text-gray-700">Hours: Monday-Friday, 8 AM - 8 PM ET</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} SkyLink Satellite Internet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shipping;
