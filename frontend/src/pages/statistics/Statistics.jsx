import React from 'react';
import { Clock, Star, Award, TrendingUp, Users } from 'lucide-react';

export default function Statistics() {
  const stats = {
    totalHours: 45,
    averageRating: 4.8,
    completedServices: 15,
    activeServices: 3,
    totalConnections: 28
  };

  const recentActivities = [
    {
      id: 1,
      type: 'service',
      title: 'Web Sitesi Tasarımı',
      date: '2024-03-15',
      hours: 4,
      rating: 5
    },
    {
      id: 2,
      type: 'received',
      title: 'İngilizce Dersi',
      date: '2024-03-14',
      hours: 2,
      rating: 4.5
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">İstatistikler</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Toplam Saat</h3>
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <p className="mt-2 text-2xl font-bold text-blue-600">{stats.totalHours}</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Ortalama Puan</h3>
              <Star className="h-5 w-5 text-yellow-600" />
            </div>
            <p className="mt-2 text-2xl font-bold text-yellow-600">{stats.averageRating}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Tamamlanan</h3>
              <Award className="h-5 w-5 text-green-600" />
            </div>
            <p className="mt-2 text-2xl font-bold text-green-600">{stats.completedServices}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Son Aktiviteler</h3>
        
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  activity.type === 'service' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {activity.type === 'service' ? (
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Users className="h-5 w-5 text-green-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{activity.hours} saat</span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="h-4 w-4" />
                  <span>{activity.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}