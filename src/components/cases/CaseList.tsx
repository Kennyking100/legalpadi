import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Calendar, User, Tag, MoreVertical } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'Smith vs. Johnson Corp',
    caseNumber: 'CV-2024-0123',
    client: 'John Smith',
    status: 'Active',
    type: 'Corporate Litigation',
    nextHearing: '2024-03-25',
    priority: 'High'
  },
  {
    id: 2,
    title: 'Brown Estate Settlement',
    caseNumber: 'PR-2024-0456',
    client: 'Sarah Brown',
    status: 'Pending',
    type: 'Estate Planning',
    nextHearing: '2024-03-30',
    priority: 'Medium'
  },
  {
    id: 3,
    title: 'Tech Solutions IP Dispute',
    caseNumber: 'IP-2024-0789',
    client: 'Tech Solutions LLC',
    status: 'Discovery',
    type: 'Intellectual Property',
    nextHearing: '2024-04-05',
    priority: 'High'
  }
];

export default function CaseList() {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Cases</h2>
          <button className="btn-primary">
            New Case
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Hearing</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cases.map((case_) => (
              <tr 
                key={case_.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/cases/${case_.id}`)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{case_.title}</div>
                      <div className="text-sm text-gray-500">{case_.caseNumber}</div>
                      <div className="text-sm text-gray-500">{case_.type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-900">{case_.client}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {case_.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-900">{case_.nextHearing}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${case_.priority === 'High' ? 'bg-red-100 text-red-800' : 
                      case_.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'}`}>
                    {case_.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button 
                    className="text-gray-400 hover:text-gray-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle menu actions
                    }}
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}