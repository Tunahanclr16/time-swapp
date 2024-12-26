import React from 'react';
import PostForm from '../../components/social/PostForm';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const navigate = useNavigate();

  const handlePostCreated = () => {
    navigate('/feed');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Yeni Gönderi Oluştur</h2>
        <PostForm onPostCreated={handlePostCreated} />
      </div>
    </div>
  );
}