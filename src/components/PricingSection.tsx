
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
            Choose Your Perfect Plan
          </h2>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-10 leading-relaxed">
            Lightning-fast satellite internet plans designed for every need. Limited-time pricing!
          </p>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md px-8 py-4 rounded-full border border-green-400/30">
            <span className="text-green-400 font-black text-lg">🔥 Limited Time Offer</span>
            <span className="text-green-300 font-semibold">• Save up to $30/month</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-12 rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 border-blue-400/50 shadow-2xl scale-105 shadow-blue-500/30' 
                  : 'bg-white/10 border-white/30 shadow-xl hover:bg-white/15 hover:shadow-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full text-sm font-black flex items-center space-x-2 shadow-xl shadow-blue-500/30">
                    <Star className="w-5 h-5 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-12">
                <h3 className="text-4xl font-black text-white mb-4">{plan.name}</h3>
                <div className="text-xl text-blue-200 mb-4 font-semibold">{plan.speed} Download Speed</div>
                <div className="mb-6">
                  <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  <div className="text-7xl font-black text-white mb-3">
                    {plan.price}
                    <span className="text-3xl text-gray-300 font-medium">/mo</span>
                  </div>
                  <div className="text-green-400 font-black text-lg">{plan.savings}</div>
                </div>
              </div>

              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <Check className="w-7 h-7 text-green-400 flex-shrink-0" />
                    <span className="text-white font-semibold text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:1-800-555-0123"
                className={`block w-full text-center py-6 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl hover:shadow-cyan-500/50'
                    : 'bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:from-slate-600 hover:to-slate-700 shadow-xl'
                }`}
              >
                🚀 Call to Order Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-blue-200 mb-6 text-xl">Need help choosing the right plan?</p>
          <a href="tel:1-800-555-0123" className="text-cyan-400 font-black hover:text-cyan-300 transition-colors text-2xl">
            📞 Call our experts: 1-800-555-0123
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
