'use client'
import { motion } from "framer-motion"

export default function Showcase() {
  return (
    <section id="work" className="py-24 px-6 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono text-blue-500 mb-4 tracking-widest uppercase">Proof of Execution</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            ENGINEERED FOR <br /> ABSOLUTE SCALE.
          </h3>
        </div>

        {/* Showcase Item 1 - Format Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Visual Placeholder (Ganti dengan Screenshot Mockup/Arsitektur Asli) */}
          <div className="md:col-span-7 h-[400px] md:h-[600px] bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
              [ Masukkan Mockup UI/UX atau Diagram Arsitektur Server di Sini ]
            </div>
          </div>

          {/* Konteks Teknis */}
          <div className="md:col-span-5 md:pl-10">
            <h4 className="text-3xl font-bold text-white mb-4">Enterprise POS & ERP Ecosystem</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sistem manajemen operasional kustom yang dirancang untuk menangani ribuan transaksi *real-time* tanpa latensi. Menghilangkan ketergantungan pada *software* pihak ketiga yang kaku.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                Microservices Architecture
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                Real-time Data Sync (WebSockets)
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
                Bank-Grade Security Encryption
              </li>
            </ul>

            <button className="text-white border-b border-blue-500 pb-1 text-sm font-bold uppercase tracking-wider hover:text-blue-400 transition-colors">
              Pelajari Arsitektur Ini →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}