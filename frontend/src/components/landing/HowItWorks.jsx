import React from 'react';
import { UserPlus, Search, Handshake, Star } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Üye Olun',
      description: 'Hızlıca üye olun ve profilinizi oluşturun.'
    },
    {
      icon: Search,
      title: 'Hizmet Bulun',
      description: 'İhtiyacınız olan hizmeti arayın veya kendi hizmetinizi yayınlayın.'
    },
    {
      icon: Handshake,
      title: 'Anlaşın',
      description: 'Hizmet sağlayıcı ile iletişime geçin ve detayları belirleyin.'
    },
    {
      icon: Star,
      title: 'Değerlendirin',
      description: 'Hizmet sonrası karşılıklı değerlendirme yapın.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Nasıl Çalışır?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            4 kolay adımda zaman takasına başlayın
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}