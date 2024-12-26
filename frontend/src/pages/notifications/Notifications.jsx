import React from 'react';
import { Bell, MessageCircle, Clock, Heart, User } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'message',
      content: 'Ahmet Yılmaz size mesaj gönderdi',
      time: '5 dakika önce',
      read: false
    },
    {
      id: 2,
      type: 'credit',
      content: '2 saat kredi kazandınız',
      time: '1 saat önce',
      read: false
    },
    {
      id: 3,
      type: 'like',
      content: 'Zeynep Kaya hizmetinizi beğendi',
      time: '2 saat önce',
      read: true
    },
    {
      id: 4,
      type: 'follow',
      content: 'Emily Johnson sizi takip etmeye başladı',
      time: '3 saat önce',
      read: true
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'message':
        return <MessageCircle className="h-5 w-5 text-blue-600" />;
      case 'credit':
        return <Clock className="h-5 w-5 text-green-600" />;
      case 'like':
        return <Heart className="h-5 w-5 text-red-600" />;
      case 'follow':
        return <User className="h-5 w-5 text-purple-600" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Bildirimler</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            Tümünü Okundu İşaretle
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center space-x-4 p-4 rounded-lg ${
                notification.read ? 'bg-white' : 'bg-blue-50'
              }`}
            >
              <div className="flex-shrink-0">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <p className={`text-gray-900 ${!notification.read && 'font-medium'}`}>
                  {notification.content}
                </p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}