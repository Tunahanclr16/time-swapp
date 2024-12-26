import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Clock, MapPin, Tag } from 'lucide-react';

export default function PostCard({ post }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">{post.user.name}</h3>
            <p className="text-sm text-gray-500">{post.user.profession}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {post.timeCredits} saat
          </span>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Service Title */}
      <div className="px-4 pb-2">
        <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
      </div>

      {/* Service Details */}
      <div className="px-4 py-2 flex items-center space-x-4 text-sm text-gray-600">
        <span className="flex items-center">
          <Tag className="h-4 w-4 mr-1" />
          {post.category}
        </span>
        <span className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          {post.location}
        </span>
      </div>

      {/* Service Description */}
      <div className="px-4 py-2">
        <p className="text-gray-800">{post.description}</p>
      </div>

      {/* Image Gallery */}
      {post.images && post.images.length > 0 && (
        <div className="relative mt-2">
          <img
            src={post.images[currentImageIndex]}
            alt="Service"
            className="w-full h-64 object-cover"
          />
          {post.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {post.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? 'bg-blue-600' : 'bg-white'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="px-4 py-3 border-t flex justify-between">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-gray-600">
            <Heart className="h-5 w-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        <button
          onClick={() => setShowContact(!showContact)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          İletişime Geç
        </button>
      </div>

      {/* Contact Form */}
      {showContact && (
        <div className="px-4 py-3 border-t">
          <form className="space-y-4">
            <textarea
              placeholder="Mesajınız..."
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Mesaj Gönder
            </button>
          </form>
        </div>
      )}
    </div>
  );
}