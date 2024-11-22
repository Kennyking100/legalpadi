import React from 'react';
import Calendar from '../components/calendar/Calendar';

export default function CalendarPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your schedule and appointments
        </p>
      </div>
      <Calendar />
    </div>
  );
}