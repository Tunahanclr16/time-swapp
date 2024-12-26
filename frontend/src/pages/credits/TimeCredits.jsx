import React from 'react';
import { Clock, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react';

export default function TimeCredits() {
  const transactions = [
    {
      id: 1,
      type: 'earned',
      amount: 2,
      description: 'Web tasarım hizmeti',
      date: '2024-03-15',
      from: 'Mehmet Yılmaz'
    },
    {
      id: 2,
      type: 'spent',
      amount: 1,
      description: 'İngilizce dersi',
      date: '2024-03-14',
      to: 'Emily Johnson'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Toplam Bakiye</h3>
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600 mt-2">25 Saat</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Kazanılan</h3>
              <ArrowDownLeft className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600 mt-2">35 Saat</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Harcanan</h3>
              <ArrowUpRight className="h-6 w-6 text-red-600" />
            </div>
            <p className="text-2xl font-bold text-red-600 mt-2">10 Saat</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">İşlem Geçmişi</h2>
          <button className="flex items-center text-blue-600 hover:text-blue-700">
            <History className="h-5 w-5 mr-1" />
            Tümünü Gör
          </button>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'earned' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.type === 'earned' ? (
                    <ArrowDownLeft className={`h-5 w-5 ${
                      transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  ) : (
                    <ArrowUpRight className={`h-5 w-5 ${
                      transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">
                    {transaction.type === 'earned' ? `Gönderen: ${transaction.from}` : `Alan: ${transaction.to}`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'earned' ? '+' : '-'}{transaction.amount} Saat
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}