
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Target, Eye, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Contract Guard</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to protect freelancers from contract scams and unfair business practices through AI-powered legal assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every year, thousands of freelancers fall victim to contract scams, losing time, money, and trust in the freelance economy. We believe this shouldn't happen.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Contract Guard was built to level the playing field, giving individual freelancers the same contract analysis capabilities that large corporations use to protect themselves.
              </p>
              <p className="text-lg text-gray-600">
                Our AI-powered platform democratizes legal expertise, making contract protection accessible and affordable for everyone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-gray-600">Protected Freelancers</div>
                </div>
                <div>
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
                <div>
                  <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div>
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600">AI Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A world where every freelancer can work confidently, knowing they're protected from scams and unfair contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Making legal expertise accessible to every freelancer, regardless of their budget or location.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Eye className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                Providing clear, understandable explanations of contract terms and potential risks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Protection</h3>
              <p className="text-gray-600">
                Empowering freelancers with the tools and knowledge to protect their interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Contract Guard was born from a personal experience. Our founder, a freelance developer, lost $15,000 to a contract scam that could have been easily avoided with proper legal review.
              </p>
              <p>
                After researching the problem, we discovered that contract scams affect over 30% of freelancers annually, with losses totaling billions of dollars worldwide. The root cause? Lack of affordable legal expertise.
              </p>
              <p>
                We assembled a team of AI experts, legal professionals, and freelance advocates to build a solution that would democratize contract protection. Our AI models are trained on thousands of real contracts and legal precedents to provide accurate, actionable insights.
              </p>
              <p>
                Today, Contract Guard protects thousands of freelancers worldwide, helping them identify risks, understand complex terms, and negotiate better contracts. We're proud to be the trusted guardian of the freelance community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
