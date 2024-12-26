import React from 'react';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function Orders() {
  const orders = [
    {
      id: 1,
      title: "Web Sitesi Tasarımı",
      provider: "Ahmet Yılmaz",
      duration: 4,
      status: "active",
      date: "2024-03-15",
      deadline: "2024-03-20"
    },
    {
      id: 2,
      title: "İngilizce Dersi",
      provider: "Emily Johnson",
      duration: 2,
      status: "pending",
      date: "2024-03-14"
    },
    {
      id: 3,
      title: "Logo Tasarımı",
      provider: "Zeynep Kaya",
      duration: 3,
      status: "completed",
      date: "2024-03-10",
      rating: 5
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return (
          <span className="flex items-center text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4 mr-1" />
            Devam Ediyor
          </span>
        );
      case 'completed':
        return (
          <span className="flex items-center text-green-600 bg-green-100 px-3 py-1 rounded-full">
            <CheckCircle className="h-4 w-4 mr-1" />
            Tamamlandı
          </span>
        );
      case 'pending':
        return (
          <span className="flex items-center text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            <AlertCircle className="h-4 w-4 mr-1" />
            Onay Bekliyor
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Siparişlerim</h2>
        
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{order.title}</h3>
                  <p className="text-sm text-gray-500">Sağlayan: {order.provider}</p>
                </div>
                {getStatusBadge(order.status)}
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-1" />
                    <span>{order.duration} saat</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{order.date}</span>
                </div>
                
                {order.status === 'active' && (
                  <div className="text-sm text-gray-500">
                    Bitiş: {order.deadline}
                  </div>
                )}
                
                {order.status === 'completed' && (
                  <div className="flex items-center text-yellow-500">
                    {[...Array(order.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                )}
                
                {order.status === 'pending' && (
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Onayla
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      Reddet
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}