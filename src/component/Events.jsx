import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';

const Events = () => {
  const [showDesigner, setShowDesigner] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('royal');
  const [statusMsg, setStatusMsg] = useState("");

  const cardRef = useRef(null);

  const brideGroom = "Mark & Ashley";

const IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY;

  const templates = {
    royal:  { bg: '#fffdf7', border: '#d4af37', text: '#2c1810', font: 'serif' },
    modern: { bg: '#f9f5f1', border: '#e07a5f', text: '#3d405b', font: 'sans-serif' },
    dark:   { bg: '#1a1a1a', border: '#d4af37', text: '#ffffff', font: 'serif' }
  };

  const weddingEvents = [
    { id: 1, title: "Mehndi Night", date: "Nov 13, 2025", venue: "Lahore" },
    { id: 2, title: "The Barat", date: "Nov 14, 2025", venue: "Lahore" },
    { id: 3, title: "The Walima", date: "Nov 15, 2025", venue: "Lahore" }
  ];

  const toggleEvent = (event) => {
    if (selectedEvents.find(e => e.id === event.id)) {
      setSelectedEvents(selectedEvents.filter(e => e.id !== event.id));
    } else {
      setSelectedEvents([...selectedEvents, event].sort((a, b) => a.id - b.id));
    }
  };

  // ✅ NAVBAR CLICK SUPPORT
  useEffect(() => {
    window.openInvitationDesigner = () => setShowDesigner(true);
  }, []);

  const generateBase64 = async () => {
    const canvas = await html2canvas(cardRef.current, {
      useCORS: true,
      scale: 1
    });
    return canvas.toDataURL("image/png");
  };

  const uploadToImgbb = async (base64Full) => {
    const base64Data = base64Full.split(',')[1];
    const formData = new FormData();
    formData.append("image", base64Data);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    if (!data.success) throw new Error("Upload failed");
    return data.data.url;
  };

  const handleWhatsApp = async () => {
    if (!guestName.trim()) {
      alert("Mehman ka naam likhein!");
      return;
    }

    if (selectedEvents.length === 0) {
      alert("Kam az kam ek event select karein!");
      return;
    }

    try {
      setIsGenerating(true);
      setStatusMsg("Card ban raha hai...");

      const base64Full = await generateBase64();

      setStatusMsg("Image upload ho rahi hai...");
      const imageUrl = await uploadToImgbb(base64Full);

      setStatusMsg("WhatsApp open ho raha hai...");

      const message = `
💌 Wedding Invitation

Dear ${guestName},

You are invited to ${brideGroom} wedding 🎉

Events:
${selectedEvents
  .map(e => `• ${e.title} — ${e.date} | ${e.venue}`)
  .join('\n')}

Invitation Card:
${imageUrl}
`;

      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");

    } catch (error) {
      alert("Masla aa gaya: " + error.message);
    } finally {
      setStatusMsg("");
      setIsGenerating(false);
    }
  };

  const t = templates[activeTemplate];

  return (
    <section className="py-20 text-center px-4">
      <h2 className="text-4xl mb-6 font-serif text-[#2c1810]">
        Wedding Invitation
      </h2>

      <button
        onClick={() => setShowDesigner(true)}
        className="bg-[#d4af37] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#b8962e]"
      >
        DESIGN CARD
      </button>

      {showDesigner && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center p-6 overflow-y-auto z-50">

          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">

            {/* LEFT SIDE */}
            <div className="bg-white p-6 rounded-xl text-left shadow-xl">

              <h3 className="mb-3 font-bold text-lg">Guest Name</h3>
              <input
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full border-b-2 border-[#d4af37] p-2 mb-4 outline-none"
              />

              <h3 className="mb-3 font-bold text-lg">Select Events</h3>
              {weddingEvents.map(event => (
                <label key={event.id} className="block mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!selectedEvents.find(e => e.id === event.id)}
                    onChange={() => toggleEvent(event)}
                    className="accent-[#d4af37]"
                  />
                  <span className="ml-2">{event.title}</span>
                </label>
              ))}

              {statusMsg && <p className="mt-3 text-[#d4af37]">{statusMsg}</p>}

              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white w-full py-3 mt-4 rounded-lg"
              >
                📱 SEND VIA WHATSAPP
              </button>

              <button
                onClick={() => setShowDesigner(false)}
                className="mt-3 w-full text-gray-500"
              >
                Cancel
              </button>
            </div>

            {/* RIGHT SIDE (🔥 PREMIUM CARD) */}
            <div className="flex justify-center items-center">

              <div
                ref={cardRef}
                className="w-[350px] h-[520px] rounded-2xl shadow-2xl p-6 flex flex-col justify-center items-center text-center"
                style={{
                  backgroundColor: t.bg,
                  color: t.text,
                  fontFamily: t.font,
                  border: `3px solid ${t.border}`
                }}
              >
                <p className="text-xs tracking-widest uppercase opacity-70">
                  Together with their families
                </p>

                <h2 className="text-3xl font-bold my-2">
                  {brideGroom}
                </h2>

                <p className="text-sm opacity-70">
                  request the pleasure of
                </p>

                <h3 className="text-2xl my-2" style={{ color: t.border }}>
                  {guestName || "Guest Name"}
                </h3>

                <div className="w-16 border-t my-2" style={{ borderColor: t.border }}></div>

                {selectedEvents.length === 0 ? (
                  <p className="text-sm opacity-50 italic">
                    Events yahan show honge
                  </p>
                ) : (
                  selectedEvents.map(event => (
                    <div key={event.id} className="mb-2">
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-sm opacity-70">{event.date}</p>
                      <p className="text-sm opacity-50">{event.venue}</p>
                    </div>
                  ))
                )}

                <div className="w-16 border-t mt-3" style={{ borderColor: t.border }}></div>

                <p className="text-xs mt-2 tracking-widest opacity-60">
                  WITH LOVE 💛
                </p>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Events;