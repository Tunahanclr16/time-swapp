import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import axios from 'axios';

export default function ChatSidebar() {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            user: "Ahmet Yılmaz",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
            lastMessage: "Merhaba, web sitesi projesi hakkında...",
            time: "14:30",
            unread: 2
        },
        {
            id: 2,
            user: "Emily Johnson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            lastMessage: "Thank you for the lesson!",
            time: "Dün",
            unread: 0
        }
    ]);

    // API'den kullanıcıları çek

    return (
        <div className="w-80 border-r bg-white h-screen">
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

            <div className="overflow-y-auto h-[calc(100vh-88px)]">
                {conversations.map((conv) => (
                    <div
                        key={conv.id}
                        className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b"
                    >
                        <img
                            src={conv.avatar}
                            alt={conv.user}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="ml-4 flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium text-gray-900">{conv.user}</h3>
                                <span className="text-xs text-gray-500">{conv.time}</span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                        </div>
                        {conv.unread > 0 && (
                            <span className="ml-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {conv.unread}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <style>
                {`
                    .overflow-y-auto::-webkit-scrollbar {
                        width: 6px;
                    }

                    .overflow-y-auto::-webkit-scrollbar-thumb {
                        background-color: #cbd5e0;
                        border-radius: 3px;
                    }

                    .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                        background-color: #a0aec0;
                    }
                `}
            </style>
        </div>
    );
}