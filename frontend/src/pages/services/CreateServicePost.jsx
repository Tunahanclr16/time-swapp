import React, { useState } from 'react';
import { Clock, Tag, MapPin, Image as ImageIcon, X } from 'lucide-react';

export default function CreateServicePost() {
  const [formData, setFormData] = useState({
    postType: 'timeCredit', // Varsayılan olarak "Zaman Takası"
    title: '',
    description: '',
    timeCredit: '',
    category: '',
    location: '',
    availability: [],
    skills: '',
    images: [],
    tradeDetails: '' // Yeni alan: Zaman takası detayı
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

  const availabilityOptions = [
    'Hafta içi gündüz',
    'Hafta içi akşam',
    'Hafta sonu',
    'Esnek'
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
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Yeni Hizmet İlanı</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Zaman Takası veya Serbest Seçeneği */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              İlan Türü
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="postType"
                  value="timeCredit"
                  checked={formData.postType === 'timeCredit'}
                  onChange={(e) => setFormData({ ...formData, postType: e.target.value })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Zaman Takası</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="postType"
                  value="free"
                  checked={formData.postType === 'free'}
                  onChange={(e) => setFormData({ ...formData, postType: e.target.value })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Serbest</span>
              </label>
            </div>
          </div>

          {/* Hizmet Başlığı */}
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

          {/* Detaylı Açıklama */}
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

          {/* Zaman Kredisi ve Detaylar (Sadece Zaman Takası seçiliyse gösterilir) */}
          {formData.postType === 'timeCredit' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline-block h-4 w-4 mr-1" />
                  Zaman Kredisi (Saat)
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Kaç saat karşılığında?"
                  value={formData.timeCredit}
                  onChange={(e) => setFormData({ ...formData, timeCredit: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zaman Takası Detayları
                </label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  placeholder="Neyle zaman takası yapmak istediğinizi açıklayın..."
                  value={formData.tradeDetails}
                  onChange={(e) => setFormData({ ...formData, tradeDetails: e.target.value })}
                />
              </div>
            </>
          )}

          {/* Diğer Alanlar */}
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

          {/* Görseller */}
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
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {formData.images.length < 5 && (
                <label className="border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center cursor-pointer hover:border-blue-500">
                  <ImageIcon className="h-6 w-6 text-gray-400" />
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            İlanı Yayınla
          </button>
        </form>
      </div>
    </div>
  );
}
