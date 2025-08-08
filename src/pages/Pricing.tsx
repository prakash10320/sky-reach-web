
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for occasional contract review",
      features: [
        "3 contract scans per month",
        "Basic red flag detection",
        "Simple risk assessment",
        "Email support",
        "Basic templates"
      ],
      popular: false,
      cta: "Get Started Free",
      ctaVariant: "outline"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Ideal for active freelancers",
      features: [
        "Unlimited contract scans",
        "Advanced red flag detection",
        "Detailed clause analysis",
        "Priority support",
        "Contract templates library",
        "Negotiation recommendations",
        "Risk scoring dashboard",
        "Contract history tracking"
      ],
      popular: true,
      cta: "Start Pro Trial",
      ctaVariant: "primary"
    },
    {
      name: "Business",
      price: "$99",
      period: "per month",
      description: "For agencies and teams",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Bulk contract processing",
        "Custom integrations",
        "Dedicated support",
        "White-label reports",
        "Advanced analytics",
        "API access",
        "Custom contract templates"
      ],
      popular: false,
      cta: "Contact Sales",
      ctaVariant: "outline"
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
              Simple, Transparent <span className="text-blue-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that fits your freelance business. No hidden fees, cancel anytime.
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              30-day money-back guarantee on all plans
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                      plan.ctaVariant === 'primary'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan at any time?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a contract or commitment?</h3>
                <p className="text-gray-600">No, all our plans are month-to-month with no long-term contracts. You can cancel anytime with no penalties.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What types of contracts can you analyze?</h3>
                <p className="text-gray-600">We can analyze any type of freelance contract including service agreements, NDAs, work-for-hire contracts, and more. We support PDF, DOC, and text formats.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate is the AI analysis?</h3>
                <p className="text-gray-600">Our AI has a 95% accuracy rate in identifying red flags and contract risks. It's trained on thousands of real contracts and legal precedents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
