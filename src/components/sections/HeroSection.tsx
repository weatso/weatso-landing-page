'use client'
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
      
      {/* FALLBACK CORE GLOW (Pengganti Video 3D Sementara) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-blue-900/30 via-purple-900/10 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none mix-blend-screen" />

      {/* OVERLAY Teks */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="container mx-auto px-6 relative z-10 mt-16 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-5xl"
        >
          {/* Eyebrow Text */}
          <div className="mb-8 flex items-center gap-4 justify-center md:justify-start">
            <div className="h-[1px] w-8 md:w-16 bg-blue-500" />
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-blue-400 uppercase">
              Bespoke Digital Engineering
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1] mb-10 text-white">
            ARCHITECTING <br />
            <span className="text-gray-400">THE UNBREAKABLE.</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12">
            Teknologi bukan sekadar alat; ia adalah fondasi keberlangsungan bisnis. WEATSO merancang arsitektur sistem presisi tinggi untuk ekosistem yang menuntut skala, keamanan absolut, dan keunggulan kompetitif.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center md:items-start">
            <button className="relative group overflow-hidden px-8 py-4 border border-white/20 bg-white/[0.03] text-white text-sm font-bold uppercase tracking-wider backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <span className="relative z-10">Jadwalkan Konsultasi</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}