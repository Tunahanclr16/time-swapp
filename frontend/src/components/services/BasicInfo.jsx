import React from 'react';
import { Tag } from 'lucide-react';

export default function BasicInfo({ formData, onChange }) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Temel Bilgiler</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">İlan Başlığı</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Örn: Web Sitesi Tasarımı"
          />
          <p className="text-xs text-gray-500 mt-1">Dikkat çekici ve açıklayıcı bir başlık seçin</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <select
            name="category"
            value={formData.category}
            onChange={onChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Kategori Seçin</option>
            <option value="software">Yazılım Geliştirme</option>
            <option value="design">Tasarım</option>
            <option value="writing">İçerik Yazarlığı</option>
            <option value="marketing">Pazarlama</option>
            <option value="translation">Çeviri</option>
            <option value="education">Eğitim</option>
            <option value="consulting">Danışmanlık</option>
            <option value="other">Diğer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Açıklama</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            className="w-full p-3 border rounded-lg"
            rows="4"
            placeholder="Hizmetinizi detaylı açıklayın..."
          />
          <p className="text-xs text-gray-500 mt-1">
            Deneyiminizi, yaklaşımınızı ve sunduğunuz değeri açıklayın
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Yetenekler</span>
            </div>
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={onChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Örn: JavaScript, React, UI Design"
          />
          <p className="text-xs text-gray-500 mt-1">
            Virgülle ayırarak ilgili yeteneklerinizi ekleyin
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Çalışma Şekli</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="workLocation"
                value="remote"
                checked={formData.workLocation === 'remote'}
                onChange={onChange}
                className="mr-2"
              />
              Uzaktan
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="workLocation"
                value="onsite"
                checked={formData.workLocation === 'onsite'}
                onChange={onChange}
                className="mr-2"
              />
              Yerinde
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="workLocation"
                value="hybrid"
                checked={formData.workLocation === 'hybrid'}
                onChange={onChange}
                className="mr-2"
              />
              Karma
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
