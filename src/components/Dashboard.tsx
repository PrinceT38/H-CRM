import React from 'react';
import { Users, Calendar, Activity, TrendingUp, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Patients', value: '2,847', icon: Users, trend: '+12.5%' },
    { label: 'Appointments Today', value: '47', icon: Calendar, trend: '+5.2%' },
    { label: 'Active Cases', value: '156', icon: Activity, trend: '-2.4%' },
    { label: 'Recovery Rate', value: '94%', icon: TrendingUp, trend: '+1.2%' },
  ];

  const recentAppointments = [
    { id: 1, patient: 'Sarah Johnson', time: '09:00 AM', type: 'Check-up', status: 'Completed' },
    { id: 2, patient: 'Michael Chen', time: '10:30 AM', type: 'Follow-up', status: 'In Progress' },
    { id: 3, patient: 'Emily Davis', time: '11:45 AM', type: 'Consultation', status: 'Scheduled' },
    { id: 4, patient: 'Robert Wilson', time: '02:15 PM', type: 'Treatment', status: 'Scheduled' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${index === 2 ? 'bg-red-50' : 'bg-blue-50'}`}>
                  <Icon className={`h-6 w-6 ${index === 2 ? 'text-red-500' : 'text-blue-500'}`} />
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm font-medium ${
                  stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend}
                </span>
                <span className="text-sm text-gray-600"> vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Appointments */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Today's Appointments</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4 pr-6">Patient</th>
                  <th className="pb-4 pr-6">Time</th>
                  <th className="pb-4 pr-6">Type</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="py-4 pr-6">
                      <div className="flex items-center">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={`https://images.unsplash.com/photo-${1500000000000 + appointment.id}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                          alt=""
                        />
                        <span className="ml-3 text-sm font-medium text-gray-900">
                          {appointment.patient}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {appointment.time}
                      </div>
                    </td>
                    <td className="py-4 pr-6">
                      <span className="text-sm text-gray-900">{appointment.type}</span>
                    </td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        appointment.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : appointment.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;