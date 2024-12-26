import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ChatSidebar from '../chat/ChatSidebar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex">
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>
        
        <aside className="hidden lg:block">
          <ChatSidebar />
        </aside>
      </div>
    </div>
  );
}