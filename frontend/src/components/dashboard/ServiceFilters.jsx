import React from 'react';
import { Search, Filter, Clock, DollarSign } from 'lucide-react';

export default function ServiceFilters({ filters, onFilterChange }) {
  const categories = [
    { id: 'all', name: 'Tüm Kategoriler' },
    { id: 'development', name: 'Yazılım Geliştirme' },
    { id: 'design', name: 'Tasarım' },
    { id: 'writing', name: 'İçerik Yazarlığı' },
    { id: 'marketing', name: 'Pazarlama' },
    { id: 'translation', name: 'Çeviri' },
    { id: 'education', name: 'Eğitim' },
    { id: 'consulting', name: 'Danışmanlık' }
  ];

  return (
    <div className="space-y-6">
      {/* Arama Çubuğu */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Hizmet ara..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
      </div>

      {/* Filtreler */}
      <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
        <div className="flex items-center gap-2 text-gray-700 mb-4">
          <Filter className="w-5 h-5" />
          <h3 className="font-medium">Filtreler</h3>
        </div>

        {/* Hizmet Tipi */}
        <div>
          <h4 className="text-sm font-medium mb-2">Hizmet Tipi</h4>
          <div className="flex flex-wrap gap-2">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm
                ${filters.type === 'all' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'}`}
              onClick={() => onFilterChange('type', 'all')}
            >
              <Star className="w-4 h-4" />
              Tümü
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm
                ${filters.type === 'timeExchange' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'}`}
              onClick={() => onFilterChange('type', 'timeExchange')}
            >
              <Clock className="w-4 h-4" />
              Zaman Takası
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm
                ${filters.type === 'freelance' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'}`}
              onClick={() => onFilterChange('type', 'freelance')}
            >
              <DollarSign className="w-4 h-4" />
              Freelance
            </button>
          </div>
        </div>

        {/* Kategoriler */}
        <div>
          <h4 className="text-sm font-medium mb-2">Kategori</h4>
          <select
            className="w-full p-2 rounded-lg border"
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Fiyat Aralığı (Freelance için) */}
        {filters.type !== 'timeExchange' && (
          <div>
            <h4 className="text-sm font-medium mb-2">Fiyat Aralığı (₺/sa)</h4>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 p-2 rounded-lg border"
                value={filters.minPrice}
                onChange={(e) => onFilterChange('minPrice', e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 p-2 rounded-lg border"
                value={filters.maxPrice}
                onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Sıralama */}
        <div>
          <h4 className="text-sm font-medium mb-2">Sıralama</h4>
          <select
            className="w-full p-2 rounded-lg border"
            value={filters.sort}
            onChange={(e) => onFilterChange('sort', e.target.value)}
          >
            <option value="recent">En Yeni</option>
            <option value="rating">En Yüksek Puan</option>
            <option value="priceAsc">Fiyat (Düşükten Yükseğe)</option>
            <option value="priceDesc">Fiyat (Yüksekten Düşüğe)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
