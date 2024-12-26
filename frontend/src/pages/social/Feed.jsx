import React from 'react';
import PostList from '../../components/social/PostList';
import CreatePost from '../../components/social/CreatePost';

export default function Feed() {
  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost />
      <div className="mt-8">
        <PostList />
      </div>
    </div>
  );
}