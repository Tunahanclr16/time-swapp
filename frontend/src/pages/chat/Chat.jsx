import React from 'react';
import { Search, Send } from 'lucide-react';

export default function Chat() {
  const messages = [
    {
      id: 1,
      sender: "Ahmet Yılmaz",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      message: "Merhaba, web sitesi projesi hakkında konuşabilir miyiz?",
      time: "14:30",
      isSender: false
    },
    {
      id: 2,
      sender: "Siz",
      message: "Tabii ki, nasıl yardımcı olabilirim?",
      time: "14:31",
      isSender: true
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)]">
      {/* Chat list */}
      <div className="w-full lg:w-1/3 border-r bg-white lg:border-r-0 lg:border-b  lg:rounded-l-lg lg:rounded-tr-lg">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Mesajlarda ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          {/* Chat list items */}
          {/* Buraya chat listesi eklenebilir */}
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat header */}
        <div className="p-4 bg-white border-b">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              alt="Chat partner"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">Ahmet Yılmaz</h3>
              <p className="text-sm text-gray-500">Web Tasarımcı</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-200px)]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-end space-x-2 max-w-md ${message.isSender ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {!message.isSender && (
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <div>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.isSender
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-900'
                    }`}
                  >
                    <p>{message.message}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {message.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="p-4 bg-white border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Mesajınızı yazın..."
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}