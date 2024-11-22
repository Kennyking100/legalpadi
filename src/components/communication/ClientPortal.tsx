import React from 'react';
import { MessageSquare, Paperclip, Send } from 'lucide-react';

const messages = [
  {
    id: 1,
    sender: 'Sarah Wilson',
    role: 'Attorney',
    content: 'Hello Mr. Smith, I've reviewed the latest documents from opposing counsel. We should discuss their settlement offer.',
    timestamp: '10:30 AM',
    isClient: false,
  },
  {
    id: 2,
    sender: 'John Smith',
    role: 'Client',
    content: 'Thank you for the update. When would be a good time to discuss?',
    timestamp: '11:15 AM',
    isClient: true,
  },
];

export default function ClientPortal() {
  return (
    <div className="bg-white shadow rounded-lg flex flex-col h-[600px]">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Client Communication</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isClient ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-lg rounded-lg p-4 ${
                  message.isClient
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-sm">{message.sender}</span>
                  <span className="text-xs opacity-75">({message.role})</span>
                </div>
                <p className="text-sm">{message.content}</p>
                <div className="mt-1 text-xs opacity-75 text-right">
                  {message.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-gray-500">
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            className="flex-1 input-primary"
            placeholder="Type your message..."
          />
          <button className="btn-primary p-2">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}