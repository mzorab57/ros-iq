

const Hero = () => {
  return (
    <div className="relative mt-8 min-h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Effects */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0B1120] to-slate-900"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]"></div>
      </div> */}

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-cyan-400/20 rounded-full animate-float-random"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: (Math.random() * 10 + 10) + 's',
              animationDelay: (Math.random() * 5) + 's'
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <section className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-cyan-400"></span>
            </span>
            <span className="text-xs font-bold text-cyan-300 tracking-widest uppercase">Advanced Filtration</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4">
            PURE <span className="text-cyan-400">WATER</span>
            <span className="text-slate-500"> • </span>
            PURE <span className="text-cyan-400">LIFE</span>
          </h1>
        </div>

        {/* Horizontal Pressure Vessel System */}
        <div className="relative flex items-center justify-center">
          
          {/* ===== LEFT SIDE - DIRTY WATER INPUT ===== */}
          <div className="absolute left-0 lg:left-[5%] top-1/2 -translate-y-1/2 z-20 flex items-center">
            {/* Input Info Card */}
            <div className="hidden lg:block mr-4 text-right">
              <div className="px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-2 justify-end mb-2">
                  <span className="text-amber-400 text-sm font-bold">INPUT</span>
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                </div>
                <p className="text-amber-200/80 text-xs max-w-[140px]">
                  Untreated water with sediments & impurities
                </p>
              </div>
            </div>

            {/* Input Pipe */}
            <div className="relative">
              {/* Pipe Flange */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-l-lg border-2 border-slate-400 flex flex-col justify-between py-2">
                <div className="w-2 h-2 bg-slate-700 rounded-full mx-auto"></div>
                <div className="w-2 h-2 bg-slate-700 rounded-full mx-auto"></div>
                <div className="w-2 h-2 bg-slate-700 rounded-full mx-auto"></div>
              </div>
              
              {/* Main Pipe */}
              <div className="w-20 lg:w-32 h-10 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 rounded-lg border-y-4 border-slate-300/50 relative overflow-hidden shadow-lg">
                {/* Dirty Water Flow */}
                <div className="absolute inset-1 overflow-hidden rounded">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700/80 via-amber-600/70 to-amber-500/60 animate-flow-in"></div>
                  {/* Particles */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-amber-900/60 rounded-full animate-particle-flow"
                      style={{
                        width: '4px',
                        height: '4px',
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
                {/* Pipe Shine */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* ===== MAIN HORIZONTAL PRESSURE VESSEL ===== */}
          <div className="relative w-full max-w-3xl mx-auto px-8 lg:px-20">
            <div className="relative group" style={{ perspective: '1000px' }}>
              
              {/* Vessel Glow */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-r from-amber-500/10 via-cyan-500/20 to-cyan-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
              
              {/* Support Legs */}
              <div className="absolute -bottom-8 left-[15%] w-6 h-12 bg-gradient-to-b from-slate-500 to-slate-700 rounded-b-lg shadow-lg"></div>
              <div className="absolute -bottom-8 right-[15%] w-6 h-12 bg-gradient-to-b from-slate-500 to-slate-700 rounded-b-lg shadow-lg"></div>
              <div className="absolute -bottom-12 left-[15%] -translate-x-2 w-10 h-4 bg-slate-800 rounded-lg shadow-lg"></div>
              <div className="absolute -bottom-12 right-[15%] translate-x-2 w-10 h-4 bg-slate-800 rounded-lg shadow-lg"></div>

              {/* Main Vessel Container */}
              <div 
                className="relative h-48 lg:h-64 rounded-[100px] overflow-hidden border-4 border-slate-400/50 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                style={{
                  background: 'linear-gradient(180deg, rgba(100,116,139,0.8) 0%, rgba(71,85,105,0.9) 30%, rgba(51,65,85,1) 70%, rgba(30,41,59,1) 100%)',
                  boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5), inset 0 -10px 30px rgba(0,0,0,0.3), inset 0 10px 30px rgba(255,255,255,0.1)'
                }}
              >
                
                {/* Vessel Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/30 to-transparent rounded-t-[100px]"></div>
                
                {/* Left End Cap (Hemispherical) */}
                <div className="absolute left-0 top-0 bottom-0 w-14 lg:w-28 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 rounded-l-full border-r-4 border-slate-600/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  {/* Input Port */}
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-500 shadow-inner"></div>
                </div>

                {/* Right End Cap (Hemispherical) */}
                <div className="absolute right-0 top-0 bottom-0 w-14 lg:w-28 bg-gradient-to-l from-slate-500 via-slate-400 to-slate-500 rounded-r-full border-l-4 border-slate-600/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/20 to-transparent"></div>
                  {/* Output Port */}
                  <div className="w-8 h-8 rounded-full bg-cyan-600/50 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30"></div>
                </div>

                {/* ===== INTERNAL WATER VISUALIZATION ===== */}
                <div className="absolute left-14 lg:left-28 right-14 lg:right-28 top-4 bottom-4 rounded-[60px] overflow-hidden">
                  
                  {/* Stage 1: Dirty Water (Left) */}
                  <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-gradient-to-r from-amber-700/60 via-amber-600/50 to-amber-500/40 overflow-hidden">
                    {/* Sediment Particles */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-amber-900/70 rounded-full animate-sediment"
                        style={{
                          width: `${4 + Math.random() * 6}px`,
                          height: `${4 + Math.random() * 6}px`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDuration: `${3 + Math.random() * 2}s`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                    {/* Dirty Label */}
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-amber-900/50 backdrop-blur-sm">
                      <span className="text-[8px] font-bold text-amber-300 uppercase tracking-wider">Dirty</span>
                    </div>
                  </div>

                  {/* Stage 2: Filtration Zone (Center) */}
                  <div className="absolute left-[30%] top-0 bottom-0 w-[40%] bg-gradient-to-r from-amber-500/30 via-slate-600/50 to-cyan-500/30 overflow-hidden">
                    {/* Filter Membrane Lines */}
                    <div className="absolute inset-0 flex">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 border-r border-white/10 relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-filter-pulse" 
                               style={{ animationDelay: `${i * 0.15}s` }}></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Processing Bubbles */}
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-white/40 rounded-full animate-process-bubble"
                        style={{
                          width: `${3 + Math.random() * 4}px`,
                          height: `${3 + Math.random() * 4}px`,
                          left: `${Math.random() * 100}%`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                    
                    {/* Center Label */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-4 py-2 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30">
                        <div className="text-cyan-400 text-xs font-bold tracking-[0.2em] animate-pulse">FILTERING</div>
                        <div className="w-full h-0.5 bg-gradient-to-r from-amber-500 via-cyan-400 to-cyan-500 mt-1 rounded-full"></div>
                      </div>
                    </div> */}
                  </div>

                  {/* Stage 3: Clean Water (Right) */}
                  <div className="absolute  right-0 top-0 bottom-0 w-[30%] bg-gradient-to-r from-cyan-500/40 via-cyan-400/50 to-cyan-300/60 overflow-hidden">
                    {/* Clean Bubbles */}
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-white/50 rounded-full animate-clean-bubble"
                        style={{
                          width: `${2 + Math.random() * 3}px`,
                          height: `${2 + Math.random() * 3}px`,
                          right: `${Math.random() * 100}%`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    {/* Clean Label */}
                    <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-cyan-900/50 backdrop-blur-sm">
                      <span className="text-[8px] font-bold text-cyan-300 uppercase tracking-wider">Pure</span>
                    </div>
                  </div>

                  {/* Water Level Line */}
                  <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-amber-400/30 via-white/20 to-cyan-400/30"></div>
                </div>

                {/* Top Fittings */}
                <div className="absolute top-0 left-1/4 w-8 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-t-lg border-2 border-slate-300/50">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-2 bg-slate-700 rounded-full"></div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-8 bg-gradient-to-b from-slate-400 to-slate-600 rounded-t-xl border-2 border-slate-300/50">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-3 bg-red-500/80 rounded-sm border border-red-400"></div>
                </div>
                <div className="absolute top-0 right-1/4 w-8 h-6 bg-gradient-to-b from-slate-400 to-slate-600 rounded-t-lg border-2 border-slate-300/50">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-2 bg-cyan-500/80 rounded-full shadow-lg shadow-cyan-500/50"></div>
                </div>

                {/* Pressure Gauges */}
                <div className="absolute -top-6 left-[20%] w-10 h-10 rounded-full bg-gradient-to-b from-slate-300 to-slate-500 border-2 border-slate-400 flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center">
                    <div className="w-0.5 h-3 bg-amber-400 origin-bottom -rotate-30"></div>
                  </div>
                </div>
                <div className="absolute -top-6 right-[20%] w-10 h-10 rounded-full bg-gradient-to-b from-slate-300 to-slate-500 border-2 border-slate-400 flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-600 flex items-center justify-center">
                    <div className="w-0.5 h-3 bg-cyan-400 origin-bottom rotate-45"></div>
                  </div>
                </div>

               

                {/* Rivets/Bolts */}
                <div className="absolute top-4 left-[35%] w-3 h-3 rounded-full bg-slate-600 border border-slate-400 shadow-inner"></div>
                <div className="absolute top-4 right-[35%] w-3 h-3 rounded-full bg-slate-600 border border-slate-400 shadow-inner"></div>
                <div className="absolute bottom-4 left-[35%] w-3 h-3 rounded-full bg-slate-600 border border-slate-400 shadow-inner"></div>
                <div className="absolute bottom-4 right-[35%] w-3 h-3 rounded-full bg-slate-600 border border-slate-400 shadow-inner"></div>
              </div>

              {/* Orbiting Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[200%] rounded-full border border-cyan-500/10 animate-orbit pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDE - CLEAN WATER OUTPUT ===== */}
          <div className="absolute right-0 lg:right-[5%] top-1/2 -translate-y-1/2 z-20 flex items-center">
            {/* Output Pipe */}
            <div className="relative">
              {/* Main Pipe */}
              <div className="w-20 lg:w-32 h-10 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 rounded-lg border-y-4 border-slate-300/50 relative overflow-hidden shadow-lg">
                {/* Clean Water Flow */}
                <div className="absolute inset-1 overflow-hidden rounded">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/70 via-cyan-300/60 to-cyan-200/50 animate-flow-out"></div>
                  {/* Sparkles */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-white/80 rounded-full animate-sparkle-flow"
                      style={{
                        width: '3px',
                        height: '3px',
                        top: `${30 + Math.random() * 40}%`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    />
                  ))}
                </div>
                {/* Pipe Shine */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white/30 to-transparent"></div>
              </div>

              {/* Pipe Flange */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-l from-slate-500 to-slate-600 rounded-r-lg border-2 border-slate-400 flex flex-col justify-between py-2">
                <div className="w-2 h-2 bg-slate-700 rounded-full mx-auto"></div>
                <div className="w-2 h-2 bg-slate-700 rounded-full mx-auto"></div>
                <div className="w-2 h-2 bg-slate-700 rounded-full mx-auto"></div>
              </div>

              {/* Dripping Effect */}
              <div className="absolute -bottom-6 right-4 flex gap-1">
                <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-transparent rounded-full animate-drip" style={{ animationDelay: '0s' }}></div>
                <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full animate-drip" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>

            {/* Output Info Card */}
            <div className="hidden lg:block ml-4">
              <div className="px-4 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
                  <span className="text-cyan-400 text-sm font-bold">OUTPUT</span>
                </div>
                <p className="text-cyan-200/80 text-xs max-w-[140px]">
                  Crystal clear water, 99.9% pure
                </p>
                {/* <div className="flex items-center gap-1 mt-2">
                  <span className="text-green-400 text-[10px]">●</span>
                  <span className="text-green-400 text-[10px] font-medium">Ready for use</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
          {/* Left Info */}
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <div className="text-amber-400 text-sm font-bold">DIRTY WATER</div>
              <div className="text-amber-200/60 text-xs">Sediments & Impurities</div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-cyan-500"></div>
            <svg className="w-6 h-6 text-cyan-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
          </div>

          {/* Right Info */}
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-cyan-400 text-sm font-bold">PURE WATER</div>
              <div className="text-cyan-200/60 text-xs">99.9% Purified</div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES & ANIMATIONS */}
      <style>{`
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(15px, -15px); opacity: 0.7; }
        }
        @keyframes flow-in {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes flow-out {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes particle-flow {
          0% { left: 0; opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes sparkle-flow {
          0% { left: 0; opacity: 1; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
          100% { left: 100%; opacity: 0; transform: scale(1); }
        }
        @keyframes sediment {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, 10px) rotate(90deg); }
          50% { transform: translate(-5px, 5px) rotate(180deg); }
          75% { transform: translate(3px, -5px) rotate(270deg); }
        }
        @keyframes filter-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        @keyframes process-bubble {
          0% { bottom: 0; opacity: 0; transform: scale(0.5); }
          30% { opacity: 1; }
          100% { bottom: 100%; opacity: 0; transform: scale(1); }
        }
        @keyframes clean-bubble {
          0% { bottom: 0; opacity: 0; }
          30% { opacity: 0.8; }
          100% { bottom: 100%; opacity: 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes drip {
          0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.8; }
          50% { transform: translateY(10px) scaleY(1.5); opacity: 0; }
        }
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-float-random { animation: float-random 15s ease-in-out infinite; }
        .animate-flow-in { animation: flow-in 3s linear infinite; }
        .animate-flow-out { animation: flow-out 2.5s linear infinite; }
        .animate-particle-flow { animation: particle-flow 2s linear infinite; }
        .animate-sparkle-flow { animation: sparkle-flow 2s linear infinite; }
        .animate-sediment { animation: sediment 4s ease-in-out infinite; }
        .animate-filter-pulse { animation: filter-pulse 2s ease-in-out infinite; }
        .animate-process-bubble { animation: process-bubble 3s ease-out infinite; }
        .animate-clean-bubble { animation: clean-bubble 2.5s ease-out infinite; }
        .animate-shimmer { animation: shimmer 3s linear infinite; }
        .animate-drip { animation: drip 2s ease-in-out infinite; }
        .animate-orbit { animation: orbit 30s linear infinite; }
      `}</style>
    </div>
  )
}

export default Hero