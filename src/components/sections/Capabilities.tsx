'use client'
import { motion } from "framer-motion"

const capabilities = [
  {
    id: "01",
    title: "Enterprise Ecosystems",
    desc: "Pengembangan sistem POS, ERP, dan CRM kustom tersentralisasi yang dirancang khusus untuk menggantikan solusi SaaS pihak ketiga yang kaku dan tidak efisien."
  },
  {
    id: "02",
    title: "High-Volume Architectures",
    desc: "Membangun infrastruktur backend (Microservices, Serverless) yang mampu menangani jutaan permintaan secara real-time tanpa latensi atau degradasi."
  },
  {
    id: "03",
    title: "Legacy Modernization",
    desc: "Audit, restrukturisasi, dan migrasi sistem perangkat lunak usang Anda menuju stack teknologi modern yang aman, skalabel, dan efisien."
  },
  {
    id: "04",
    title: "Data & Security Engineering",
    desc: "Implementasi pipeline data berlapis dengan enkripsi standar institusi finansial untuk menjamin integritas aset digital Anda secara absolut."
  }
]

export default function Capabilities() {
  return (
    <section className="py-24 bg-[#030303] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Kolom Judul Kiri */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-mono text-blue-500 mb-6 tracking-widest uppercase">
                Core Domains
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight mb-8">
                KAPABILITAS <br /> TEKNIKAL.
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Kami tidak menerima pekerjaan perbaikan kecil. WEATSO fokus secara eksklusif pada rekayasa perangkat lunak skala makro yang mengubah lintasan bisnis klien kami.
              </p>
            </div>
            
            <div className="hidden lg:block mt-24">
              <div className="w-16 h-[1px] bg-white/20 mb-4" />
              <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">
                Zero Compromise.
              </span>
            </div>
          </div>

          {/* Kolom Grid Kanan */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {capabilities.map((cap) => (
                <div key={cap.id} className="bg-[#030303] p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500">
                  <span className="text-blue-500/50 font-mono text-sm mb-6 block">
                    {cap.id}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {cap.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}