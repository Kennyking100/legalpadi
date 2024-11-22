import React from 'react';
import CaseList from '../components/cases/CaseList';
import CaseFilters from '../components/cases/CaseFilters';

export default function CasesPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Case Management</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and track all your legal cases in one place
        </p>
      </div>
      
      <CaseFilters />
      <CaseList />
    </div>
  );
}