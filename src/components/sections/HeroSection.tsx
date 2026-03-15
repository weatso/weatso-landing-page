'use client'
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest uppercase border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            Bespoke Software Architecture
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
              ELITE ENGINES.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10">
            WEATSO adalah unit premium untuk solusi teknologi kustom. Kami mengubah ide kompleks menjadi infrastruktur digital yang tak terpatahkan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              Mulai Proyek Kustom
            </button>
            <button className="px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors">
              Lihat Arsitektur Kami
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}