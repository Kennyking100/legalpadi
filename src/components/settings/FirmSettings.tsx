import React from 'react';
import { Building2, Users, Settings, Shield } from 'lucide-react';
import { Tier, tiers } from '../../types/tiers';

interface FirmSettingsProps {
  currentTier: Tier;
  firmName: string;
  totalUsers: number;
  totalCases: number;
}

export default function FirmSettings({ 
  currentTier,
  firmName = "Smith & Associates",
  totalUsers = 5,
  totalCases = 120
}: FirmSettingsProps) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Firm Settings</h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Building2 className="h-6 w-6 text-indigo-600" />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Firm Details</h3>
                <p className="text-sm text-gray-500">{firmName}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-indigo-600" />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Current Plan</h3>
                <p className="text-sm text-gray-500">{currentTier.name}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-indigo-900 mb-4">Usage Overview</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-indigo-900 mb-1">
                <span>Users</span>
                <span>{totalUsers} / {currentTier.maxUsers}</span>
              </div>
              <div className="w-full bg-indigo-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${(totalUsers / currentTier.maxUsers) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-indigo-900 mb-1">
                <span>Cases</span>
                <span>{totalCases} / {currentTier.maxCases}</span>
              </div>
              <div className="w-full bg-indigo-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${(totalCases / currentTier.maxCases) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900">Available Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentTier.features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="btn-secondary">
            Change Plan
          </button>
          <button className="btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}