import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative mt-0 min-h-screen w-full overflow-hidden  flex items-center justify-center">
      
      {/* 1. Cinematic Background (Deep Ocean Feel) */}
      <div className="absolute inset-0 z-0">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0B1120] to-cyan-950"></div> */}
        {/* Light Rays from top center */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-[80px]"></div> */}
        {/* Floor Grid */}
        {/* <div className="absolute bottom-0 w-full h-1/3 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
             ></div> */}
      </div>

      {/* Floating Particles (Dust/Bubbles) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute bg-white/10 rounded-full animate-float-random"
               style={{
                 width: Math.random() * 4 + 'px',
                 height: Math.random() * 4 + 'px',
                 left: Math.random() * 100 + '%',
                 top: Math.random() * 100 + '%',
                 animationDuration: (Math.random() * 10 + 10) + 's',
                 animationDelay: (Math.random() * 5) + 's'
               }}></div>
        ))}
      </div>

      {/* MAIN CONTENT GRID */}
      <section className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* ============ LEFT COLUMN (Input / Problem) ============ */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 order-2 lg:order-1">

              {/* lera */}

            {/* Title Part 1 */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tighter leading-none"
                style={{ filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.4))' }}>
              PURE 
              <span className="text-slate-500">WATER</span>
            </h1>

            <div className="max-w-xs text-slate-400 text-sm lg:text-base leading-relaxed">
              Before filtration, water contains sediments, rust, and impurities.
              <span className="block mt-2 text-amber-500 font-bold uppercase tracking-widest text-xs">
                 Input: Untreated
              </span>
            </div>
          </div>


          {/* ============ CENTER COLUMN (The 3D Filter Tower) ============ */}
          <div className="relative h-[600px]  w-full flex items-center justify-center order-1 lg:order-2 perspective-1000">
            
            {/* The Tower Container */}
            <div className="relative w-64 lg:w-80 h-[550px] lg:h-[650px]  transform-style-3d animate-hover-slow">
              
              {/* Back Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-cyan-500/10 rounded-full blur-[80px]"></div>

              {/* 1. TOP CAP (Metal) */}
              <div className="absolute top-2 left-0 right-0 h-16 bg-gradient-to-b from-slate-400 to-slate-700 rounded-t-3xl shadow-lg border-b border-slate-700 z-20">
                 {/* Connecting Pipe (Center to Right) */}
                 <div className=" translate-x-[15.5rem] lg:translate-x-[19.3rem] translate-y-[26.5rem] lg:translate-y-[32.5rem]  relative w-[8rem]  h-4 bg-gradient-to-r from-slate-600 to-cyan-900  border-y border-white/10   ">
                     <div className="absolute inset-0 overflow-hidden ">
                        <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 via-cyan-400/60 to-transparent animate-flow-out"></div>
                        <div className="absolute top-1 left-0 w-1 h-1 bg-white rounded-full animate-particle-out shadow-[0_0_5px_white]"></div>
                    </div>
                </div>
            
                 {/* Reflection */}
                 <div className="absolute top-2 left-4 right-4 h-4 bg-white/20 rounded-full blur-[2px]"></div>
                 {/* Brand Logo */}
                 <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-slate-800 px-3 py-1 rounded border border-cyan-500/30 shadow-lg z-30">
                    <span className="text-[10px] font-bold text-cyan-400 tracking-widest">R.O.S CO.</span>
                 </div>

                 {/* Connecting Pipe (Left to Center) */}
            <div className=" relative -translate-x-[8.3rem] translate-y-24 w-[9rem] h-4 bg-gradient-to-r from-slate-800 to-slate-600  border-y border-white/10 ">
               {/* Dirty Flow Animation inside pipe */}
               <div className="absolute inset-0 overflow-hidden opacity-60">
                 <div className="w-full h-full bg-gradient-to-r from-transparent via-amber-600/50 to-amber-600/50 animate-flow-in"></div>
                 {/* Particles moving towards center */}
                 <div className="absolute top-1 left-0 w-1 h-1 bg-amber-200 rounded-full animate-particle-in"></div>
               </div>
            </div>
            </div>

              {/* 2. MAIN CYLINDER (Glass) */}
              <div className="absolute top-14 bottom-14 left-2 right-2 rounded-3xl z-10 overflow-hidden backdrop-blur-sm border-x-4 border-white/20"
                   style={{ 
                     background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.05))',
                     boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)'
                   }}>
                
                {/* --- STAGE 1: SEDIMENT (Top - Dirty) --- */}
                <div className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-amber-900/50 via-amber-900/40 to-slate-900/60">
                   {/* Dirty Particles Falling */}
                   {[...Array(8)].map((_, i) => (
                      <div key={i} className="absolute bg-amber-600/60 rounded-full animate-fall"
                           style={{
                             width: Math.random() * 6 + 'px',
                             height: Math.random() * 6 + 'px',
                             left: Math.random() * 100 + '%',
                             animationDuration: (Math.random() * 2 + 2) + 's',
                             animationDelay: Math.random() + 's'
                           }}></div>
                   ))}
                   <div className="absolute bottom-2 right-2 text-[10px] text-amber-500/50 font-bold uppercase rotate-90 origin-right">Stage 1</div>
                </div>

                {/* --- STAGE 2: CARBON BLOCK (Middle - Processing) --- */}
                <div className="absolute top-[35%] left-0 right-0 h-[30%] bg-slate-900/90 border-y border-white/5">
                   {/* Active Glow */}
                   <div className="absolute inset-0 bg-cyan-500/5 animate-pulse"></div>
                   {/* Grid Texture */}
                   <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-cyan-400 text-xs font-bold tracking-[0.2em] animate-pulse">FILTERING</div>
                      <div className="w-full h-0.5 bg-cyan-500/50 mt-1 shadow-[0_0_10px_cyan]"></div>
                   </div>
                </div>

                {/* --- STAGE 3: PURE WATER (Bottom - Clean) --- */}
                <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-b from-slate-900/60 to-cyan-500/30">
                   {/* Clean Bubbles Rising */}
                   {[...Array(10)].map((_, i) => (
                      <div key={i} className="absolute bg-white/40 rounded-full animate-rise"
                           style={{
                             width: Math.random() * 4 + 'px',
                             height: Math.random() * 4 + 'px',
                             left: Math.random() * 100 + '%',
                             animationDuration: (Math.random() * 3 + 2) + 's',
                             animationDelay: Math.random() + 's'
                           }}></div>
                   ))}
                   {/* Shimmer Effect */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>

                {/* Glass Highlights */}
                <div className="absolute top-4 left-4 w-2 h-full bg-gradient-to-b from-white/30 to-transparent blur-[2px]"></div>
                <div className="absolute top-4 right-6 w-1 h-full bg-gradient-to-b from-white/10 to-transparent blur-[1px]"></div>
              </div>

              {/* 3. BOTTOM CAP (Metal) */}
              <div className="absolute bottom-2 left-0 right-0 h-16 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-t border-slate-500 z-20">
                 {/* Base Stand */}
                 <div className="absolute -bottom-4 left-4 right-4 h-4 bg-slate-900 rounded-full blur-sm opacity-60"></div>
              </div>

              {/* Orbiting Rings (Tech Feel) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] rounded-full border border-cyan-500/20 rotate-x-60 animate-spin-slow pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[80%] rounded-full border border-blue-500/10 rotate-x-60 animate-spin-reverse pointer-events-none"></div>

            </div>
          </div>


          {/* ============ RIGHT COLUMN (Output / Solution) ============ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 mb-4 order-3">
            
          
            {/* Title Part 2 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none"
                style={{ filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.4))' }}>
              PURE 
             <span className='text-gray-500'>LIFE</span> 
            </h1>

            <div className="max-w-sm text-cyan-100/80 text-sm lg:text-base leading-relaxed">
              Experience crystal clear water rich in essential minerals. 
              <span className="block mt-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
                 Output: 99.9% Pure
              </span>
            </div>

           




          </div>

        </div>
      </section>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-50 blur-xl"></div>

      {/* STYLES & ANIMATIONS */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-60 { transform: rotateX(70deg);  }

        @keyframes hover-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fall {
          0% { transform: translateY(-10px); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(150px); opacity: 0; }
        }
        @keyframes rise {
          0% { transform: translateY(20px) scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-150px) scale(1.2); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(0deg); }
          to { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(360deg); }
          to { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(0deg); }
        }
        @keyframes flow-in {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes flow-out {
          0% { transform: translateX(0%); opacity: 0.5; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes particle-in {
          0% { left: 0; opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes particle-out {
          0% { left: 0; opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(20px, -20px); opacity: 0.7; }
        }

        .animate-hover-slow { animation: hover-slow 6s ease-in-out infinite; }
        .animate-fall { animation: fall 3s linear infinite; }
        .animate-rise { animation: rise 4s ease-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 25s linear infinite; }
        .animate-flow-in { animation: flow-in 2s linear infinite; }
        .animate-flow-out { animation: flow-out 1.5s linear infinite; }
        .animate-particle-in { animation: particle-in 1s linear infinite; }
        .animate-particle-out { animation: particle-out 1s linear infinite; }
        .animate-float-random { animation: float-random 10s ease-in-out infinite; }
        .hover\\:animate-shine:hover { animation: shine 1s; }
      `}</style>
    </div>
  )
}

export default Hero