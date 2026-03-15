import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/HeroSection"; 
import VenturesGrid from "@/components/sections/VenturesGrid";
import TechStack from "@/components/sections/TechStack"; 
import Philosophy from "@/components/sections/Philosophy";
import Rejection from "@/components/sections/Rejection";
import Showcase from "@/components/sections/Showcase";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    // PERHATIKAN: bg-[#050505] menggantikan bg-white
    <main className="bg-[#050505] text-[#EDEDED] selection:bg-blue-500/30 min-h-screen">
      
      <Navbar />
      <HeroSection />
      <TechStack />
      <Philosophy />
      
      {/* Reverse Marketing Section */}
      <Rejection />

      <Showcase />

      {/* CTA Section - DIUBAH KE DARK THEME */}
      <section id="contact" className="py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/20 to-purple-900/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready to Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Your Legacy?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Mari diskusikan bagaimana arsitektur kustom kami dapat mengamankan dan meningkatkan skala bisnis Anda tanpa batasan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:contact@weatso.com" 
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              <span className="mr-2">Mulai Konsultasi Eksklusif</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - DIUBAH KE DARK THEME */}
      <footer className="py-10 bg-[#050505] border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 font-bold text-xl text-white tracking-tighter">
            WEATSO<span className="text-blue-600">.</span>
          </div>
          <p className="text-sm text-gray-500 font-light">
            &copy; {new Date().getFullYear()} Weatso Premium IT Consultant. Architected in Indonesia.
          </p>
        </div>
      </footer>
      <SpeedInsights />
    </main>
  );
}