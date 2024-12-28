import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

export default function TermsAndSubmit({ terms, onTermsChange, onSubmit, isValid }) {
  return (
    <div className="space-y-6">
      {/* Validasyon Uyarıları */}
      {!isValid && (
        <div className="p-4 bg-red-50 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-red-800">Lütfen aşağıdaki alanları kontrol edin:</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-red-700">
              <li>En az bir görsel yüklemelisiniz</li>
              <li>Başlık ve açıklama alanları zorunludur</li>
              <li>Kategori seçmelisiniz</li>
              <li>Şartları ve koşulları kabul etmelisiniz</li>
            </ul>
          </div>
        </div>
      )}

      {/* Şartlar ve Koşullar */}
      <div className="space-y-4 border-t pt-4">
        <h2 className="text-lg font-semibold">Şartlar ve Koşullar</h2>
        
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              checked={terms}
              onChange={onTermsChange}
              className="mt-1 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">
              Platform kullanım şartlarını ve gizlilik politikasını okudum, kabul ediyorum.
              Paylaştığım bilgilerin doğruluğunu taahhüt ederim.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="communications"
              checked={terms}
              onChange={onTermsChange}
              className="mt-1 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">
              Platform üzerinden gelen bildirim ve mesajları kabul ediyorum.
              İstediğim zaman bildirim tercihlerimi güncelleyebileceğimi biliyorum.
            </span>
          </label>
        </div>
      </div>

      {/* Gönder Butonu */}
      <button
        type="submit"
        onClick={onSubmit}
        disabled={!terms || !isValid}
        className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                 disabled:bg-gray-400 disabled:cursor-not-allowed
                 flex items-center justify-center gap-2 font-medium"
      >
        <Check className="w-5 h-5" />
        İlanı Yayınla
      </button>

      <p className="text-center text-sm text-gray-500">
        İlanınız yayınlandıktan sonra 24 saat içinde incelenecek ve onaylanacaktır.
      </p>
    </div>
  );
}
