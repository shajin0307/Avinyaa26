import { useState } from "react";
import { MapPin, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useOutletContext } from "react-router-dom";

const Contact = () => {
  const { isDark } = useOutletContext() || { isDark: true };

  // Dynamic styles based on theme
  const containerClass = isDark ? "bg-[#2a0a10]/60 border-rose-500/20" : "bg-white/40 border-black/10";
  const textClass = isDark ? "text-white" : "text-gray-900";
  const subTextClass = isDark ? "text-rose-200/70" : "text-gray-600";

  return (
    <div className={`min-h-screen pt-32 pb-20 px-6 font-display overflow-hidden ${isDark ? 'text-white bg-[#0f0000]' : 'text-gray-800 bg-gray-50'}`}>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? 'border-rose-500/30 bg-rose-900/20' : 'border-rose-500/20 bg-rose-100'} mb-6`}>
          <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-red-500' : 'bg-red-600'} animate-pulse`}></span>
          <span className={`text-xs font-bold tracking-[0.25em] uppercase ${isDark ? 'text-rose-300' : 'text-rose-700'}`}>Get In Touch</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
          Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">Avinyaa</span>
        </h1>

        <p className={`text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto ${subTextClass}`}>
          Reach out to our coordinators for support, partnerships, or general inquiries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

        {/* Contact Info Side */}
        <div className="space-y-12 h-full flex flex-col justify-center">
          <div className={`p-8 rounded-3xl backdrop-blur-md border ${containerClass} hover:border-rose-500/50 transition-all duration-300`}>
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-500" /> Visit Us
            </h3>
            <div className="space-y-2">
              <p className="text-xl font-bold font-display tracking-wide">R.M.D. ENGINEERING COLLEGE</p>
              <p className={subTextClass}>RSM Nagar, Kavaraipettai, Gummidipoondi Taluk,</p>
              <p className={subTextClass}>Thiruvallur District, Tamil Nadu - 601 206.</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            {[
              { icon: Instagram, href: "https://www.instagram.com/avinyaa26/" },
              { icon: FaWhatsapp, href: "https://chat.whatsapp.com/LqXgngbOwS7JyNqn5Bqvsq" }
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all hover:scale-110 ${isDark ? 'bg-white/5 border-white/10 hover:bg-rose-600 hover:border-rose-600' : 'bg-white border-gray-200 hover:bg-rose-600 hover:text-white'}`}>
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Coordinators List Side */}
        <div className={`p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl border shadow-2xl ${containerClass}`}>
          <h3 className="text-3xl font-black uppercase tracking-wider mb-8 text-center md:text-left">
            Coordinators
          </h3>

          <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {/* Core Committee */}
            <div className="pb-4 border-b border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-4">Core Committee</h4>
              <div className="grid gap-4">
                <ContactCard name="Kumari Selvi C" role="President" isDark={isDark} />
                <ContactCard name="Shajin S P" role="Vice President" isDark={isDark} />
                <ContactCard name="Mohammed Burhan K" role="Secretary" isDark={isDark} />
                <ContactCard name="Mahadiya Maheen K F" role="Joint Secretary" isDark={isDark} />
                <ContactCard name="Yuvaraj R" role="Treasurer" isDark={isDark} />
              </div>
            </div>

            {/* Office Bearers */}
            <div className="pb-4 border-b border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-4 mt-4">Office Bearers</h4>
              <div className="grid gap-4">
                <ContactCard name="Mathin Shack" role="Office Bearers" isDark={isDark} />
                <ContactCard name="Jothishwaran" role="Office Bearers" isDark={isDark} />
                <ContactCard name="Lakshmi Shri" role="Office Bearers" isDark={isDark} />
                <ContactCard name="Kamalika" role="Office Bearers" isDark={isDark} />
              </div>
            </div>

            {/* Event Heads */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-4 mt-4">Event Heads</h4>
              <div className="grid gap-4">
                <ContactCard name=" Kalyani | Vimalesh " role="Retro Decode" isDark={isDark} />
                <ContactCard name="Kamalika | Kanmani | Apparna R" role="Prompt Verse" isDark={isDark} />
                <ContactCard name="Ezhumalai | Sangeetha | Samreen" role="MindMatrix" isDark={isDark} />
                <ContactCard name="Ruchitha | Ssrutheega" role="Inno PaperX" isDark={isDark} />
                <ContactCard name="Lakshmi Shri | Samiksha" role="Havoc" isDark={isDark} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Live Map Section */}
      <div className={`mt-20 w-full rounded-[2.5rem] overflow-hidden border shadow-2xl relative ${isDark ? 'border-rose-500/20' : 'border-gray-200'}`}>
        <div className="relative w-full h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.16788775432!2d80.1408669748473!3d13.357416986959146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527f7b237307d1%3A0x83e20df3861276a1!2sR.M.D.%20Engineering%20College!5e0!3m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: isDark ? 'grayscale(100%) invert(90%) hue-rotate(180deg) contrast(1.2)' : 'grayscale(20%)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="R.M.D. Engineering College Location"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[6px] border-transparent rounded-[2.5rem] shadow-inner ring-1 ring-white/10"></div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ name, role, isDark }) => (
  <div className={`flex items-center justify-between p-4 rounded-xl border transition-all hover:scale-[1.02] ${isDark ? 'bg-white/5 border-white/10 hover:bg-rose-900/20 hover:border-rose-500/30' : 'bg-white border-gray-100 hover:shadow-md'}`}>
    <div>
      <h5 className="font-bold text-sm uppercase">{name}</h5>
      <p className={`text-xs uppercase tracking-wider font-bold ${isDark ? 'text-rose-300/70' : 'text-rose-600/70'}`}>{role}</p>
    </div>
  </div>
);

export default Contact;
