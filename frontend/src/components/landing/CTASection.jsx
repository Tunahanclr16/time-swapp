import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="bg-blue-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Hemen Başlayın
        </h2>
        <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
          Yeteneklerinizi paylaşın, ihtiyacınız olan hizmetleri alın. 
          Zaman Takası ile yeni fırsatları keşfedin.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/register"
            className="px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Ücretsiz Üye Ol
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}