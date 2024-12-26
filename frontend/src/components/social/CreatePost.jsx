import React, { useState } from 'react';
import { Image, Clock, Tag, MapPin, Send } from 'lucide-react';

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    timeCredits: '',
    category: '',
    location: '',
    skills: [],
    images: []
  });

  const categories = [
    'Web Geliştirme',
    'Mobil Uygulama',
    'Grafik Tasarım',
    'Dijital Pazarlama',
    'Video Düzenleme',
    'Yazı & Çeviri',
    'Müzik & Ses',
    'Eğitim & Danışmanlık'
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.images.length > 5) {
      alert('En fazla 5 görsel yükleyebilirsiniz');
      return;
    }
    
    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      file
    }));
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle service post creation logic here
    console.log(formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Yeni Hizmet İlanı</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hizmet Başlığı
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Örn: Web Sitesi Tasarımı ve Geliştirme"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Detaylı Açıklama
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Hizmetinizi detaylı bir şekilde açıklayın..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline-block h-4 w-4 mr-1" />
              Zaman Kredisi
            </label>
            <input
              type="number"
              min="1"
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Saat olarak"
              value={formData.timeCredits}
              onChange={(e) => setFormData({ ...formData, timeCredits: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Tag className="inline-block h-4 w-4 mr-1" />
              Kategori
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Kategori Seçin</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline-block h-4 w-4 mr-1" />
            Konum
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Şehir veya 'Remote'"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Görseller (Max 5)
          </label>
          <div className="grid grid-cols-5 gap-4 mb-4">
            {formData.images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm"
                  onClick={() => removeImage(index)}
                >
                  ×
                </button>
              </div>
            ))}
            {formData.images.length < 5 && (
              <label className="border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center cursor-pointer hover:border-blue-500">
                <Image className="h-6 w-6 text-gray-400" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Send className="h-5 w-5" />
          <span>İlanı Yayınla</span>
        </button>
      </form>
    </div>
  );
}