// components/NavBar.tsx
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className=" bg-gray-800 p-4 rounded-tr-lg "> 
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-white text-xl font-bold cursor-pointer">Logo</span>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center">
          {/* Amount button */}
          <button className="hidden md:flex bg-gray-700 text-white px-4 py-2 rounded-full mr-4 flex items-center">
            ₹1,000,000
            <svg className="ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Wallet button */}
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full ml-4 md:ml-0">
            Wallet
          </button>
          {/* Notification icon */}
          <div className="ml-4">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C18.805 15.195 18 14.105 18 13V9c0-2.486-1.356-4.686-3.5-5.74A1.994 1.994 0 0013 2H11a1.994 1.994 0 00-1.5.74C7.356 4.314 6 6.514 6 9v4c0 1.105-.805 2.195-1.595 2.595L3 17h5m7 0v1a3 3 0 11-6 0v-1m7 0H9" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
