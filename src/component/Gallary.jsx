import React from 'react';

import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';

const Gallery = () => {
  const images = [
    { src: g1, alt: "Couple 1", size: "col-span-1 row-span-2" }, 
    { src: g2, alt: "Details", size: "col-span-1 row-span-1" },
    { src: g6, alt: "Cake", size: "col-span-1 row-span-1" },     
    { src: g3, alt: "Ceremony", size: "col-span-1 row-span-1" },
    { src: g4, alt: "Couple 2", size: "col-span-2 row-span-1" }, 
    { src: g5, alt: "Ring", size: "col-span-1 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2">Captured Moments</p>
          <h2 className="text-4xl md:text-4xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Pre Wedding Photo Shoot</h2>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`${img.size} overflow-hidden rounded-sm group relative cursor-pointer`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;