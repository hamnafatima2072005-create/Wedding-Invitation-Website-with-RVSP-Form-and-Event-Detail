import React from 'react';
import weddingImg from '../assets/hero.jpg';
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen w-full bg-[#f3f0e7] overflow-hidden">
     
      <div className="w-full md:w-1/2 h-1/2 md:h-full object-cover">
        

     <img 
        src={weddingImg} 
         alt="Wedding Couple" 
         className="w-full h-full object-cover shadow-lg"
   />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 text-center space-y-6">
        <p className="text-gray-600 uppercase tracking-[0.2em] text-sm font-medium">
          Together with their families,
        </p>
        
      
        <h1 
          className="text-3xl md:text-3xl text-[#1a1a1a]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Mark & Ashley
        </h1>

        <p className="text-gray-600 italic text-lg">
          invite you to celebrate their marriage
        </p>

        <div className="py-4 border-y border-gray-300 w-64 my-4">
          <p className="font-bold tracking-widest text-sm uppercase">
            Saturday, November 15, 2025
          </p>
          <p className="text-gray-500 text-sm mt-1">
            at 1 o'clock in the afternoon
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;