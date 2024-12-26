import React from 'react';
import { User, Mail, Lock, Bell, Trash2 } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ayarlar</h2>
        
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profil Ayarları
            </h3>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Ahmet Yılmaz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Konum</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="İstanbul"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Hakkımda</label>
                <textarea
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                  defaultValue="5 yıllık deneyimli web geliştirici."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Bildirim Ayarları
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">E-posta Bildirimleri</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Uygulama İçi Bildirimler</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Lock className="h-5 w-5 mr-2" />
              Güvenlik
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Lock className="h-5 w-5" />
                <span>Şifre Değiştir</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Mail className="h-5 w-5" />
                <span>E-posta Değiştir</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center text-red-600">
              <Trash2 className="h-5 w-5 mr-2" />
              Hesap Silme
            </h3>
            <p className="text-gray-600 mb-4">
              Hesabınızı silmek geri alınamaz bir işlemdir. Tüm verileriniz kalıcı olarak silinecektir.
            </p>
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              <Trash2 className="h-5 w-5" />
              <span>Hesabı Sil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}