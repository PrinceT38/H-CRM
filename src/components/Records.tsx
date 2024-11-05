import React from 'react';
import { FileText, Download, Share2, Filter } from 'lucide-react';

const Records = () => {
  const records = [
    {
      id: 1,
      patient: 'Emma Thompson',
      type: 'Lab Results',
      date: '2024-02-15',
      department: 'Cardiology',
      doctor: 'Dr. Sarah Wilson',
      size: '2.4 MB'
    },
    {
      id: 2,
      patient: 'James Wilson',
      type: 'X-Ray Report',
      date: '2024-02-10',
      department: 'Radiology',
      doctor: 'Dr. Michael Chen',
      size: '5.1 MB'
    },
    {
      id: 3,
      patient: 'Sofia Rodriguez',
      type: 'Prescription',
      date: '2024-02-05',
      department: 'General Medicine',
      doctor: 'Dr. Emily Davis',
      size: '1.2 MB'
    },
    {
      id: 4,
      patient: 'David Chen',
      type: 'Treatment Plan',
      date: '2024-01-30',
      department: 'Orthopedics',
      doctor: 'Dr. James Wilson',
      size: '3.7 MB'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Medical Records</h1>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FileText className="h-5 w-5 mr-2" />
            Upload Record
          </button>
        </div>
      </div>

      {/* Records Grid */}
      <div className="grid grid-cols-1 gap-6">
        {records.map((record) => (
          <div key={record.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{record.type}</h3>
                  <p className="text-sm text-gray-500">{record.patient}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Department</dt>
                <dd className="mt-1 text-sm text-gray<boltAction type="file" filePath="src/components/Records.tsx">-900">{record.department}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Doctor</dt>
                <dd className="mt-1 text-sm text-gray-900">{record.doctor}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Date</dt>
                <dd className="mt-1 text-sm text-gray-900">{record.date}</dd>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">File size: {record.size}</span>
                <button className="font-medium text-blue-600 hover:text-blue-500">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Records;