'use client'

export default function Rejection() {
  return (
    <section className="py-24 px-6 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Kami <span className="text-red-500">Menolak</span> Berkompromi.
        </h2>
        <p className="text-xl text-gray-400 leading-relaxed mb-12">
          Kami tidak menerima semua proyek. Jika Anda mencari solusi instan, memotong anggaran di atas keamanan, atau sekadar menginginkan "web yang penting jalan", WEATSO bukan untuk Anda. <br /><br />
          Kami hanya berpartner dengan visioner yang mengerti bahwa teknologi adalah investasi inti, bukan pengeluaran sekunder. Jika sistem tersebut tidak memberikan nilai strategis yang masif, kami tidak akan menyentuhnya.
        </p>
      </div>
    </section>
  )
}