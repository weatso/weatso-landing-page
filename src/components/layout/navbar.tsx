'use client'
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 pointer-events-none px-4 md:px-8">
      <motion.div
        layout
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden h-16 md:h-20 px-4 md:px-6 rounded-full",
          isScrolled 
            // PERHATIKAN PENAMBAHAN SHADOW GLOW DI BAWAH INI
            ? "bg-black/60 backdrop-blur-3xl border border-blue-500/20 w-full md:w-[800px] shadow-[0_15px_40px_-10px_rgba(147,51,234,0.25)]" 
            : "bg-transparent border-transparent w-full max-w-7xl"
        )}
      >
        {/* Logo - Ukuran Dikunci Konsisten */}
        <div className="relative flex items-center shrink-0">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image 
              src="/logo.svg" 
              alt="WEATSO" 
              fill 
              className="object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              priority
            />
          </div>
        </div>

        {/* Navigation Links - Tetap di tengah */}
        <div className="hidden md:flex items-center gap-2">
          {["Services", "Tech", "Work"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all rounded-full hover:bg-white/5">
              {item}
            </a>
          ))}
        </div>

        {/* Premium CTA - Diseragamkan */}
        <button className="group relative overflow-hidden px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white text-black text-xs md:text-sm font-bold uppercase tracking-wider transition-all active:scale-95 shrink-0">
          <span className="relative z-10 transition-colors group-hover:text-white">Inisiasi Konsultasi</span>
          <div className="absolute inset-0 bg-[#111] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </motion.div>
    </nav>
  )
}