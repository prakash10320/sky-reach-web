
import React from 'react';
import { Shield, Clock, Truck, Globe, Zap, HeartHandshake } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "No Contracts",
      desc: "Freedom to choose. No long-term commitments or hidden fees.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Truck,
      title: "Free Installation",
      desc: "Professional setup at no extra cost. We handle everything.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "24/7 Expert Support",
      desc: "Real humans ready to help, any time of day or night.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "99% Coverage",
      desc: "Reaching remote areas where others can't deliver.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Speeds up to 200 Mbps. Perfect for streaming and gaming.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      desc: "Your satisfaction is our mission. We're here for you.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Why Choose SkyLink?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another internet provider. We're your connection to unlimited possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-white/50 backdrop-blur-xl rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
