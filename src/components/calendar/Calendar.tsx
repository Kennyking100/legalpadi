import React from 'react';
import { Calendar as CalendarIcon, Clock, User } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Client Meeting - Smith vs. Johnson Corp',
    type: 'meeting',
    time: '09:00 AM - 10:00 AM',
    date: '2024-03-25',
    participants: ['John Smith', 'Sarah Wilson'],
  },
  {
    id: 2,
    title: 'Hearing - Brown Estate Settlement',
    type: 'hearing',
    time: '02:00 PM - 04:00 PM',
    date: '2024-03-25',
    location: 'Superior Court - Room 304',
  },
  {
    id: 3,
    title: 'Document Review - Tech Solutions IP',
    type: 'task',
    time: '11:00 AM - 12:00 PM',
    date: '2024-03-26',
    assignedTo: 'Sarah Wilson',
  },
];

export default function Calendar() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Calendar</h2>
          <button className="btn-primary">
            Add Event
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                    <div className="mt-1 space-y-1">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      {event.location && (
                        <p className="text-sm text-gray-500">{event.location}</p>
                      )}
                      {event.participants && (
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {event.participants.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full
                    ${
                      event.type === 'hearing'
                        ? 'bg-red-100 text-red-800'
                        : event.type === 'meeting'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                >
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}