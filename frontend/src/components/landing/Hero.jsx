import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Yeteneklerinizi Paylaşın,
              <span className="block text-blue-200">Zamanınızı Değerlendirin</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-lg mx-auto lg:mx-0">
              Zaman Takası ile yeteneklerinizi paylaşın, başkalarının yeteneklerinden faydalanın. 
              Para yerine zaman kredisi kullanarak hizmet alışverişi yapın.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/register"
                className="px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Hemen Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Nasıl Çalışır?
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
              alt="People collaborating"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}