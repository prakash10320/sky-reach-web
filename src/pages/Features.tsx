
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, AlertTriangle, Eye, Shield, Zap, CheckCircle, Clock, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: 'Smart Contract Scanner',
      description: 'Upload contracts in any format (PDF, DOC, TXT) and get instant AI-powered analysis.',
      benefits: ['Instant analysis', 'Multiple file formats', 'Batch processing', 'Cloud storage']
    },
    {
      icon: AlertTriangle,
      title: 'Red Flag Detection',
      description: 'Automatically identify suspicious clauses, unfair terms, and common scam patterns.',
      benefits: ['Scam pattern recognition', 'Unfair terms detection', 'Risk scoring', 'Alert notifications']
    },
    {
      icon: Eye,
      title: 'Legal Clause Analysis',
      description: 'Get plain-English explanations of complex legal terms and their implications.',
      benefits: ['Plain language summaries', 'Risk assessment', 'Legal precedents', 'Recommendation engine']
    },
    {
      icon: Shield,
      title: 'Protection Recommendations',
      description: 'Receive actionable advice on how to modify contracts to protect your interests.',
      benefits: ['Custom recommendations', 'Clause modifications', 'Negotiation tips', 'Template library']
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Get results in seconds, not days. Perfect for time-sensitive negotiations.',
      benefits: ['Real-time analysis', 'Instant notifications', 'Quick turnaround', 'Mobile accessible']
    },
    {
      icon: Clock,
      title: 'Contract History',
      description: 'Track all your analyzed contracts and monitor changes over time.',
      benefits: ['Version tracking', 'Change detection', 'Archive system', 'Search functionality']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Complete <span className="text-blue-600">Contract Protection</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to identify risks, understand terms, and protect your freelance business from contract scams.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get contract protection in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Contract</h3>
              <p className="text-gray-600">
                Simply upload your contract file in any format - PDF, DOC, or plain text.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI scans for red flags, analyzes clauses, and identifies potential risks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Report</h3>
              <p className="text-gray-600">
                Receive detailed analysis with recommendations and protection strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
