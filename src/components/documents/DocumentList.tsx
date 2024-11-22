import React from 'react';
import { FileText, Download, Eye, MoreVertical } from 'lucide-react';

const documents = [
  {
    id: 1,
    name: 'Complaint.pdf',
    type: 'Legal Document',
    size: '2.4 MB',
    uploadedBy: 'Sarah Wilson',
    uploadedAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Evidence_Exhibit_A.pdf',
    type: 'Evidence',
    size: '1.8 MB',
    uploadedBy: 'John Davis',
    uploadedAt: '2024-01-16',
  },
  {
    id: 3,
    name: 'Witness_Statement.docx',
    type: 'Statement',
    size: '890 KB',
    uploadedBy: 'Sarah Wilson',
    uploadedAt: '2024-01-18',
  },
];

export default function DocumentList() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Case Documents</h2>
          <button className="btn-primary">
            Upload Document
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {documents.map((doc) => (
            <li key={doc.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center min-w-0">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{doc.type}</span>
                      <span className="mx-2">•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-gray-500">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}