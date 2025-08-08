
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              The terms and conditions governing your use of Contract Guard
            </p>
            <p className="text-lg text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12">
              
              <div className="space-y-12">
                
                <div>
                  <div className="flex items-center mb-6">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                  </div>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      By accessing and using Contract Guard's services, you accept and agree to be bound by the terms 
                      and conditions of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p>
                      These Terms of Use govern your use of our website, mobile applications, and all related services, 
                      features, and content offered by Contract Guard.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Description</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>Contract Guard provides AI-powered contract analysis services, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Automated contract scanning and risk detection</li>
                      <li>Legal clause analysis and plain-language explanations</li>
                      <li>Red flag identification and scam pattern recognition</li>
                      <li>Contract recommendations and negotiation guidance</li>
                      <li>Document storage and history tracking</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>As a user of Contract Guard, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete account information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Use the service only for lawful purposes</li>
                      <li>Not upload malicious files or attempt to compromise our systems</li>
                      <li>Respect intellectual property rights</li>
                      <li>Not reverse engineer or attempt to extract our AI models</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Important Disclaimers</h2>
                  </div>
                  <div className="text-gray-600 space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <p className="font-semibold text-gray-900 mb-2">Not Legal Advice</p>
                      <p>
                        Contract Guard provides automated analysis and information only. Our service does not constitute 
                        legal advice, and we are not a law firm. Always consult with qualified legal professionals 
                        for specific legal matters.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <p className="font-semibold text-gray-900 mb-2">AI Limitations</p>
                      <p>
                        While our AI is highly accurate, it may not catch every issue or risk in a contract. 
                        Users should exercise their own judgment and seek professional legal review when appropriate.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscription and Billing</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>Our subscription terms include:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Monthly billing cycles with automatic renewal</li>
                      <li>30-day money-back guarantee for new subscribers</li>
                      <li>Cancel anytime with no long-term commitments</li>
                      <li>Prorated billing for plan changes</li>
                      <li>All fees are non-refundable except as stated in our refund policy</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Contract Guard retains all rights to our platform, AI models, analysis algorithms, and related 
                      intellectual property. You retain ownership of any contracts you upload, but grant us a limited 
                      license to process them for analysis purposes.
                    </p>
                    <p>
                      You may not copy, distribute, or create derivative works based on our proprietary technology 
                      without explicit written permission.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Your privacy is important to us. Our data handling practices are detailed in our Privacy Policy, 
                      which is incorporated by reference into these Terms. Key points include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Uploaded contracts are encrypted and automatically deleted after 30 days</li>
                      <li>We never share your contracts with third parties</li>
                      <li>Only AI systems process your documents - no human review</li>
                      <li>You can request immediate deletion of your data at any time</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Contract Guard's liability is limited to the maximum extent permitted by law. We are not liable for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Any decisions you make based on our analysis</li>
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of profits, data, or business opportunities</li>
                      <li>Any damages exceeding the amount paid for our services</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Either party may terminate this agreement at any time. Upon termination:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Your access to the service will be immediately suspended</li>
                      <li>Your data will be deleted according to our retention policy</li>
                      <li>You remain responsible for any outstanding fees</li>
                      <li>Provisions regarding limitation of liability and intellectual property survive termination</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                  <div className="text-gray-600">
                    <p>
                      These Terms are governed by and construed in accordance with the laws of the State of California, 
                      without regard to conflict of law principles. Any disputes will be resolved in the courts of 
                      San Francisco County, California.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="text-gray-600">
                    <p className="mb-4">
                      If you have questions about these Terms of Use, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="font-semibold text-gray-900">Contract Guard Legal Team</p>
                      <p>Email: legal@contractguard.com</p>
                      <p>Phone: 1-800-CONTRACT</p>
                      <p>Address: San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
                  </div>
                  <div className="text-gray-600">
                    <p>
                      We reserve the right to modify these terms at any time. We will notify users of material changes 
                      via email and by posting updates on our website. Continued use of our service after changes 
                      constitutes acceptance of the updated terms.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
