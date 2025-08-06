
import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Standard",
      speed: "50 Mbps",
      price: "$49",
      originalPrice: "$69",
      features: ["Unlimited Data", "Free Installation", "24/7 Support", "No Contracts", "Basic Security"],
      popular: false,
      savings: "Save $20/mo"
    },
    {
      name: "Premium",
      speed: "100 Mbps", 
      price: "$69",
      originalPrice: "$99",
      features: ["Everything in Standard", "Priority Support", "Advanced Security", "Free Equipment", "Speed Boost", "Family Protection"],
      popular: true,
      savings: "Save $30/mo"
    },
    {
      name: "Elite",
      speed: "200 Mbps",
      price: "$99",
      originalPrice: "$129",
      features: ["Everything in Premium", "Ultra-Fast Speed", "Business Ready", "VIP Support", "Advanced Firewall", "Unlimited Devices"],
      popular: false,
      savings: "Save $30/mo"
    }
  ];

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Lightning-fast satellite internet plans designed for every need. Limited-time pricing!
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100/80 backdrop-blur-md px-6 py-3 rounded-full border border-green-200/50">
            <span className="text-green-600 font-bold">🔥 Limited Time Offer</span>
            <span className="text-green-700">• Save up to $30/month</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-10 rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 border-blue-300/50 shadow-2xl scale-105' 
                  : 'bg-white/40 border-white/30 shadow-xl hover:bg-white/60'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-black flex items-center space-x-2 shadow-xl">
                    <Star className="w-4 h-4 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-gray-900 mb-3">{plan.name}</h3>
                <div className="text-lg text-gray-600 mb-2">{plan.speed} Download Speed</div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                  <div className="text-6xl font-black text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-2xl text-gray-600 font-medium">/mo</span>
                  </div>
                  <div className="text-green-600 font-bold text-sm">{plan.savings}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:1-800-555-0123"
                className={`block w-full text-center py-5 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl hover:shadow-blue-500/50'
                    : 'bg-gray-900 text-white hover:bg-gray-800 shadow-xl'
                }`}
              >
                🚀 Call to Order Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need help choosing the right plan?</p>
          <a href="tel:1-800-555-0123" className="text-blue-600 font-bold hover:text-blue-700 transition-colors text-lg">
            📞 Call our experts: 1-800-555-0123
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
