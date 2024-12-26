import React from 'react';

export default function MediaPreview({ media, onRemove }) {
  return (
    <div className="mb-4 relative">
      <img
        src={URL.createObjectURL(media)}
        alt="Preview"
        className="rounded-lg max-h-64 w-auto"
      />
      <button
        type="button"
        className="absolute top-2 right-2 p-1 bg-gray-800 bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
        onClick={onRemove}
      >
        ×
      </button>
    </div>
  );
}