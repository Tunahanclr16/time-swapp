import React from 'react';

export default function RevisionPolicy({ revisions, onRevisionsChange }) {
  return (
    <div className="space-y-4 border-t pt-4">
      <h2 className="text-lg font-semibold mb-4">Revizyon Politikası</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Revizyon Sayısı</label>
          <input
            type="number"
            name="count"
            value={revisions.count}
            onChange={onRevisionsChange}
            className="w-full p-3 border rounded-lg"
            placeholder="1"
            min="1"
          />
          <p className="text-xs text-gray-500 mt-1">Pakete dahil revizyon sayısı</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ekstra Revizyon Ücreti (TL)</label>
          <input
            type="number"
            name="extraPrice"
            value={revisions.extraPrice}
            onChange={onRevisionsChange}
            className="w-full p-3 border rounded-lg"
            placeholder="100"
            min="0"
          />
          <p className="text-xs text-gray-500 mt-1">Her ekstra revizyon için ücret</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Revizyon Politikası</label>
          <textarea
            name="policy"
            value={revisions.policy}
            onChange={onRevisionsChange}
            className="w-full p-3 border rounded-lg"
            rows="2"
            placeholder="Revizyon politikanızı açıklayın..."
          />
          <p className="text-xs text-gray-500 mt-1">Örn: "Her revizyon 2 iş günü içinde tamamlanır"</p>
        </div>
      </div>
    </div>
  );
}
