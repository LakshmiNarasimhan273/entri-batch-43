import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-xl font-black tracking-tighter">
          BR<span className="text-purple-700">.</span>F
        </Link>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-10">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-gray-50 border-none rounded-full py-2 px-10 text-sm focus:ring-1 focus:ring-purple-200 outline-none"
          />
          <span className="absolute left-4 top-2.5 text-gray-400 text-xs">🔍</span>
        </div>
      </div>

      <div className="flex items-center gap-6 text-gray-700">
        
        <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
          <img src="https://ui-avatars.com/api/?name=User&background=581c87&color=fff" alt="profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;