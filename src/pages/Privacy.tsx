
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-lg text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12">
              
              <div className="space-y-12">
                
                <div>
                  <div className="flex items-center mb-6">
                    <Eye className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                  </div>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      We collect information you provide directly to us when you create an account, 
                      use our services, or communicate with us. This includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Personal information (name, email address, phone number)</li>
                      <li>Account credentials and preferences</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Contract documents you upload for analysis</li>
                      <li>Communication records with our support team</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <Lock className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                  </div>
                  <div className="text-gray-600 space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our contract analysis services</li>
                      <li>Process your payments and manage your account</li>
                      <li>Send you technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and customer service requests</li>
                      <li>Develop new features and enhance user experience</li>
                      <li>Comply with legal obligations and protect our rights</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Contract Document Security</h2>
                  </div>
                  <div className="text-gray-600 space-y-4">
                    <p className="font-semibold text-gray-900">
                      Your contract documents are handled with the highest level of security:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>All documents are encrypted during upload and processing</li>
                      <li>Documents are automatically deleted from our servers after 30 days</li>
                      <li>Only AI systems process your documents - no human review</li>
                      <li>We never share, sell, or use your contracts for any other purpose</li>
                      <li>You can request immediate deletion of your documents at any time</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties, 
                      except in the following limited circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With service providers who assist us in operating our platform (under strict confidentiality agreements)</li>
                      <li>When required by law or to protect our rights and safety</li>
                      <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                      <li>With your explicit consent for specific purposes</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>We retain your information for as long as necessary to provide our services and fulfill legal obligations:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Account information: Retained while your account is active</li>
                      <li>Contract documents: Automatically deleted after 30 days</li>
                      <li>Analysis results: Retained for your reference while account is active</li>
                      <li>Communication records: Retained for 3 years for support purposes</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>You have several rights regarding your personal information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access and review your personal information</li>
                      <li>Correct inaccurate or incomplete information</li>
                      <li>Delete your account and personal information</li>
                      <li>Request immediate deletion of uploaded documents</li>
                      <li>Opt out of marketing communications</li>
                      <li>Export your data in a portable format</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Measures</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>We implement comprehensive security measures to protect your information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>End-to-end encryption for all data transmission</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Access controls and employee background checks</li>
                      <li>SOC 2 Type II compliance (in progress)</li>
                      <li>24/7 security monitoring and incident response</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <div className="text-gray-600">
                    <p className="mb-4">
                      If you have any questions about this Privacy Policy or our privacy practices, 
                      please contact our Privacy Team:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="font-semibold text-gray-900">Contract Guard Privacy Team</p>
                      <p>Email: privacy@contractguard.com</p>
                      <p>Phone: 1-800-CONTRACT</p>
                      <p>Response time: Within 48 hours</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
                  <div className="text-gray-600">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices 
                      or applicable laws. We will notify you of any material changes by email and by posting 
                      the updated policy on our website with a new effective date.
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

export default Privacy;
