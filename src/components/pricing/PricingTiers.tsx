import React from 'react';
import { Check, X } from 'lucide-react';
import { tiers } from '../../types/tiers';

export default function PricingTiers() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-center">
            Pricing Plans
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Choose the perfect plan for your legal practice
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8 bg-white">
                <h2 className="text-2xl font-bold text-gray-900 text-center">
                  {tier.name}
                </h2>
                <p className="mt-4 text-center">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /month
                  </span>
                </p>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Up to {tier.maxUsers} users • {tier.maxCases} cases
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="text-lg font-semibold text-gray-900">Features:</li>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 space-y-4">
                  <li className="text-lg font-semibold text-gray-900">AI Capabilities:</li>
                  {tier.aiFeatures.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full btn-primary">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}