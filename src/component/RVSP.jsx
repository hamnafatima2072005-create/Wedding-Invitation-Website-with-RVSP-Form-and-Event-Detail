import React, { useState } from 'react';

const RSVP = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      const response = await fetch('http://localhost:5000/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Thank you ${formData.firstName}!  Your information has been successfully received. We look forward to seeing you!`);
        console.log("Success:", result);
      } else {
        alert("Connection established, but we couldn't save your data. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to connect to the backend server on port 5000. Please ensure 'node index.cjs' is running.");
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto border border-gray-100 p-8 md:p-16 shadow-sm bg-[#fdfcf8]">
        
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
            RSVP
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-semibold">
            Please respond by November 1st, 2025
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest mb-2 text-gray-500">First Name</label>
              <input 
                type="text" 
                required
                className="bg-transparent border-b border-gray-300 py-2 focus:border-black outline-none transition-colors"
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest mb-2 text-gray-500">Last Name</label>
              <input 
                type="text" 
                required
                className="bg-transparent border-b border-gray-300 py-2 focus:border-black outline-none transition-colors"
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest mb-2 text-gray-500">Email Address</label>
              <input 
                type="email" 
                required
                className="bg-transparent border-b border-gray-300 py-2 focus:border-black outline-none transition-colors"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest mb-2 text-gray-500">Number of Guests</label>
              <select 
                className="bg-transparent border-b border-gray-300 py-2 focus:border-black outline-none"
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 Person</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 Person</option>
                <option value="8">8 People</option>
                <option value="9">9 People</option>
                <option value="10">Small Group (10+)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-gray-500">Will you attend?</label>
            <div className="flex space-x-10">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="attending" value="yes" defaultChecked onChange={() => setFormData({...formData, attending: 'yes'})} />
                <span className="text-sm">Joyfully Attend</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="attending" value="no" onChange={() => setFormData({...formData, attending: 'no'})} />
                <span className="text-sm">Regretfully Decline</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-widest mb-2 text-gray-500">Message for the Couple</label>
            <textarea 
              rows="3" 
              placeholder="Any requirements or wishes?"
              className="bg-transparent border border-gray-200 p-4 focus:border-black outline-none transition-colors italic text-sm"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button 
              type="submit"
              className="bg-[#1a1a1a] text-white px-12 py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-white hover:text-black border border-black transition-all duration-300 shadow-md"
            >
              Submit Response
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default RSVP;