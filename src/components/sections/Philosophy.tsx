'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const steps = [
  {
    id: "01",
    title: "Deep Discovery",
    desc: "Kami tidak langsung coding. Kami membedah model bisnis Anda untuk menemukan celah efisiensi yang tidak terlihat.",
    color: "from-blue-500"
  },
  {
    id: "02",
    title: "System Architecture",
    desc: "Membangun fondasi yang skalabel menggunakan stack modern (Next.js 15, Go, atau Rust) untuk performa tanpa kompromi.",
    color: "from-indigo-500"
  },
  {
    id: "03",
    title: "Precision Dev",
    desc: "Setiap baris kode ditulis dengan standar tinggi, memastikan keamanan data dan UI/UX level Awwwards.",
    color: "from-purple-500"
  },
  {
    id: "04",
    title: "Iterative Evolution",
    desc: "Teknologi bukan produk sekali jadi. Kami mendampingi pertumbuhan sistem seiring berkembangnya skala bisnis Anda.",
    color: "from-pink-500"
  }
]

export default function Philosophy() {
  const [active, setActive] = useState("01")

  return (
    <section className="py-24 px-6 relative bg-mesh-gradient">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">
          OUR <span className="text-blue-500">ENGINE</span> PHILOSOPHY.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full md:h-[450px]">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              onClick={() => setActive(step.id)}
              className={cn(
                "relative overflow-hidden rounded-3xl cursor-pointer p-8 glass-card transition-all duration-500",
                active === step.id ? "md:col-span-2 border-blue-500/50" : "md:col-span-1 opacity-50 grayscale hover:grayscale-0 hover:opacity-100"
              )}
              layout
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-sm font-mono text-blue-400 mb-4 block">{step.id}</span>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                </div>
                
                <AnimatePresence mode="wait">
                  {active === step.id && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-gray-400 leading-relaxed text-lg"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Background Glow */}
              {active === step.id && (
                <motion.div 
                  layoutId="glow"
                  className={cn("absolute inset-0 bg-gradient-to-br opacity-20 -z-0", step.color)} 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}