import React, { useState } from 'react';
import { Clock, Bell, MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeBalance = 25; // This would come from your state management

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/home" className="text-2xl font-bold text-blue-600">
              Zaman Takası
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-600">{timeBalance} Saat</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/home/notifications" className="relative p-2 text-gray-600 hover:text-blue-600">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Link>
              
              <Link to="/home/chat" className="relative p-2 text-gray-600 hover:text-blue-600">
                <MessageCircle className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  2
                </span>
              </Link>
              
              <Link to="/home/profile" className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Profilim</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="p-2 text-gray-600 hover:text-blue-600">
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md rounded-lg mt-2">
            <Link to="/home/notifications" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Bildirimler</Link>
            <Link to="/home/chat" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Mesajlar</Link>
            <Link to="/home/profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Profilim</Link>
          </div>
        )}
      </div>
    </nav>
  );
}