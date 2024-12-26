import React from 'react';
import PostCard from './PostCard';

export default function PostList() {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Ahmet Yılmaz',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        profession: 'Web Geliştirici'
      },
      content: 'Yeni bir web projesi üzerinde çalışıyorum. React ve Tailwind CSS kullanarak modern bir arayüz tasarlıyorum.',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&h=400&fit=crop',
      timestamp: '2 saat önce',
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      user: {
        name: 'Zeynep Kaya',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        profession: 'UX Designer'
      },
      content: 'Bugün tamamladığım tasarım çalışmam. Kullanıcı deneyimini iyileştirmek için yeni fikirler üzerinde çalışıyorum.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      timestamp: '4 saat önce',
      likes: 45,
      comments: 12,
      shares: 5
    }
  ];

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}