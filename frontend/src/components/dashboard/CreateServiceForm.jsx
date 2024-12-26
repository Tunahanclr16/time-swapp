import React, { useState } from 'react';

export default function CreateServiceForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle service creation logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Yeni Hizmet Oluştur</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Hizmet Başlığı</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Açıklama</label>
          <textarea
            className="mt-1 block w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="4"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Süre (Saat)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kategori</label>
          <select
            className="mt-1 block w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Kategori Seçin</option>
            <option value="egitim">Eğitim</option>
            <option value="teknoloji">Teknoloji</option>
            <option value="tasarim">Tasarım</option>
            <option value="dil">Dil</option>
            <option value="muzik">Müzik</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Hizmet Oluştur
        </button>
      </form>
    </div>
  );
}