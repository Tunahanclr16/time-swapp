import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Clock, DollarSign, Star, Calendar, MessageCircle, 
  CheckCircle, AlertCircle, Users, Award
} from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');

  // Örnek veri - Gerçek uygulamada API'den gelecek
  const service = {
    id: 1,
    type: 'hybrid',
    title: 'Web Geliştirme ve UI/UX Tasarım',
    description: 'Modern ve kullanıcı dostu web siteleri geliştirme hizmeti. React, Vue.js ve diğer modern teknolojilerle çalışıyorum.',
    category: 'development',
    images: [
      '/images/services/web-dev-1.jpg',
      '/images/services/web-dev-2.jpg',
      '/images/services/web-dev-3.jpg'
    ],
    rating: 4.8,
    reviewCount: 47,
    completedJobs: 124,
    user: {
      id: 1,
      name: 'Ahmet Yılmaz',
      avatar: '/images/avatars/user-1.jpg',
      memberSince: '2023',
      responseTime: '2 saat',
      languages: ['Türkçe', 'İngilizce'],
      skills: ['React', 'Vue.js', 'UI/UX', 'Tailwind CSS']
    },
    timeCredit: {
      hoursOffered: 2,
      serviceOffered: 'Web Geliştirme',
      availability: 'Hafta içi'
    },
    packages: {
      basic: {
        name: 'Temel',
        price: 500,
        delivery: 3,
        revisions: 1,
        description: 'Temel web geliştirme hizmeti',
        features: [
          'Tek sayfa website',
          'Responsive tasarım',
          '1 revizyon hakkı',
          'Temel SEO'
        ]
      },
      standard: {
        name: 'Standart',
        price: 1000,
        delivery: 5,
        revisions: 2,
        description: 'Çok sayfalı web geliştirme hizmeti',
        features: [
          '5 sayfaya kadar website',
          'Responsive tasarım',
          '2 revizyon hakkı',
          'Gelişmiş SEO',
          'Sosyal medya entegrasyonu'
        ]
      },
      premium: {
        name: 'Premium',
        price: 2000,
        delivery: 7,
        revisions: 3,
        description: 'Tam kapsamlı web geliştirme hizmeti',
        features: [
          'Sınırsız sayfa',
          'Responsive tasarım',
          '3 revizyon hakkı',
          'Kapsamlı SEO',
          'Sosyal medya entegrasyonu',
          'Admin paneli',
          '1 ay ücretsiz destek'
        ]
      }
    },
    revisions: {
      included: 2,
      extraPrice: 200
    }
  };

  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol Kolon - Görsel ve Detaylar */}
        <div className="lg:col-span-2 space-y-8">
          {/* Görsel Galerisi */}
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={service.images[selectedImage]}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {service.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden flex-shrink-0 w-24 h-24
                    ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <img
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Sekmeler */}
          <div className="border-b">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors
                  ${activeTab === 'description' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Açıklama
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-2 font-medium text-sm border-b-2 transition-colors
                  ${activeTab === 'reviews' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Değerlendirmeler
              </button>
            </div>
          </div>

          {/* Sekme İçeriği */}
          <div className="space-y-6">
            {activeTab === 'description' ? (
              <>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Hizmet Detayları</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                {/* Zaman Takası Detayları */}
                {(service.type === 'timeExchange' || service.type === 'hybrid') && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Clock className="text-green-600" />
                      Zaman Takası Detayları
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Sunulan Hizmet</p>
                        <p className="font-medium">{service.timeCredit.serviceOffered}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Süre</p>
                        <p className="font-medium">{service.timeCredit.hoursOffered} saat</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Uygunluk</p>
                        <p className="font-medium">{service.timeCredit.availability}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Revizyon Politikası */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Revizyon Politikası</h3>
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-5 h-5" />
                      <span>Pakete dahil {service.revisions.included} revizyon hakkı</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <DollarSign className="text-blue-500 w-5 h-5" />
                      <span>Ekstra revizyon ücreti: {service.revisions.extraPrice}₺</span>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold">{service.rating}</span>
                  </div>
                  <div className="text-gray-500">
                    {service.reviewCount} değerlendirme
                  </div>
                </div>

                {/* Örnek Değerlendirmeler */}
                <div className="space-y-6">
                  {/* Burada değerlendirmeler listelenecek */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sağ Kolon - Paketler ve Satıcı Bilgisi */}
        <div className="space-y-6">
          {/* Paketler */}
          {(service.type === 'freelance' || service.type === 'hybrid') && (
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-medium mb-4">Paketler</h3>
              <div className="space-y-4">
                {Object.entries(service.packages).map(([key, pkg]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPackage(key)}
                    className={`w-full p-4 rounded-lg border text-left transition-all
                      ${selectedPackage === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'hover:border-gray-300'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{pkg.name}</span>
                      <span className="text-blue-600 font-medium">{pkg.price}₺</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                    <div className="text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {pkg.delivery} gün içinde teslimat
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Hizmeti Satın Al
              </button>
            </div>
          )}

          {/* Satıcı Bilgisi */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={service.user.avatar}
                alt={service.user.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-medium">{service.user.name}</h3>
                <p className="text-sm text-gray-500">
                  {service.user.memberSince}'den beri üye
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MessageCircle className="w-4 h-4" />
                <span>Ortalama yanıt süresi: {service.user.responseTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4" />
                <span>{service.completedJobs} tamamlanan iş</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>Konuştuğu diller: {service.user.languages.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award className="w-4 h-4" />
                <span>Yetenekler: {service.user.skills.join(', ')}</span>
              </div>
            </div>

            <button className="w-full mt-6 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Mesaj Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}