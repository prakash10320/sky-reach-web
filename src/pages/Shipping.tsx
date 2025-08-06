
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
              <p className="text-lg text-gray-600">Equipment delivery and installation information</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Package className="w-6 h-6 text-blue-600 mr-3" />
                    Equipment Shipping
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    SkyLink provides all necessary equipment for your satellite internet service. Our equipment shipping process includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Professional-grade satellite dish and modem</li>
                    <li>All necessary cables and mounting hardware</li>
                    <li>Installation instructions and setup guides</li>
                    <li>Professional installation coordination</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    Delivery Timeline
                  </h2>
                  <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard Delivery</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li><strong>Processing Time:</strong> 1-2 business days</li>
                      <li><strong>Shipping Time:</strong> 3-7 business days</li>
                      <li><strong>Total Delivery:</strong> 4-9 business days from order</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Express Delivery</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li><strong>Processing Time:</strong> Same business day</li>
                      <li><strong>Shipping Time:</strong> 1-2 business days</li>
                      <li><strong>Total Delivery:</strong> 1-3 business days from order</li>
                      <li><strong>Additional Fee:</strong> $50 express shipping charge</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    Coverage Areas
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We ship equipment to all 50 states and most territories:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard Shipping Areas</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>All 50 US States</li>
                        <li>Washington D.C.</li>
                        <li>Puerto Rico</li>
                        <li>US Virgin Islands</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Special Handling Required</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>Alaska (additional 2-5 days)</li>
                        <li>Hawaii (additional 2-5 days)</li>
                        <li>Remote rural areas</li>
                        <li>Military APO/FPO addresses</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Installation</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Professional installation is included with all service plans at no additional cost:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Certified technician will contact you within 24 hours of equipment delivery</li>
                    <li>Installation appointment scheduled at your convenience</li>
                    <li>Complete system setup and configuration</li>
                    <li>Signal optimization and testing</li>
                    <li>Customer training and support materials</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Costs</h2>
                  <div className="bg-green-100 rounded-2xl p-6 mb-4">
                    <div className="flex items-center mb-3">
                      <Package className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Free Standard Shipping</h3>
                    </div>
                    <p className="text-gray-700">
                      Standard shipping is included at no charge for all new service activations.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Standard Shipping (4-9 business days)</span>
                      <span className="text-green-600 font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Express Shipping (1-3 business days)</span>
                      <span className="text-gray-900 font-semibold">$50</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Alaska/Hawaii Additional</span>
                      <span className="text-gray-900 font-semibold">$25</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Tracking Your Order</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Stay informed about your equipment delivery:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Tracking number provided via email within 24 hours of shipping</li>
                    <li>Real-time updates on package location and delivery status</li>
                    <li>SMS notifications available for delivery updates</li>
                    <li>Customer service available for tracking assistance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Requirements</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To ensure successful delivery of your equipment:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Someone 18+ must be available to receive and sign for delivery</li>
                    <li>Valid photo ID required for package receipt</li>
                    <li>Delivery address must match service installation address</li>
                    <li>Secure location required for package storage if not home</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Shipping Questions</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have questions about equipment shipping or need to modify your delivery:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <p className="text-gray-800 font-semibold">SkyLink Shipping Department</p>
                    <p className="text-gray-700">Email: shipping@skylinkinternet.com</p>
                    <p className="text-gray-700">Phone: 1-800-555-0123</p>
                    <p className="text-gray-600 text-sm mt-2">Available Monday-Friday, 8 AM - 8 PM EST</p>
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
