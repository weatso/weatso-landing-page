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
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-8 pointer-events-none">
      <motion.div
        layout
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          isScrolled 
            ? "bg-black/40 backdrop-blur-3xl border border-white/10 rounded-full px-4 py-2 w-[95%] md:w-auto min-w-[300px] shadow-2xl" 
            : "bg-transparent w-full max-w-7xl px-2"
        )}
      >
        {/* Logo - Dibuat Besar dan Menonjol */}
        <div className="relative flex items-center">
          <motion.div 
            layout
            className={cn(
              "relative z-10 transition-all duration-500",
              isScrolled ? "w-12 h-12" : "w-20 h-20 md:w-24 md:h-24"
            )}
          >
            <Image 
              src="/logo.svg" 
              alt="WEATSO" 
              fill 
              className="object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              priority
            />
          </motion.div>
        </div>

        {/* Navigation Links - Hanya muncul saat lebar */}
        <div className="hidden md:flex items-center gap-1">
          {["Services", "Tech", "Work"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="px-6 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all rounded-full hover:bg-white/5">
              {item}
            </a>
          ))}
        </div>

        {/* Premium CTA: Magnetic Feel */}
        <button className="group relative overflow-hidden px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white text-black text-xs md:text-sm font-bold tracking-tight transition-all active:scale-95">
          <span className="relative z-10 transition-colors group-hover:text-white">Secure Your Asset</span>
          <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </motion.div>
    </nav>
  )
}