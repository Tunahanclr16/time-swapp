import React, { useState } from 'react';
import ServicesList from '../../components/dashboard/ServicesList';
import ServiceFilters from '../../components/dashboard/ServiceFilters';

export default function Dashboard() {
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    category: 'all',
    minPrice: '',
    maxPrice: '',
    sort: 'recent'
  });

  // Örnek veriler - Gerçek uygulamada API'den gelecek
  const services = [
    {
      id: 1,
      type: 'Freelance',
      title: 'Web Development',
      description: 'Full stack web development services',
      duration: 60,
      provider: 'John Doe',
      providerImage: '/images/avatars/avatar-1.jpg',
      image: '/images/services/web-dev.jpg',
      category: 'Development',
      location: 'Remote',
      rating: 4.8
    },
    {
      id: 2,
      type: 'Time Exchange',
      title: 'Graphic Design',
      description: 'Professional graphic design services',
      duration: 120,
      provider: 'Jane Smith',
      providerImage: '/images/avatars/avatar-2.jpg',
      image: '/images/services/design.jpg',
      category: 'Design',
      location: 'İstanbul',
      rating: 4.5
    },
    {
      id: 3,
      type: 'Freelance',
      title: 'Language Tutoring',
      description: 'English language tutoring sessions',
      duration: 45,
      provider: 'Mike Wilson',
      providerImage: '/images/avatars/avatar-3.jpg',
      image: '/images/services/tutoring.jpg',
      category: 'Education',
      location: 'Online',
      rating: 4.9
    }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sol Kolon - Filtreler */}
        <div className="md:w-64 flex-shrink-0">
          <ServiceFilters
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Sağ Kolon - Hizmet Listesi */}
        <div className="flex-1">
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
              <select className="px-4 py-2 border rounded-lg text-sm" defaultValue="all">
                <option value="all">All Categories</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="education">Education</option>
              </select>
              <select className="px-4 py-2 border rounded-lg text-sm" defaultValue="recent">
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <ServicesList services={services} />
        </div>
      </div>
    </div>
  );
}
