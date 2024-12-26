import React from 'react';
import { Users, Clock, Award, Smile } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Aktif Üye'
    },
    {
      icon: Clock,
      value: '50,000+',
      label: 'Saat Takas'
    },
    {
      icon: Award,
      value: '25,000+',
      label: 'Tamamlanan Proje'
    },
    {
      icon: Smile,
      value: '98%',
      label: 'Memnuniyet'
    }
  ];

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="h-8 w-8 text-blue-200 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}