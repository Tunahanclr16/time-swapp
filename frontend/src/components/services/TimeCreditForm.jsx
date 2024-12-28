import React from 'react';
import { Clock, Calendar, Star } from 'lucide-react';

export default function TimeCreditForm({ timeCredit, onChange }) {
  return (
    <div className="space-y-6 border-t pt-4">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Zaman Takası Detayları</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sunulan Hizmet */}
        <div className="space-y-4 p-4 border rounded-lg bg-white">
          <h3 className="font-medium flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            Sunacağınız Hizmet
          </h3>
          
          <div>
            <label className="block text-sm font-medium mb-1">Hizmet Türü</label>
            <input
              type="text"
              name="serviceOffered"
              value={timeCredit.serviceOffered}
              onChange={onChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Örn: Web Sitesi Tasarımı"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Süre (Saat)</label>
            <input
              type="number"
              name="hoursOffered"
              value={timeCredit.hoursOffered}
              onChange={onChange}
              className="w-full p-3 border rounded-lg"
              placeholder="2"
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Uygunluk</label>
            <select
              name="availabilityOffered"
              value={timeCredit.availabilityOffered}
              onChange={onChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Seçiniz</option>
              <option value="flexible">Esnek</option>
              <option value="weekdays">Hafta İçi</option>
              <option value="weekends">Hafta Sonu</option>
              <option value="evening">Akşam Saatleri</option>
            </select>
          </div>
        </div>

        {/* İstenen Hizmet */}
        <div className="space-y-4 p-4 border rounded-lg bg-white">
          <h3 className="font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4 text-green-500" />
            İstediğiniz Hizmet
          </h3>
          
          <div>
            <label className="block text-sm font-medium mb-1">Hizmet Türü</label>
            <input
              type="text"
              name="serviceNeeded"
              value={timeCredit.serviceNeeded}
              onChange={onChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Örn: Logo Tasarımı"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Süre (Saat)</label>
            <input
              type="number"
              name="hoursNeeded"
              value={timeCredit.hoursNeeded}
              onChange={onChange}
              className="w-full p-3 border rounded-lg"
              placeholder="2"
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tercih Ettiğiniz Zaman</label>
            <select
              name="availabilityNeeded"
              value={timeCredit.availabilityNeeded}
              onChange={onChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Seçiniz</option>
              <option value="flexible">Esnek</option>
              <option value="weekdays">Hafta İçi</option>
              <option value="weekends">Hafta Sonu</option>
              <option value="evening">Akşam Saatleri</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium mb-2">Zaman Takası Nasıl Çalışır?</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
          <li>Her iki taraf da belirtilen süre kadar hizmet sunar</li>
          <li>Hizmetler karşılıklı olarak tamamlandıktan sonra takas gerçekleşir</li>
          <li>Takas süresi boyunca platform üzerinden iletişim kurabilirsiniz</li>
          <li>Her iki taraf da hizmeti tamamladığını onaylamalıdır</li>
        </ul>
      </div>
    </div>
  );
}
