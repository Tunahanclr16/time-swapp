import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Clock, Star, MapPin, MessageCircle, Heart } from 'lucide-react';

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
      type: "Freelance",
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
      type: "Time Exchange",
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
      type: "Freelance",
      location: "Ankara",
      likes: 32,
      comments: 12,
      rating: 5.0
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Browse Services</h1>
        <div className="mt-4 flex gap-4">
          <button className="px-4 py-2 bg-[#0F172A] text-white rounded-full text-sm font-medium">
            All Services
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">
            Freelance
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">
            Time Exchange
          </button>
        </div>
        <div className="mt-4 flex gap-4">
          <select 
            className="px-4 py-2 border rounded-lg text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="technology">Teknoloji</option>
            <option value="education">Eğitim</option>
            <option value="health">Sağlık</option>
          </select>
          <select
            className="px-4 py-2 border rounded-lg text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Servis Görseli */}
            <div className="aspect-[4/3] relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-3 py-1.5 rounded-full text-sm font-medium
                  ${service.type === 'Freelance' ? 'bg-[#0F172A] text-white' : 'bg-[#0F766E] text-white'}`}
                >
                  {service.type}
                </span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-white">
                  {service.category}
                </span>
              </div>
            </div>

            {/* Servis İçeriği */}
            <div className="p-5">
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{service.duration} minutes</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {service.description}
              </p>

              {/* Alt Bilgiler */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src={service.providerImage}
                    alt={service.provider}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {service.provider}
                    </p>
                    <p className="text-xs text-gray-500">
                      {service.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}