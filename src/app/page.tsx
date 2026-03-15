import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/HeroSection"; 
import VenturesGrid from "@/components/sections/VenturesGrid";
import TechStack from "@/components/sections/TechStack"; 
import Philosophy from "@/components/sections/Philosophy";
import Rejection from "@/components/sections/Rejection";
import Showcase from "@/components/sections/Showcase";
import TrustedBy from "@/components/sections/TrustedBy";
import Capabilities from "@/components/sections/Capabilities";
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
      <TrustedBy/>
      <Capabilities />

      {/* FINAL CTA - VOLUMETRIC GLOW */}
      <section id="contact" className="py-32 bg-[#030303] overflow-hidden border-t border-white/5 relative">
        {/* Massive Centered Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent rounded-full blur-[150px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready to Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              Your Legacy?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Mari diskusikan bagaimana arsitektur kustom kami dapat mengamankan dan meningkatkan skala bisnis Anda tanpa batasan.
          </p>
          
          <div className="flex justify-center items-center">
            <a 
              href="mailto:contact@weatso.id" 
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 font-bold text-black uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:text-white"
            >
              <span className="relative z-10 transition-colors duration-300">Inisiasi Konsultasi</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-3xl text-white tracking-tighter mb-6">
                WEATSO<span className="text-blue-500">.</span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                The absolute standard for bespoke software architecture and premium digital engineering.
              </p>
              <a href="mailto:contact@weatso.id" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                contact@weatso.id
              </a>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Navigasi</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#tech" className="text-gray-400 hover:text-white transition-colors">Teknologi</a></li>
                <li><a href="#methodology" className="text-gray-400 hover:text-white transition-colors">Metodologi</a></li>
                <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Arsitektur Kami</a></li>
              </ul>
            </div>

            {/* Legal / Social Column */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Legalitas</h4>
              <ul className="space-y-4 mb-8">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
              
              <div className="flex gap-4">
                {/* Dummy Social Links */}
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">in</a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">ig</a>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-light">
              &copy; {new Date().getFullYear()} Weatso Digital Holding. All rights reserved.
            </p>
            <p className="text-sm font-mono text-gray-600">
              OPERATING FROM INDONESIA
            </p>
          </div>
        </div>
      </footer>
      <SpeedInsights />
    </main>
  );
}