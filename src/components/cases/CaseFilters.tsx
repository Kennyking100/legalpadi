import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function CaseFilters() {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input-primary pl-10"
              placeholder="Search cases..."
            />
          </div>
        </div>
        
        <div>
          <select className="input-primary">
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="closed">Closed</option>
            <option value="discovery">Discovery</option>
          </select>
        </div>
        
        <div>
          <select className="input-primary">
            <option value="">All Types</option>
            <option value="corporate">Corporate Litigation</option>
            <option value="estate">Estate Planning</option>
            <option value="ip">Intellectual Property</option>
            <option value="criminal">Criminal Defense</option>
          </select>
        </div>
      </div>
    </div>
  );
}