import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, MapPin, User, MessageCircle, Heart } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  
  // This would normally come from an API call using the id
  const service = {
    id: 1,
    title: "Web Sitesi Tasarımı",
    description: "Modern ve responsive web sitesi tasarımı yapabilirim. UI/UX tasarım prensiplerini kullanarak kullanıcı dostu arayüzler oluşturuyorum. Projenizin ihtiyaçlarına göre özelleştirilmiş çözümler sunuyorum.",
    duration: 4,
    provider: "Ahmet Yılmaz",
    providerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&h=400&fit=crop",
    category: "Teknoloji",
    location: "İstanbul",
    likes: 24,
    comments: 8,
    skills: ["React", "UI/UX", "Responsive Design"],
    rating: 4.8,
    completedProjects: 15
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-64 object-cover"
      />
      
      <div className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{service.title}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {service.category}
              </span>
              <div className="flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-1" />
                <span>{service.duration} saat</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{service.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
              <Heart className="h-5 w-5" />
              <span>{service.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
              <MessageCircle className="h-5 w-5" />
              <span>{service.comments}</span>
            </button>
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900">Hizmet Açıklaması</h2>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </div>
        
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900">Yetenekler</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {service.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-between border-t pt-8">
          <div className="flex items-center space-x-4">
            <img
              src={service.providerImage}
              alt={service.provider}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-900">{service.provider}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-2">⭐ {service.rating}</span>
                <span>•</span>
                <span className="ml-2">{service.completedProjects} proje tamamlandı</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Mesaj Gönder
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Teklif Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}