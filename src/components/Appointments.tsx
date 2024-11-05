import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Plus } from 'lucide-react';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const appointments = [
    {
      id: 1,
      time: '09:00 AM',
      patient: 'John Smith',
      type: 'General Checkup',
      doctor: 'Dr. Sarah Wilson',
      status: 'Scheduled'
    },
    {
      id: 2,
      time: '10:30 AM',
      patient: 'Maria Garcia',
      type: 'Follow-up',
      doctor: 'Dr. Michael Chen',
      status: 'In Progress'
    },
    {
      id: 3,
      time: '11:45 AM',
      patient: 'Robert Johnson',
      type: 'Consultation',
      doctor: 'Dr. Emily Davis',
      status: 'Completed'
    },
    {
      id: 4,
      time: '02:15 PM',
      patient: 'Lisa Anderson',
      type: 'Treatment',
      doctor: 'Dr. James Wilson',
      status: 'Scheduled'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Plus className="h-5 w-5 mr-2" />
          New Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Calendar</h2>
            <CalendarIcon className="h-5 w-5 text-gray-400" />
          </div>
          {/* Calendar component would go here */}
          <div className="border rounded-lg p-4 text-center text-gray-500">
            Calendar Widget
          </div>
        </div>

        {/* Appointments List */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Today's Schedule</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-5 w-5" />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <li key={appointment.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{appointment.time}</div>
                      <div className="text-sm text-gray-500">{appointment.patient}</div>
                      <div className="text-sm text-gray-500">{appointment.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 text-right">
                      <div className="text-sm font-medium text-gray-900">{appointment.doctor}</div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        appointment.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : appointment.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Options</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appointments;