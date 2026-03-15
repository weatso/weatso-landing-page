"use client";
import React from "react";
import { motion } from "framer-motion";

// Data Dummy Gambar (Nanti ganti src dengan URL gambar asli Anda)
const projectSnippets = [
  { id: 1, title: "Wedding Dashboard", type: "Web App" },
  { id: 2, title: "Roblox City Map", type: "Game Asset" },
  { id: 3, title: "Corp. Landing Page", type: "Website" },
  { id: 4, title: "3D Avatar Set", type: "Virtual Item" },
  { id: 5, title: "SaaS Analytics", type: "Dashboard" },
];

const VisualStream = () => {
  return (
    <section id="showcase" className="py-16 bg-[#F9F9F7] overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-6 mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Visual Craftsmanship</h2>
          <p className="text-gray-500 text-sm mt-1">Cuplikan estetika dari ekosistem kami.</p>
        </div>
        <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-600 animate-pulse">
          Live Stream
        </div>
      </div>

      {/* AUTO SCROLL CONTAINER */}
    <div className="relative w-full flex">
        <motion.div 
          className="flex gap-4 md:gap-8 pl-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Render 2x agar looping seamless */}
          {[...projectSnippets, ...projectSnippets].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              // PERUBAHAN: w-[85vw] untuk mobile (85% lebar layar HP), w-[350px] untuk desktop.
              className="relative w-[85vw] md:w-[350px] aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-full h-full bg-gradient-to-br ${
                idx % 2 === 0 ? "from-gray-100 to-gray-200" : "from-slate-100 to-slate-200"
              } relative`}>
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="text-6xl font-bold text-black">{item.id}</span>
                 </div>
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">{item.type}</span>
                <span className="text-white font-bold text-xl">{item.title}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisualStream;