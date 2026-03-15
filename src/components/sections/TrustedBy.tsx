'use client'
import Image from "next/image"

// KONTRAK DATA: Ini menyelesaikan error TS Anda.
type Partner = {
  name: string;
  type: "text" | "logo";
  src?: string; // Tanda '?' membuatnya opsional
}

const partners: Partner[] = [
  { name: "LOKAL POS", type: "text" },
  { name: "Evory Platform", type: "text" },
  { name: "Radeva", type: "text" },
  { name: "CO-LABZ", type: "text" },
  // Hapus komentar di bawah ini jika Anda sudah punya file logo
  // { name: "Client X", type: "logo", src: "/client-x-logo.svg" }
]

export default function TrustedBy() {
  return (
    <section className="py-24 bg-[#030303] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
        <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-12">
          Dipercaya oleh arsitektur bisnis yang menuntut keunggulan
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group w-40 h-20 md:w-56 md:h-24 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(37,99,235,0.15)] transition-all duration-500"
            >
              {partner.type === "logo" && partner.src ? (
                <div className="relative w-24 h-12 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                  <Image 
                    src={partner.src} 
                    alt={partner.name} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              ) : (
                <span className="text-sm md:text-base font-bold text-gray-500 tracking-widest uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}