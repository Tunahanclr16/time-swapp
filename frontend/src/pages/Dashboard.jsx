import React from 'react';
import ServiceList from '../components/dashboard/ServiceList';
import { Search, Sliders, TrendingUp, Users, Clock } from 'lucide-react';

export default function Dashboard() {
  const categories = [
    { id: 1, name: 'Teknoloji', count: 145 },
    { id: 2, name: 'Eğitim', count: 98 },
    { id: 3, name: 'Tasarım', count: 76 },
    { id: 4, name: 'Dil', count: 54 },
    { id: 5, name: 'Müzik', count: 32 }
  ];

  const stats = [
    { id: 1, title: 'Aktif Kullanıcı', value: '2,450', icon: Users, color: 'blue' },
    { id: 2, title: 'Toplam Saat', value: '14,280', icon: Clock, color: 'green' },
    { id: 3, title: 'Başarılı Takas', value: '3,677', icon: TrendingUp, color: 'purple' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">
            Yeteneklerinizi Paylaşın, Zaman Kazanın
          </h1>
          <p className="text-blue-100 mb-6">
            Zaman Takası platformunda binlerce kişi yeteneklerini paylaşarak yeni beceriler kazanıyor.
            Siz de topluluğumuza katılın!
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Hangi hizmeti arıyorsunuz?"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            <button className="absolute right-2 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <Sliders className="h-4 w-4 mr-2" />
              Filtrele
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Categories Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Popüler Kategoriler</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
            >
              <p className="font-medium text-gray-900">{category.name}</p>
              <p className="text-sm text-gray-500">{category.count} hizmet</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <ServiceList />
    </div>
  );
}