import React from 'react';
import meetImg from '../assets/meet.jpg'; 
import engagementImg from '../assets/engagement.jpg';

const StorySection = ({ image, title, date, description, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 mb-20`}>
      
      <div className="w-full md:w-1/2 overflow-hidden rounded-sm shadow-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
        />
      </div>

  
      <div className="w-full md:w-1/2 space-y-4 px-6">
        <span className="text-[#d4af37] font-medium tracking-[0.2em] text-xs uppercase">{date}</span>
        <h3 className="text-4xl" style={{ fontFamily: "'Great Vibes', cursive" }}>{title}</h3>
        <p className="text-gray-600 leading-relaxed font-light italic">
          "{description}"
        </p>
        <div className={`h-[1px] w-12 bg-gray-300 ${reverse ? 'ml-auto' : ''}`}></div>
      </div>
    </div>
  );
};

const Story = () => {
  const stories = [
    {
      title: "How We Met",
      date: "January 12, 2022",
      description: "It all started with a simple 'hello' at a coffee shop. Who knew that a random rainy afternoon would lead us to this beautiful journey together.",
      image: meetImg,
      reverse: false
    },
    {
      title: "The Proposal",
      date: "August 24, 2024",
      description: "Under the starlit sky and besides the calm ocean, he asked the question that changed our lives forever. It was a simple 'Yes' and a million emotions.",
      image: engagementImg,
      reverse: true
    }
  ];

  return (
    <section id="story" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
      
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>Our Love Story</h2>
          <p className="uppercase tracking-[0.4em] text-[10px] text-gray-400">A journey of thousand miles begins with a single step</p>
        </div>

       
        <div>
          {stories.map((item, index) => (
            <StorySection key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;