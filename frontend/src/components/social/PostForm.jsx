import React, { useState } from 'react';
import { Image, Link, Smile, Send } from 'lucide-react';
import MediaPreview from './MediaPreview';
import ActionButton from './ActionButton';

export default function PostForm({ onPostCreated }) {
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post creation logic here
    setContent('');
    setMedia(null);
    onPostCreated?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <textarea
          className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Ne düşünüyorsunuz?"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      
      {media && <MediaPreview media={media} onRemove={() => setMedia(null)} />}

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <ActionButton icon={Image} type="file" onChange={(e) => setMedia(e.target.files[0])} />
          <ActionButton icon={Link} onClick={() => {}} />
          <ActionButton icon={Smile} onClick={() => {}} />
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          disabled={!content && !media}
        >
          <Send className="h-4 w-4" />
          <span>Paylaş</span>
        </button>
      </div>
    </form>
  );
}