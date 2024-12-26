import React from 'react';
import { Clock, Users, Shield, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: 'Zaman Kredisi',
      description: 'Her hizmet için zaman kredisi kazanın ve harcayın. Para yerine zamanınızı değerlendirin.'
    },
    {
      icon: Users,
      title: 'Güçlü Topluluk',
      description: 'Binlerce yetenekli üyeden oluşan topluluğumuzla tanışın ve işbirliği yapın.'
    },
    {
      icon: Shield,
      title: 'Güvenli Platform',
      description: 'Güvenli ödeme sistemi ve kullanıcı değerlendirmeleriyle güvenle hizmet alın.'
    },
    {
      icon: Sparkles,
      title: 'Çeşitli Hizmetler',
      description: 'Yazılımdan tasarıma, eğitimden danışmanlığa kadar birçok alanda hizmet alın ve verin.'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Neden Zaman Takası?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Yeteneklerinizi değere dönüştürmenin en kolay yolu
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}