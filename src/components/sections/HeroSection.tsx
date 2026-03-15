"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Code2, Monitor, Cuboid, HeartHandshake } from "lucide-react";

// --- KOMPONEN ORBIT ITEM ---
const OrbitItem = ({ 
  icon: Icon, 
  color, 
  label, 
  progress, 
  offset, 
  radiusX = 260, // Lebar orbit (Kiri-Kanan)
  radiusY = 70   // Tinggi orbit (Atas-Bawah) -> Semakin kecil semakin gepeng (Eclipse)
}: { 
  icon: any, color: string, label: string, progress: MotionValue<number>, offset: number, radiusX?: number, radiusY?: number 
}) => {
  
    const angle = useTransform(progress, (val) => (val + offset) * (Math.PI / 180));
    const x = useTransform(angle, (a) => Math.cos(a) * radiusX);
    const y = useTransform(angle, (a) => Math.sin(a) * radiusY);
    const scale = useTransform(y, [-radiusY, radiusY], [0.75, 1.25]);
    const zIndex = useTransform(y, [-radiusY, radiusY], [10, 30]);
    const opacity = useTransform(y, [-radiusY, radiusY], [0.5, 1]);

  return (
      <motion.div style={{ x, y, scale, zIndex, opacity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        <div className="relative group">
          <div className={`w-14 h-14 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center transition-all`}>
            <Icon className={color} size={28} strokeWidth={1.5} />
          </div>
          <div className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap shadow-xl">
            {label}
          </div>
        </div>
      </motion.div>
  );
};

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const rawAngle = useTransform(scrollY, [0, 1000], [0, 360]); 
  const smoothAngle = useSpring(rawAngle, { stiffness: 40, damping: 20 });

  return (
    <section 
      id="home"
      ref={containerRef} 
      // PADDING MOBILE DIKURANGI: pt-24 (sebelumnya pt-28) biar lebih naik
      className="relative w-full max-w-[100vw] min-h-[85vh] flex flex-col md:flex-row items-center md:items-start justify-center bg-white px-6 md:px-12 pt-24 md:pt-40 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-100/50 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-purple-100/50 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      {/* TEXT AREA */}
      <div className="z-40 w-full md:w-5/12 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 md:pr-10 sticky top-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Scroll to Explore
          </div>
          
          {/* PERUBAHAN UKURAN FONT MOBILE: text-4xl (Cukup kecil untuk satu layar, cukup besar untuk terbaca) */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-2 md:mb-6">
            Weatso <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient bg-[length:200%_auto]">
              Holding.
            </span>
          </h1>

          <p className="text-sm md:text-lg text-gray-500 max-w-xs md:max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
            Sinergi teknologi, produk, dan kreativitas dalam satu poros presisi.
          </p>

          <div className="pt-4 md:pt-6 hidden md:block">
            <a href="#ventures" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:shadow-xl transition-all">
              Lihat Ventures
            </a>
          </div>
        </motion.div>
      </div>

      {/* ORBIT AREA */}
      {/* SCALE LOGIC: scale-[0.85] di mobile. 
          Ini akan membuat orbit AGAK TERPOTONG di layar HP biasa (390px), 
          tapi Center Logo (Weatso) tetap aman di tengah. Visualnya akan terlihat 'full'.
      */}
      <div className="w-full md:w-7/12 h-[300px] md:h-[600px] flex items-center justify-center relative mt-6 md:mt-0 scale-[0.85] md:scale-100 origin-center">
        
        {/* PUSAT ORBIT */}
        <motion.div 
          className="absolute w-28 h-28 md:w-40 md:h-40 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <div className="text-center">
             <span className="font-bold text-xl md:text-2xl tracking-tighter text-gray-900">WEATSO</span>
           </div>
        </motion.div>

        {/* Lintasan & Item */}
        <div className="absolute w-[520px] h-[140px] border border-dashed border-gray-300/60 rounded-[100%] transform -rotate-6 pointer-events-none z-0" />
        <div className="absolute w-[520px] h-[140px] transform -rotate-6 z-30 pointer-events-none">
          <OrbitItem icon={Code2} color="text-blue-600" label="Weatso Service" progress={smoothAngle} offset={90} />
          <OrbitItem icon={Monitor} color="text-purple-600" label="Weatso Developer" progress={smoothAngle} offset={180} />
          <OrbitItem icon={Cuboid} color="text-pink-600" label="CO-Labz" progress={smoothAngle} offset={270} />
          <OrbitItem icon={HeartHandshake} color="text-rose-600" label="Invitin" progress={smoothAngle} offset={0} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;