import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { ChevronDown, TrendingUp, Star, Clock } from 'lucide-react';

export default function ServiceList() {
  const [sortBy, setSortBy] = useState('popular');
  const [category, setCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: "Web Sitesi Tasarımı",
      description: "Modern ve responsive web sitesi tasarımı yapabilirim. UI/UX tasarım prensiplerini kullanarak kullanıcı dostu arayüzler oluşturuyorum.",
      duration: 4,
      provider: "Ahmet Yılmaz",
      providerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&h=400&fit=crop",
      category: "Teknoloji",
      location: "İstanbul",
      likes: 24,
      comments: 8,
      rating: 4.8
    },
    {
      id: 2,
      title: "İngilizce Konuşma Pratiği",
      description: "Native speaker ile birebir İngilizce konuşma pratiği. IELTS ve TOEFL sınavlarına hazırlık konusunda deneyimliyim.",
      duration: 2,
      provider: "Emily Johnson",
      providerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
      category: "Eğitim",
      location: "Online",
      likes: 15,
      comments: 5,
      rating: 4.9
    },
    {
      id: 3,
      title: "Yoga ve Meditasyon Dersleri",
      description: "Stres yönetimi ve mindfulness teknikleri. Başlangıç seviyesinden ileri seviyeye kadar yoga dersleri.",
      duration: 1,
      provider: "Zeynep Kaya",
      providerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=400&fit=crop",
      category: "Sağlık",
      location: "Ankara",
      likes: 32,
      comments: 12,
      rating: 5.0
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan Hizmetler</h2>
          <p className="text-gray-600 mt-1">Topluluğumuzun en çok tercih ettiği hizmetler</p>
        </div>
        
        <div className="flex space-x-4">
          <div className="relative">
            <select
              className="appearance-none bg-gray-50 border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Tüm Kategoriler</option>
              <option value="technology">Teknoloji</option>
              <option value="education">Eğitim</option>
              <option value="health">Sağlık</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
          </div>

          <div className="relative">
            <select
              className="appearance-none bg-gray-50 border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">En Popüler</option>
              <option value="new">En Yeni</option>
              <option value="rating">En Yüksek Puan</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          Daha Fazla Göster
        </button>
      </div>
    </div>
  );
}