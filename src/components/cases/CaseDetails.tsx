import React from 'react';
import { Calendar, FileText, User, Tag, Clock, MessageSquare, History } from 'lucide-react';
import Timeline from './Timeline';
import DocumentList from '../documents/DocumentList';

export default function CaseDetails() {
  const caseData = {
    id: 1,
    title: 'Smith vs. Johnson Corp',
    caseNumber: 'CV-2024-0123',
    client: 'John Smith',
    status: 'Active',
    type: 'Corporate Litigation',
    nextHearing: '2024-03-25',
    priority: 'High',
    description: 'Employment contract dispute regarding severance package and non-compete clause.',
    assignedTo: 'Sarah Wilson',
    judge: 'Hon. Michael Roberts',
    court: 'Superior Court of California',
    filingDate: '2024-01-15',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{caseData.title}</h2>
              <p className="text-sm text-gray-500 mt-1">Case Number: {caseData.caseNumber}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {caseData.status}
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-900">Client: {caseData.client}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-900">Next Hearing: {caseData.nextHearing}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-900">Type: {caseData.type}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-900">Assigned To: {caseData.assignedTo}</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-900">Court: {caseData.court}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-900">Filed: {caseData.filingDate}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Case Description</h3>
            <p className="mt-2 text-sm text-gray-600">{caseData.description}</p>
          </div>
        </div>

        <DocumentList />
        <Timeline />
      </div>

      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="btn-primary w-full justify-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Send Message
            </button>
            <button className="btn-secondary w-full justify-center">
              <History className="h-5 w-5 mr-2" />
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}