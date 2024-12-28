import React from 'react';

export default function PackageDetails({ packages, onPackageChange }) {
  return (
    <div className="space-y-6 border-t pt-4">
      <h2 className="text-lg font-semibold mb-4">Paket Detayları</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['basic', 'standard', 'premium'].map((pkg) => (
          <div key={pkg} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-3 capitalize">{pkg}</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1">Fiyat (TL)</label>
                <input
                  type="number"
                  value={packages[pkg].price}
                  onChange={(e) => onPackageChange(pkg, 'price', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Teslim Süresi (Gün)</label>
                <input
                  type="number"
                  value={packages[pkg].delivery}
                  onChange={(e) => onPackageChange(pkg, 'delivery', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Paket Açıklaması</label>
                <textarea
                  value={packages[pkg].description}
                  onChange={(e) => onPackageChange(pkg, 'description', e.target.value)}
                  className="w-full p-2 border rounded"
                  rows="3"
                  placeholder="Pakete dahil özellikler..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
