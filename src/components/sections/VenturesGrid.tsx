"use client";
import React from "react";
import { motion } from "framer-motion";
import {Code2, Monitor, Cuboid, HeartHandshake, ArrowUpRight
} from "lucide-react";

// Ganti color dengan className text color yang sesuai
const ventures = [
  {
    id: "weatso-service",
    name: "Weatso Service",
    category: "IT Consultant",
    desc: "Transformasi digital presisi. Web App, Software, & Sistem Informasi.",
    icon: Code2,
    gradient: "from-blue-600 to-indigo-600",
    textColor: "text-blue-600"
  },
  {
    id: "weatso-developer",
    name: "Weatso Developer",
    category: "SaaS Product",
    desc: "Produk digital B2B siap pakai dengan model lisensi & langganan.",
    icon: Monitor,
    gradient: "from-purple-600 to-fuchsia-600",
    textColor: "text-purple-600"
  },
  {
    id: "co-labz",
    name: "CO-Labz",
    category: "Virtual Studio",
    desc: "Pengembang aset Roblox, peta virtual, dan pengalaman 3D interaktif.",
    icon: Cuboid,
    gradient: "from-pink-500 to-rose-500",
    textColor: "text-pink-600"
  },
  {
    id: "invitin",
    name: "Invitin",
    category: "Lifestyle",
    desc: "Platform undangan pernikahan digital dengan estetika premium.",
    icon: HeartHandshake,
    gradient: "from-orange-500 to-amber-500",
    textColor: "text-orange-600"
  }
];

const VenturesGrid = () => {
  return (
    <section id="ventures" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header Compact */}
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 tracking-tight">Our Ventures</h2>
            <div className="h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"/>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-md text-left">
            Empat pilar utama yang menggerakkan ekosistem inovasi Weatso.
          </p>
        </div>

        {/* Grid Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-[380px] md:h-[420px] bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              {/* Image Area */}
              <div className={`h-[55%] w-full bg-gradient-to-br ${venture.gradient} relative overflow-hidden`}>
                 {/* Noise CSS Native (Ringan) */}
                 <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <venture.icon size={20} className={venture.textColor} />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-grow bg-white">
                <span className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${venture.textColor}`}>
                  {venture.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {venture.name}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {venture.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VenturesGrid;