
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, RotateCcw, Shield, Clock, DollarSign } from 'lucide-react';

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
              <RotateCcw className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Returns & Refunds</h1>
              <p className="text-lg text-gray-600">Effective Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    30-Day Satisfaction Guarantee
                  </h2>
                  <div className="bg-green-50 rounded-2xl p-6 mb-4">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We stand behind our service with a comprehensive 30-day satisfaction guarantee. If you're not completely satisfied with your SkyLink internet service, you may cancel within 30 days of activation for a full refund.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Full refund of installation fees</li>
                      <li>Full refund of monthly service charges</li>
                      <li>No cancellation penalties</li>
                      <li>Free equipment return shipping</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    Cancellation Process
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To cancel your service and request a refund within the 30-day period:
                  </p>
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Step-by-Step Cancellation</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-3">
                      <li><strong>Contact Us:</strong> Call 1-800-555-0123 or email cancellation@skylinkinternet.com</li>
                      <li><strong>Provide Information:</strong> Account number, reason for cancellation, and service address</li>
                      <li><strong>Equipment Return:</strong> We'll email a prepaid return shipping label</li>
                      <li><strong>Ship Equipment:</strong> Package and send equipment within 30 days</li>
                      <li><strong>Refund Processing:</strong> Refund issued within 7-10 business days after equipment receipt</li>
                    </ol>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment Return Requirements</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All equipment must be returned in good condition to qualify for a full refund:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>Satellite dish and mounting hardware</li>
                    <li>Modem/router and power supplies</li>
                    <li>All cables and connectors</li>
                    <li>Original packaging when possible</li>
                  </ul>
                  
                  <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200/50">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Shield className="w-5 h-5 text-yellow-600 mr-2" />
                      Equipment Condition Requirements
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Equipment must be free from physical damage</li>
                      <li>No water damage or corrosion</li>
                      <li>All original components included</li>
                      <li>Equipment charges may apply for damaged or missing items</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 text-blue-600 mr-3" />
                    Refund Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="font-bold text-gray-900 mb-3">What's Included</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Monthly service fees</li>
                        <li>Installation charges</li>
                        <li>Equipment shipping costs</li>
                        <li>Activation fees</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Processing Time</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>7-10 business days after equipment receipt</li>
                        <li>Refund to original payment method</li>
                        <li>Email confirmation sent</li>
                        <li>Customer service follow-up</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Cancellation After 30 Days</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For service cancellations after the 30-day guarantee period:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li>30-day written notice required</li>
                    <li>No refunds for prior service periods</li>
                    <li>Prorated charges for partial months</li>
                    <li>Equipment must still be returned</li>
                    <li>Early termination fees may apply to certain contracts</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Issues and Resolution</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Before canceling, let us try to resolve any service issues:
                  </p>
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">We Can Help With:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Technical support and troubleshooting</li>
                      <li>Equipment adjustments and optimization</li>
                      <li>Service plan modifications</li>
                      <li>Account and billing questions</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-100 rounded-xl">
                      <p className="text-blue-800 font-semibold">📞 Technical Support: 1-800-555-0123</p>
                      <p className="text-blue-700">Available 24/7 to help resolve any issues</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For cancellations, returns, or refund questions:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <p className="text-gray-800 font-semibold">SkyLink Customer Care</p>
                    <p className="text-gray-700">Cancellation Email: cancellation@skylinkinternet.com</p>
                    <p className="text-gray-700">Phone: 1-800-555-0123</p>
                    <p className="text-gray-700">Hours: 24/7 Customer Support</p>
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
