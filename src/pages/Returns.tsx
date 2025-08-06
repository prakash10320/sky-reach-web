
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, RefreshCw, Shield, Clock, CheckCircle } from 'lucide-react';

const Returns = () => {
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
              <RefreshCw className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Returns & Refunds</h1>
              <p className="text-lg text-gray-600">Your satisfaction is our priority</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                {/* Satisfaction Guarantee */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    30-Day Satisfaction Guarantee
                  </h2>
                  <div className="bg-green-50 rounded-2xl p-6 mb-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk-Free Trial</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Try SkyLink service risk-free for 30 days. If you're not completely satisfied with your internet service, 
                          we'll refund your monthly service fees and arrange for equipment pickup at no cost to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Return Process */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    How to Return Equipment
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our return process is simple and hassle-free. Follow these steps to return your equipment:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-2xl">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Contact Customer Service</h3>
                        <p className="text-gray-700">Call us at 1-800-555-0123 or email returns@skylinkinternet.com to initiate your return.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-2xl">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Receive Return Kit</h3>
                        <p className="text-gray-700">We'll send you a prepaid return shipping kit with all necessary packaging materials.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-2xl">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Pack Equipment</h3>
                        <p className="text-gray-700">Carefully pack all equipment using the provided materials and return shipping label.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-2xl">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Ship at No Cost</h3>
                        <p className="text-gray-700">Drop off the package at any authorized shipping location - return shipping is completely free.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* What to Return */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment to Return</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Please return all equipment provided by SkyLink:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Returns</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Satellite dish and mounting hardware</li>
                        <li>• Modem/router device</li>
                        <li>• Power adapters and cables</li>
                        <li>• All original packaging materials</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Keep These Items</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Ethernet cables you purchased</li>
                        <li>• Personal computer equipment</li>
                        <li>• Third-party accessories</li>
                        <li>• Installation documentation</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Refund Timeline */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Processing</h2>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Refund Timeline</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Equipment received</span>
                        <span className="text-gray-900 font-semibold">Day 1</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Inspection completed</span>
                        <span className="text-gray-900 font-semibold">Day 1-2</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Refund processed</span>
                        <span className="text-gray-900 font-semibold">Day 2-3</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Refund in your account</span>
                        <span className="text-green-600 font-semibold">Day 3-7</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Refund Methods */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Methods</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Refunds are processed using the same payment method used for your original purchase:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Credit card refunds: 3-5 business days</li>
                    <li>Bank account (ACH): 5-7 business days</li>
                    <li>Check payments: 7-10 business days</li>
                    <li>Account credit: Immediate upon processing</li>
                  </ul>
                </section>

                {/* Conditions */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Conditions</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Equipment must be returned within 30 days of service activation</li>
                      <li>• All equipment must be in good working condition</li>
                      <li>• Missing or damaged equipment may result in replacement charges</li>
                      <li>• Installation fees are non-refundable for custom installations</li>
                      <li>• Express shipping fees are non-refundable</li>
                    </ul>
                  </div>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Returns?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our customer service team is here to help make your return process as smooth as possible:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <p className="text-gray-800 font-semibold">SkyLink Returns Department</p>
                    <p className="text-gray-700">Email: returns@skylinkinternet.com</p>
                    <p className="text-gray-700">Phone: 1-800-555-0123</p>
                    <p className="text-gray-600 text-sm mt-2">Available 24/7 for return assistance</p>
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

export default Returns;
