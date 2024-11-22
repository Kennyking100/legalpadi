import React from 'react';
import DocumentList from '../components/documents/DocumentList';

export default function DocumentsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage all your legal documents
        </p>
      </div>
      <DocumentList />
    </div>
  );
}