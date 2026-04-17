import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-[#faf9f6] px-6">
      <div className="max-w-2xl mx-auto text-center">
        
        <div className="mb-8">
          <h2 className="text-5xl text-gray-800 mb-1" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Contact Us
          </h2>
          <div className="w-8 h-[1px] bg-[#d4af37] mx-auto mb-3"></div>
          
          
          <p className="text-[11px] text-gray-600 max-w-md mx-auto leading-relaxed">
            If you have any questions or need further assistance, <br />
            please don't hesitate to reach out to us.
          </p>
        </div>

        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="space-y-0.5">
            <h3 className="text-[9px] font-bold uppercase tracking-widest text-[#d4af37]">Inquiry</h3>
            <p className="text-sm text-gray-800 font-medium">Ahmad Khan</p>
            <p className="text-gray-500 text-[10px]">+92 300 1234567</p>
          </div>

          <div className="space-y-0.5">
            <h3 className="text-[9px] font-bold uppercase tracking-widest text-[#d4af37]">Coordination</h3>
            <p className="text-sm text-gray-800 font-medium">Sara Malik</p>
            <p className="text-gray-500 text-[10px]">+92 321 7654321</p>
          </div>
        </div>

       
        <div className="pt-6 border-t border-gray-200/50">
          <h3 className="text-[9px] font-bold uppercase tracking-widest text-[#d4af37] mb-2">Venue Address</h3>
          <p className="text-gray-600 text-xs leading-tight max-w-xs mx-auto italic font-serif">
            Pearl Continental Hotel, Mall Road, Lahore.
          </p>
        </div>

        
        <div className="mt-8">
          <p className="text-[9px] text-gray-300 uppercase tracking-widest">
            We look forward to welcoming you!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;