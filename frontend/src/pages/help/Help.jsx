import React from 'react';
import { HelpCircle, MessageCircle, Send } from 'lucide-react';

export default function Help() {
  const faqs = [
    {
      question: "Zaman kredisi nasıl kazanılır?",
      answer: "Diğer kullanıcılara hizmet sunarak zaman kredisi kazanabilirsiniz. Her hizmet için belirlediğiniz süre kadar kredi kazanırsınız."
    },
    {
      question: "Nasıl hizmet ekleyebilirim?",
      answer: "Profilinizden veya ana sayfadaki 'Hizmet Ekle' butonunu kullanarak yeni bir hizmet oluşturabilirsiniz."
    },
    {
      question: "Hizmet kalitesi nasıl denetleniyor?",
      answer: "Her hizmet sonrası kullanıcılar birbirlerini değerlendirir. Yüksek puanlar ve olumlu yorumlar kaliteyi gösterir."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Yardım Merkezi</h2>
        
        <div className="grid gap-6">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Sıkça Sorulan Sorular</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">{faq.question}</h4>
                    <p className="mt-1 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Canlı Destek</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <p className="text-gray-600">Destek ekibimiz size yardımcı olmak için hazır.</p>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <MessageCircle className="h-5 w-5" />
                <span>Sohbeti Başlat</span>
              </button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Geri Bildirim</h3>
            <div className="space-y-4">
              <textarea
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Görüş ve önerilerinizi bizimle paylaşın..."
              ></textarea>
              <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Send className="h-5 w-5" />
                <span>Gönder</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}