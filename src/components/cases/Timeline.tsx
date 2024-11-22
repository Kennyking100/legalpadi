import React from 'react';
import { Clock, MessageSquare, FileText, Gavel } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'document',
    content: 'Filed Motion for Summary Judgment',
    user: 'Sarah Wilson',
    date: '2024-03-20 14:30',
    icon: FileText,
  },
  {
    id: 2,
    type: 'message',
    content: 'Client meeting scheduled for case review',
    user: 'John Davis',
    date: '2024-03-19 11:00',
    icon: MessageSquare,
  },
  {
    id: 3,
    type: 'hearing',
    content: 'Preliminary hearing completed',
    user: 'Hon. Michael Roberts',
    date: '2024-03-15 09:30',
    icon: Gavel,
  },
];

export default function Timeline() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Activity Timeline</h2>
      
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <activity.icon className="h-5 w-5 text-gray-500" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-500">{activity.content}</p>
                      <p className="mt-1 text-xs text-gray-400">By {activity.user}</p>
                    </div>
                    <div className="text-right text-xs whitespace-nowrap text-gray-500">
                      <Clock className="inline-block h-4 w-4 mr-1" />
                      {activity.date}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}