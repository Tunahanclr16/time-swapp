import React from 'react';
import { Clock, Star, Award } from 'lucide-react';

export default function Profile() {
  const user = {
    name: "Ahmet Yılmaz",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    location: "İstanbul",
    timeBalance: 25,
    rating: 4.8,
    completedProjects: 15,
    skills: ["Web Tasarım", "UI/UX", "React", "Node.js"],
    about: "5 yıllık deneyimli web geliştirici. Modern ve kullanıcı dostu arayüzler tasarlıyorum.",
    services: [
      {
        id: 1,
        title: "Web Sitesi Tasarımı",
        category: "Teknoloji",
        duration: 4,
        rating: 5.0
      },
      // Add more services as needed
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center space-x-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500">{user.location}</p>
              
              <div className="mt-4 flex space-x-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{user.timeBalance} saat</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  <span>{user.rating} puan</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 mr-2 text-green-600" />
                  <span>{user.completedProjects} proje</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">Hakkımda</h2>
            <p className="mt-2 text-gray-600">{user.about}</p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Yetenekler</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">Verilen Hizmetler</h2>
            <div className="mt-4 grid gap-4">
              {user.services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{service.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-500">{service.category}</span>
                      <span>•</span>
                      <span className="text-sm text-gray-500">{service.duration} saat</span>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 mr-1" />
                    <span>{service.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}