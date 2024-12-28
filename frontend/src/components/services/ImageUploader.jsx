import React from 'react';
import { Upload } from 'lucide-react';

export default function ImageUploader({ images, onImageUpload, onRemoveImage }) {
  return (
    <div className="space-y-4 border-t pt-4">
      <h2 className="text-lg font-semibold mb-4">Görseller</h2>
      <div className="flex items-center space-x-4 overflow-x-auto pb-4">
        <label className="flex-shrink-0 flex items-center justify-center w-32 h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
          <div className="text-center">
            <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
            <span className="text-sm text-gray-500">Görsel Ekle</span>
          </div>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
          />
        </label>
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-32 h-32">
            <img
              src={URL.createObjectURL(image)}
              alt={`Preview ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => onRemoveImage(index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500">
        * En az 1 görsel yükleyin. Görseller net ve hizmetinizi iyi yansıtacak şekilde olmalıdır.
      </p>
    </div>
  );
}
