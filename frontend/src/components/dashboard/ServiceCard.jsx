import React from 'react';
import { Clock, User, MessageCircle, Heart } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {service.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{service.duration} saat</span>
              </div>
            </div>
            <p className="mt-2 text-gray-600 text-sm line-clamp-2">{service.description}</p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={service.providerImage}
              alt={service.provider}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">{service.provider}</span>
              <p className="text-xs text-gray-500">{service.location}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
              <Heart className="h-5 w-5" />
              <span className="text-sm">{service.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">{service.comments}</span>
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Teklif Ver
          </button>
        </div>
      </div>
    </div>
  );
}