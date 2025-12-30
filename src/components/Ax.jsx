import React from 'react'

const AX = () => {
  const capabilities = [
    {
      title: "Industrial Systems",
      desc: "Industrial and process water treatment systems designed for heavy-duty performance.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "RO & RO-EDI Plants",
      desc: "High-purity water plants utilizing advanced Reverse Osmosis and Electrodeionization.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Wastewater Treatment",
      desc: "Advanced sewage treatment facilities focusing on recycling and environmental safety.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Containerized Systems",
      desc: "Mobile, plug-and-play site-built treatment systems for rapid deployment.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full py-20 bg-[#0F172A] overflow-hidden">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        {/* Abstract Growth Graph Line Background */}
        <svg className="absolute bottom-0 left-0 w-full h-96 text-cyan-500/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"></path>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: EXPERIENCE NARRATIVE */}
          <div className="lg:col-span-5 space-y-8 sticky top-10">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                 <div className="w-8 h-[2px] bg-cyan-500"></div>
                 <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Our Experience</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Growth & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-white">Development</span>
              </h2>
            </div>

            {/* Description Card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50"></div>
              <p className="text-lg text-slate-300 leading-relaxed">
                With years of <span className="text-white font-semibold">hands-on experience</span> in water and wastewater treatment projects, R.O.S Co. has demonstrated steady growth and technical development across multiple sectors.
              </p>
              
              {/* Mini Stats Visual */}
              <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="flex -space-x-2">
                   {[1,2,3].map((i) => (
                     <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] text-cyan-400">
                        {2007 + (i*5)}
                     </div>
                   ))}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Steady Progress</div>
              </div>
            </div>

            {/* Decorative Button */}
             <button className="group flex items-center gap-3 text-cyan-300 font-medium hover:text-white transition-colors">
               <span>View Project Portfolio</span>
               <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>
             </button>
          </div>


          {/* RIGHT SIDE: CAPABILITY GRID */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-2xl font-bold text-white">Capability Areas</h3>
               <div className="hidden sm:flex gap-1">
                 <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                 <span className="w-2 h-2 rounded-full bg-white/20"></span>
                 <span className="w-2 h-2 rounded-full bg-white/20"></span>
               </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {capabilities.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-[#0B1120] border border-white/10 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Tech Lines Decoration */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Icon */}
                  <div className="relative w-14 h-14 mb-5 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-900/30 group-hover:text-cyan-300 transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Line Indicator */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              ))}
            </div>

            {/* Connecting Visual (Circuit Lines) */}
            <div className="hidden lg:block absolute -right-4 top-1/2 w-24 h-24 bg-gradient-to-l from-cyan-500/10 to-transparent blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AX