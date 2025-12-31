import React from 'react';
import MoreAboute from '../components/MoreAboute';
import { useLocation } from 'react-router-dom';
import Experience from './Experience';
import Contact from './Contact';

export default function About() {
  const location = useLocation();

  return (
    <section
    
    className="relative w-full my-9  overflow-hidden py-20 lg:py-2 "
    
    >
      
     

      {/* Background Elements (Matching Hero) */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div> */}

      <div className="relative  z-10 mx-auto max-w-6xl px-8 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl ">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-900/20 px-4 py-1.5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest text-cyan-300 uppercase">About R.O.S Co.</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">
            Leading Water Treatment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
              Solutions & Innovation
            </span>
          </h2>
        </div>

        {/* Introduction Text */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 border-l-2 border-b-2 border-white/10 pl-6 lg:pl-10">
          <div className="lg:col-span-2 space-y-6 pt-5 text-xl text-slate-300 leading-relaxed">
            <p className='max-w-xl'>
              <strong className="text-white ">R.O.S Co. (Reverse Osmosis System Company) – <span className='font-semibold'>Water Solutions</span></strong> is a specialized water treatment and water management company based in Sulaymaniyah, Iraq. We don't just treat water; we engineer purity.
            </p>
            <p className='max-w-lg lg:text-xl text-lg'>
              We deliver customized water treatment solutions, including design, supply, installation, assembly, and commissioning of water and wastewater treatment systems for <span className="text-cyan-400">industrial</span>, <span className="text-cyan-400">commercial</span>, and <span className="text-cyan-400">domestic</span> applications.
            </p>
          </div>

         {/* H2O design */}
            {/* Right - 3D Water Drop Illustration */}
            <div className="relative ml-6 lg:-translate-y-16   ">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96">
                {/* Glow */}
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Main Drop */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/40 via-blue-400/30 to-cyan-600/40 rounded-full rounded-tl-none backdrop-blur-sm border border-white/20 shadow-2xl"
                     style={{ 
                       transform: 'rotate(45deg)',
                       boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.2), inset 20px 20px 60px rgba(255,255,255,0.1), 0 40px 80px -20px rgba(6, 182, 212, 0.4)'
                     }}>
                  {/* Inner Reflection */}
                  <div className="absolute top-8 left-8 w-16 h-24 bg-gradient-to-b from-white/40 to-transparent rounded-full blur-sm transform -rotate-12"></div>
                  <div className="absolute top-16 left-12 w-8 h-12 bg-white/30 rounded-full blur-[2px]"></div>
                </div>
                
                {/* Orbiting Particles */}
                <div className="absolute inset-0 m-20 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                  <div className="absolute bottom-0 rigth-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                </div>
                
                {/* Center Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-0 z-10">
                  <div className="text-center">
                    <div className="text-4xl font-semibold text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>H₂O</div>
                    <div className="text-xs text-cyan-300 uppercase tracking-widest mt-1">Pure Water</div>
                  </div>
                </div>
              </div>
            </div>


        </div>

        {/* Content Grid */}
        <div className="pr-4 border-r-2 border-b-2 border-white/10 grid gap-8 lg:grid-cols-2 items-stretch ">
          
          {/* Left Card: What We Do */}
          <div className="group mt-10 lg:my-20 relative bg-gradient-to-br from-white/5 to-white/[0.02]  border-white/10 p-8 lg:p-10 backdrop-blur-md overflow-hidden transition-all hover:border-cyan-500/30">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg className="w-40 h-40 text-cyan-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9-7.5-9-13-4.5 0-9 7.5-9 13 0 4.97 4.03 9 9 9z"/></svg>
            </div>
            
            <div className="relative   z-10">
              <h3 className="text-2xl font-semibold text-white mb-2">What We Do</h3>
              
              
              <p className="text-slate-300 mb-8">
                We plan, engineer, and deliver water & wastewater systems from concept to commissioning — then support performance long after handover.
              </p>
              
              <div className="space-y-4">
                {[
                  'System design and process selection',
                  'Supply, fabrication, and installation',
                  'Testing, commissioning, and training',
                  'Maintenance, upgrades, and spare parts',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-cyan-50 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card: Core Strengths */}
          <div className="flex mb-6 lg:my-20 flex-col gap-6">
            <div className="bg-slate-900/50  border-white/10 p-8 lg:p-10 backdrop-blur-md h-full">
              <h3 className="text-2xl font-semibold text-white mb-2">Core Strengths</h3>
             

              <div className="grid sm:grid-cols-2 gap-4 lg:gap-9">
                {[
                  { 
                    title: 'Engineering Focus', 
                    desc: 'Right sizing, stable operation, clear documentation.',
                    icon: (
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M16.338 3.038c.607.067 1.209.249 1.786.545 3.393 1.737 4.043 5.13 4.135 5.897.085.698-.592 1.34-1.267 1.34h-.94a.75.75 0 01-.75-.75v-.058c0-2.316-2.522-3.69-4.46-4.04-1.93-.348-4.147 1.258-4.52 3.46-.35 2.067 1.36 4.3 3.655 4.502.85.074 1.58.66 1.58 1.516v.612c0 .653-.443 1.226-1.07 1.385-2.07.525-4.22.258-6.155-1.135-2.147-1.547-3.085-4.246-2.617-6.845.548-3.064 3.097-5.358 6.138-5.78z" />
                      </svg>
                    )
                  },
                  { 
                    title: 'Quality First', 
                    desc: 'International standards compliance and robust build.',
                    icon: (
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    )
                  },
                  { 
                    title: 'Cost Efficiency', 
                    desc: 'Optimized CAPEX/OPEX with reliable performance.',
                    icon: (
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    )
                  },
                  { 
                    title: 'Long-Term Support', 
                    desc: 'Maintenance plans, upgrades, and spare parts.',
                    icon: (
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575V12a1.5 1.5 0 003 0v-4.575a1.575 1.575 0 01-3.15 0z" />
                      </svg>
                    )
                  },
                ].map((s) => (
                  <div key={s.title} className="group/card rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 mb-3 group-hover/card:scale-110 group-hover/card:bg-cyan-900/30 transition-transform">
                      {s.icon}
                    </div>
                    <div className="text-white font-semibold text-lg">{s.title}</div>
                    <div className="mt-2 text-sm text-slate-400 leading-snug">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image Section */}
        <div className="mt-20 relative rounded-3xl overflow-hidden  border-l-2 border-white/10 bg-slate-800 shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
           
           {/* Tech Overlay Lines */}
           <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none border-[1px] border-white/5 m-4 rounded-2xl">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
           </div>

           <img 
              src="../assets/images/roedi16m.jpeg" 
              alt="Industrial Water Treatment Facility" 
              className="w-full h-[40rem] object-cover hover:scale-105 transition-transform duration-1000"
            />
            
            <div className="absolute bottom-8 left-8 z-20">
              <div className="bg-smfont-semibold/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
                 <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-1">Facility Overview</p>
                 <p className="text-white font-medium">Advanced Filtration Units • Sulaymaniyah</p>
              </div>
            </div>
        </div>

        {/* Conditional Component */}
        {location.pathname !== '/' && (
          <div className="mt-16">
            <MoreAboute />
            <Experience />
            <Contact />
          </div>
        )}
      
      </div>

      
    </section>
  );
}