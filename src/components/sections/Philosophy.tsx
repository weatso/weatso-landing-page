'use client'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Server, Zap, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const methodologies = [
  {
    id: "01",
    title: "Strategic Discovery",
    desc: "Membedah model bisnis hingga ke akar. Teknologi hanya diimplementasikan jika memecahkan masalah inti atau menciptakan efisiensi terukur.",
    icon: Search,
    color: "from-blue-600/10 to-transparent",
    borderGlow: "group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]",
    textGlow: "text-blue-400 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]"
  },
  {
    id: "02",
    title: "Precision Architecture",
    desc: "Arsitektur kustom (Microservices, Serverless) tanpa template, dirancang presisi untuk menahan beban skalabilitas ekstrem tanpa bottleneck.",
    icon: Server,
    color: "from-indigo-600/10 to-transparent",
    borderGlow: "group-hover:border-indigo-500/30 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]",
    textGlow: "text-indigo-400 drop-shadow-[0_0_8px_rgba(79,70,229,0.5)]"
  },
  {
    id: "03",
    title: "High-Performance Execution",
    desc: "Keamanan berlapis, zero-latency caching, dan performa UI/UX yang dieksekusi mengikuti standar enterprise global.",
    icon: Zap,
    color: "from-purple-600/10 to-transparent",
    borderGlow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]",
    textGlow: "text-purple-400 drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]"
  },
  {
    id: "04",
    title: "Long-Term Evolution",
    desc: "Sistem yang siap beradaptasi. Memastikan infrastruktur Anda siap menerima integrasi masa depan tanpa perlu perombakan ulang.",
    icon: ShieldCheck,
    color: "from-blue-400/10 to-transparent",
    borderGlow: "group-hover:border-blue-400/30 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]",
    textGlow: "text-blue-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
  }
]

export default function Philosophy() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="methodology" className="py-32 px-4 md:px-6 bg-[#030303] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-16">
          <h2 className="text-sm font-mono text-blue-500 mb-4 tracking-widest uppercase drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">Methodology</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
            ENGINEERING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">THE UNBREAKABLE.</span>
          </h3>
        </div>

        {/* Horizontal Flex Accordion */}
        <div className="flex flex-col md:flex-row h-[600px] md:h-[500px] w-full gap-2 md:gap-4">
          {methodologies.map((item, index) => {
            const isActive = activeIndex === index
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                layout
                initial={false}
                animate={{
                  flex: isActive ? (isMobile ? 3 : 4) : 1,
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
                onMouseEnter={() => !isMobile && setActiveIndex(index)}
                onClick={() => isMobile && setActiveIndex(index)}
                className={cn(
                  "relative flex flex-col justify-end overflow-hidden rounded-3xl border bg-[#0a0a0a] cursor-pointer group transition-all duration-500",
                  isActive 
                    ? `bg-[#0a0a0a] ${item.borderGlow}` // Aktif: Ambil warna glow dari data
                    : "border-white/5 hover:border-white/10" // Tidak aktif
                )}
              >
                {/* Background Ambient Glow (Inside Card) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className={cn("absolute inset-0 bg-gradient-to-t pointer-events-none blur-xl", item.color)}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10 flex flex-col h-full justify-end p-6 md:p-8">
                  
                  {/* Icon Container */}
                  <div className="flex items-center justify-between mb-auto mt-2">
                    <div className={cn(
                      "p-3 rounded-full border transition-all duration-500",
                      isActive ? "bg-white/5 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]" : "bg-black/50 border-white/5 group-hover:border-white/20"
                    )}>
                      <Icon className={cn("w-6 h-6 transition-colors duration-300", isActive ? item.textGlow : "text-gray-600")} />
                    </div>
                    {!isActive && !isMobile && (
                      <span className="text-gray-600 font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                        {item.id}
                      </span>
                    )}
                  </div>

                  {/* Text Content */}
                  <motion.div layout className="flex flex-col">
                    <div className="flex items-center gap-4 mb-2">
                      {isActive && (
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={cn("font-mono text-sm", item.textGlow)}
                        >
                          {item.id}
                        </motion.span>
                      )}
                      <motion.h4 
                        layout="position"
                        className={cn(
                          "font-bold transition-all duration-500",
                          isActive ? "text-2xl md:text-3xl text-white" : "text-lg text-gray-500 md:rotate-[-90deg] md:origin-left md:translate-y-10 whitespace-nowrap group-hover:text-gray-300"
                        )}
                      >
                        {item.title}
                      </motion.h4>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, y: 20, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: 10, height: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="text-gray-400 md:text-lg leading-relaxed mt-4 font-light"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}