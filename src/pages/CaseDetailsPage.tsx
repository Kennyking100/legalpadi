import React from 'react';
import CaseDetails from '../components/cases/CaseDetails';
import ClientPortal from '../components/communication/ClientPortal';
import Calendar from '../components/calendar/Calendar';
import DocumentAnalysis from '../components/ai/DocumentAnalysis';
import CasePrediction from '../components/ai/CasePrediction';
import SmartAssistant from '../components/ai/SmartAssistant';

export default function CaseDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CaseDetails />
        </div>
        <div className="lg:col-span-1">
          <SmartAssistant />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentAnalysis />
        <CasePrediction />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Calendar />
        <ClientPortal />
      </div>
    </div>
  );
}