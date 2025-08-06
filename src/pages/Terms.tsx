
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, FileText, Scale, AlertCircle } from 'lucide-react';

const Terms = () => {
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
              <Scale className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-600">Effective Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using SkyLink's satellite internet service, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our services, website, and any related software or applications.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    SkyLink provides high-speed satellite internet service to residential and business customers. Our services include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>High-speed satellite internet connectivity</li>
                    <li>Equipment installation and maintenance</li>
                    <li>24/7 customer support</li>
                    <li>Service monitoring and technical support</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Plans and Pricing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We offer various service plans with different speeds and data allowances. Pricing and plan details are subject to change with notice. Key terms include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Monthly service fees are due in advance</li>
                    <li>Installation may be subject to additional fees</li>
                    <li>Equipment rental fees may apply</li>
                    <li>Early termination fees may apply to certain plans</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    SkyLink provides necessary equipment for service delivery, including satellite dishes, modems, and related hardware:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Equipment remains property of SkyLink unless purchased</li>
                    <li>Customer is responsible for equipment care and security</li>
                    <li>Lost or damaged equipment may result in replacement charges</li>
                    <li>Professional installation is recommended and may be required</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                    Acceptable Use Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our service must be used in compliance with all applicable laws and regulations. Prohibited activities include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Illegal activities or content distribution</li>
                    <li>Network abuse or attempts to compromise security</li>
                    <li>Excessive bandwidth usage that affects other customers</li>
                    <li>Commercial resale without authorization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    While we strive to provide continuous service, satellite internet may be affected by weather conditions, equipment issues, or other factors beyond our control. We do not guarantee 100% uptime and are not liable for service interruptions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our service, you consent to our privacy practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Either party may terminate service with proper notice:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Customers may cancel with 30 days written notice</li>
                    <li>SkyLink may terminate for non-payment or policy violations</li>
                    <li>Equipment must be returned upon termination</li>
                    <li>Final billing will include prorated charges and fees</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    SkyLink's liability is limited to the monthly service charges. We are not liable for indirect, incidental, or consequential damages arising from service use or interruption.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For questions about these Terms of Service or our policies, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <p className="text-gray-800 font-semibold">SkyLink Customer Service</p>
                    <p className="text-gray-700">Email: legal@skylinkinternet.com</p>
                    <p className="text-gray-700">Phone: 1-800-555-0123</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be posted on our website and customers will be notified of material changes. Continued use of our service constitutes acceptance of updated terms.
                  </p>
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

export default Terms;
