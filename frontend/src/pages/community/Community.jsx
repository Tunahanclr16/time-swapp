import React from 'react';
import { Users, Calendar, MapPin, Clock } from 'lucide-react';

export default function Community() {
  const events = [
    {
      id: 1,
      title: "Topluluk Kodlama Günü",
      description: "Birlikte kod yazıp deneyimlerimizi paylaşacağız.",
      date: "2024-03-20",
      time: "14:00",
      location: "Online",
      participants: 15,
      maxParticipants: 20,
      category: "Teknoloji",
      timeCredit: 2
    },
    {
      id: 2,
      title: "Dil Değişim Buluşması",
      description: "İngilizce-Türkçe pratik yapma etkinliği.",
      date: "2024-03-22",
      time: "18:00",
      location: "Kadıköy, İstanbul",
      participants: 8,
      maxParticipants: 12,
      category: "Dil",
      timeCredit: 1.5
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Topluluk Etkinlikleri</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Etkinlik Oluştur
          </button>
        </div>

        <div className="grid gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {event.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">{event.title}</h3>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600">
                    <Clock className="h-5 w-5 mr-1" />
                    <span>{event.timeCredit} saat</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date} {event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{event.participants}/{event.maxParticipants} katılımcı</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=32&h=32&fit=crop`}
                      alt="Participant"
                    />
                  ))}
                  {event.participants > 3 && (
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs text-gray-600">
                      +{event.participants - 3}
                    </div>
                  )}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Katıl
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}