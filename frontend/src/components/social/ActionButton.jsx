import React from 'react';

export default function ActionButton({ icon: Icon, type, onChange, onClick }) {
  if (type === 'file') {
    return (
      <label className="p-2 text-gray-500 hover:text-blue-600 cursor-pointer rounded-full hover:bg-gray-100">
        <Icon className="h-5 w-5" />
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={onChange}
        />
      </label>
    );
  }

  return (
    <button
      type="button"
      className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100"
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}