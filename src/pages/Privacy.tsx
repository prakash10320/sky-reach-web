
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, Shield, Eye, Lock } from 'lucide-react';

const Privacy = () => {
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
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-600">Effective Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-blue-600 mr-3" />
                    Information We Collect
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    sign up for our services, or contact us for support. This may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Personal information (name, email address, phone number, mailing address)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Service location and installation preferences</li>
                    <li>Communication preferences and support requests</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-blue-600 mr-3" />
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the information we collect to provide, maintain, and improve our services, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Providing satellite internet service and customer support</li>
                    <li>Processing payments and billing</li>
                    <li>Communicating with you about your service and account</li>
                    <li>Improving our services and developing new features</li>
                    <li>Complying with legal obligations and protecting our rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>To service providers who assist us in operating our business</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your information (subject to legal requirements)</li>
                    <li>Opting out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, 
                    please contact us at:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <p className="text-gray-800 font-semibold">SkyLink Privacy Team</p>
                    <p className="text-gray-700">Email: privacy@skylinkinternet.com</p>
                    <p className="text-gray-700">Phone: 1-800-555-0123</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    material changes by posting the new Privacy Policy on this page and updating the 
                    effective date.
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

export default Privacy;
