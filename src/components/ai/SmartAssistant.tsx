import React, { useState } from 'react';
import { Brain, MessageSquare, Sparkles } from 'lucide-react';

interface Suggestion {
  type: 'response' | 'action' | 'document';
  content: string;
  context?: string;
}

export default function SmartAssistant() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    {
      type: 'response',
      content: 'Based on the settlement offer, I recommend scheduling a client meeting to discuss the terms. Would you like me to draft a response?',
      context: 'Re: Settlement Offer'
    },
    {
      type: 'action',
      content: 'The statute of limitations for filing the counter-claim expires in 15 days. Consider prioritizing this task.',
      context: 'Deadline Alert'
    },
    {
      type: 'document',
      content: 'Similar case precedent found: "Smith v. Enterprise Corp" - Contains relevant arguments for non-compete enforcement.',
      context: 'Research'
    }
  ]);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Brain className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">Smart Assistant</h2>
        </div>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start">
              {suggestion.type === 'response' && (
                <MessageSquare className="h-5 w-5 text-blue-500 mt-1" />
              )}
              {suggestion.type === 'action' && (
                <Sparkles className="h-5 w-5 text-yellow-500 mt-1" />
              )}
              {suggestion.type === 'document' && (
                <Brain className="h-5 w-5 text-purple-500 mt-1" />
              )}
              <div className="ml-3">
                <div className="text-xs font-medium text-gray-500 mb-1">
                  {suggestion.context}
                </div>
                <p className="text-sm text-gray-900">{suggestion.content}</p>
              </div>
            </div>
            <div className="mt-3 flex justify-end space-x-3">
              <button className="btn-secondary text-xs">Dismiss</button>
              <button className="btn-primary text-xs">Take Action</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}