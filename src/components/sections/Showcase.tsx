'use client'
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const portfolios = [
  {
    id: "01",
    client: "Evory",
    title: "Premium Wedding Platform",
    desc: "Arsitektur penyimpanan aset kustom dengan manajemen file terdistribusi. Platform yang dirancang untuk menahan lonjakan traffic ekstrim dan memberikan pengalaman UI/UX yang imersif.",
    link: "https://evory.id"
  },
  {
    id: "02",
    client: "CO-LABZ",
    title: "Creative Digital Studio",
    desc: "Infrastruktur web interaktif dengan performa animasi 60fps. Memadukan estetika visual tinggi dengan fondasi kode yang ringan dan teroptimasi penuh.",
    link: "https://colabz.id"
  },
  {
    id: "03",
    client: "Radeva",
    title: "Wedding & Event Organizer",
    desc: "Sistem pendaratan terintegrasi yang memisahkan ekosistem Radeva dan WTP Event Organizer dalam satu arsitektur terpusat, mengoptimalkan konversi klien premium.",
    link: "#"
  }
]

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"])

  return (
    <section ref={targetRef} id="work" className="relative h-[300vh] bg-[#030303]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-white/5">
        
        <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-10">
          <h2 className="text-sm font-mono text-gray-500 mb-4 tracking-widest uppercase">Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            SELECTED WORKS.
          </h3>
        </div>

        <motion.div style={{ x }} className="flex w-[300vw] items-center pt-24 md:pt-0">
          {portfolios.map((item) => (
            <div key={item.id} className="w-[100vw] flex items-center justify-center px-6 md:px-24">
              
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
                
                {/* Visual Placeholder - Premium Glow Hover */}
                <div className="md:col-span-7 h-[350px] md:h-[550px] rounded-xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden group flex items-center justify-center transition-all duration-700 hover:border-purple-500/30 hover:shadow-[0_0_50px_rgba(147,51,234,0.15)]">
                  {/* Inner Glow Mesh */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                  
                  <span className="relative z-10 font-mono text-gray-700 tracking-widest uppercase text-sm group-hover:text-blue-300 transition-colors duration-500 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">
                    [ Visual Architecture: {item.client} ]
                  </span>
                </div>

                {/* Minimalist Text Context */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <span className="text-gray-500 font-mono text-sm block mb-6">{item.id} — {item.client}</span>
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-none">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed mb-10 text-lg md:text-xl font-light">
                    {item.desc}
                  </p>
                  
                  <div>
                    <a 
                      href={item.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center pb-2 border-b border-gray-600 text-white font-bold uppercase tracking-wider text-sm hover:border-white transition-colors group"
                    >
                      Eksplorasi {item.client} 
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}