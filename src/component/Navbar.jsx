import React, { useState } from 'react';
import logoImg from '../assets/logo3.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky h-20 top-0 w-full z-50 bg-[#fdfcf8] border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-black">
        
        
        <div className="cursor-pointer">
          <a href="#home">
            <img className='h-15 w-auto object-contain' src={logoImg} alt="Wedding Logo" />
          </a>
        </div>

      
        <ul className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-700">
          <li className="hover:text-black transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-black transition">
            <a href="#story">Story</a>
          </li>

          {/* ✅ UPDATED EVENTS BUTTON */}
          <li
            className="hover:text-black transition cursor-pointer"
            onClick={() => window.openInvitationDesigner()}
          >
            Events
          </li>

          <li className="hover:text-black transition">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="hover:text-black transition text-[#d4af37]">
            <a href="#contact">Contact</a>
          </li>
          
          
          <li className="bg-[#1a1a1a] text-white px-5 py-2 rounded-sm hover:bg-gray-800 transition shadow-md">
            <a href="#rsvp">RSVP</a>
          </li>
        </ul>

        
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-black focus:outline-none text-2xl">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <ul className="md:hidden bg-[#fdfcf8] border-t border-gray-100 flex flex-col items-center space-y-5 py-8 animate-fadeIn">
          <li className="uppercase tracking-widest text-xs" onClick={() => setIsOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li className="uppercase tracking-widest text-xs" onClick={() => setIsOpen(false)}>
            <a href="#story">Story</a>
          </li>

          {/* ✅ UPDATED EVENTS (MOBILE) */}
          <li
            className="uppercase tracking-widest text-xs cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              window.openInvitationDesigner();
            }}
          >
            Events
          </li>

          <li className="uppercase tracking-widest text-xs font-bold text-black" onClick={() => setIsOpen(false)}>
            <a href="#rsvp">RSVP</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;