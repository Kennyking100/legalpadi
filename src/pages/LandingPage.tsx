import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Briefcase, Shield, Brain, Clock, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Scale className="h-16 w-16 text-indigo-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Modern Legal Practice Management
              <span className="text-indigo-600">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Streamline your law practice with our all-in-one solution for case management, 
              client communication, and document handling.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/register" className="btn-primary text-lg px-8 py-3">
                Start Free Trial
              </Link>
              <Link to="/login" className="btn-secondary text-lg px-8 py-3">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Run Your Practice
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed specifically for legal professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Case Management',
                description: 'Organize and track all your cases in one place with our intuitive interface.'
              },
              {
                icon: Shield,
                title: 'Secure Document Storage',
                description: 'Keep your sensitive documents safe with enterprise-grade security.'
              },
              {
                icon: Brain,
                title: 'AI-Powered Insights',
                description: 'Get intelligent suggestions and automate routine tasks with our AI assistant.'
              },
              {
                icon: Clock,
                title: 'Time Tracking',
                description: 'Track billable hours and generate detailed reports automatically.'
              },
              {
                icon: Users,
                title: 'Client Portal',
                description: 'Provide your clients with secure access to their case information.'
              },
              {
                icon: Scale,
                title: 'Compliance Ready',
                description: 'Stay compliant with built-in tools and automated compliance checks.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mb-6 mx-auto">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Law Firms Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of legal professionals who trust LexFlow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "LexFlow has transformed how we manage our practice. The AI features are game-changing.",
                author: "Sarah Wilson",
                role: "Managing Partner",
                firm: "Wilson & Associates"
              },
              {
                quote: "The most user-friendly legal software I've ever used. It's increased our efficiency by 40%.",
                author: "Michael Chen",
                role: "Senior Attorney",
                firm: "Chen Legal Group"
              },
              {
                quote: "Outstanding client portal and document management. Our clients love the transparency.",
                author: "Jessica Martinez",
                role: "Legal Operations Director",
                firm: "Martinez Law"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-600">{testimonial.firm}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Start your 14-day free trial today. No credit card required.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}