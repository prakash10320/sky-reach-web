
import React from 'react';
import { Users, Zap, Globe, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500K+",
      label: "Happy Customers",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Uptime Guarantee",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      number: "50 States",
      label: "Coverage Area",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      number: "24/7",
      label: "Expert Support",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
