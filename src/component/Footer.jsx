import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        
        <div className="flex justify-center items-center space-x-4">
          <div className="h-[1px] w-12 bg-gray-200"></div>
          <span className="text-gray-300">♥</span>
          <div className="h-[1px] w-12 bg-gray-200"></div>
        </div>

    
        <div>
          <h2 className="text-4xl md:text-5xl text-[#1a1a1a]" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Mark & Ashley
          </h2>
          <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mt-4">
            Thank you for being part of our journey
          </p>
        </div>

       
        <div className="py-4">
          <span className="text-[#d4af37] text-sm font-medium tracking-widest">
            #MarkWedsAshley
          </span>
        </div>

       
        <ul className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
          <li><a href="#home" className="hover:text-black transition">Home</a></li>
          <li><a href="#story" className="hover:text-black transition">Story</a></li>
          <li><a href="#events" className="hover:text-black transition">Events</a></li>
          <li><a href="#gallery" className="hover:text-black transition">Gallery</a></li>
          <li><a href="#rsvp" className="hover:text-black transition text-black border-b border-black pb-1">RSVP</a></li>
        </ul>

       
        <div className="pt-10 border-t border-gray-50">
          <p className="text-[9px] text-gray-400 uppercase tracking-widest leading-loose">
            © 2025 Handcrafted with love for the Big Day <br />
            Designed by Hamna Fatima
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;