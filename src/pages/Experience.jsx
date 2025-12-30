import { useLocation } from "react-router-dom"

export default function Experience() {

  const location = useLocation().pathname
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
       <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase">OUR EXPERIENCE</span>
            </div>
      
     <div className="mt-8 border-l-2 pl-6 border-white/10  gap-6 flex flex-col lg:flex-row justify-between">
      <div className="">
       <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
        Growth & <span className="text-cyan-400">Development</span>
      </h2>
      <p className="mt-4 text-cyan-100/80 max-w-3xl">
        With years of hands-on experience in water and wastewater treatment projects, R.O.S Co. has demonstrated steady
        growth and technical development across multiple sectors.
      </p>
      
        <div className="rounded-2xl mt-6 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
          <div className="text-white text-xl font-semibold">Capability Areas</div>
          <div className="mt-1 text-cyan-100/70 text-lg">Core solutions delivered across multiple sectors</div>
          <ul className="mt-6 grid gap-3 text-cyan-100/80 text-lg">
            {[
              'Industrial and process water treatment systems',
              'RO and RO-EDI high-purity water plants',
              'Wastewater and sewage treatment facilities',
              'Containerized and site-built treatment systems',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-5 items-center justify-center rounded-full bg-cyan-500/20 ring-1 ring-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-cyan-200">
                    <path
                      fillRule="evenodd"
                      d="M20.03 6.22a.75.75 0 01.03 1.06l-9.25 10a.75.75 0 01-1.08.02l-4.25-4.25a.75.75 0 011.06-1.06l3.7 3.7 8.72-9.43a.75.75 0 011.07-.04z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div></div>
        {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-7 ring-1 ring-white/10">
          <div className="text-white text-lg font-semibold">Continuous Improvement</div>
          <p className="mt-3 text-cyan-100/80">
            Through continuous learning, system optimization, and technology upgrades, we ensure our solutions remain
            efficient, reliable, and future-ready.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
              <div className="text-xl font-bold text-white">2007</div>
              <div className="text-cyan-100/80">Established Since</div>
              <div className="text-xs text-cyan-100/60 mt-1">Legal company from 2012</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
              <div className="text-xl font-bold text-white">17+</div>
              <div className="text-cyan-100/80">Years of Experience</div>
              <div className="text-xs text-cyan-100/60 mt-1">In water treatment</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
              <div className="text-xl font-bold text-white">100%</div>
              <div className="text-cyan-100/80">Client Satisfaction</div>
              <div className="text-xs text-cyan-100/60 mt-1">Quality guaranteed</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20">
              <div className="text-xl font-bold text-white">ISO</div>
              <div className="text-cyan-100/80">Standards Compliance</div>
              <div className="text-xs text-cyan-100/60 mt-1">International quality</div>
            </div>
          </div>
        </div> */}
 {/* <div className=" relative ">
        <div className="pointer-events-none absolute inset-x-0 top-7 hidden lg:block h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="grid gap-6 sm:grid-cols-2 ">
          {[
            {
              title: 'Design',
              desc: 'Water analysis, process selection, and system sizing.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cyan-200">
                  <path d="M12 3c-2.8 3.6-7 7.3-7 11.1A7 7 0 0012 21a7 7 0 007-6.9C19 10.3 14.8 6.6 12 3z" />
                </svg>
              ),
            },
            {
              title: 'Build',
              desc: 'Supply, fabrication, installation, and integration on-site.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cyan-200">
                  <path d="M2.25 20.25h19.5v-1.5H2.25v1.5zM6 18V9.75a.75.75 0 01.75-.75h3A.75.75 0 0110.5 9.75V18H6zm7.5 0V6.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V18h-4.5z" />
                </svg>
              ),
            },
            {
              title: 'Commission',
              desc: 'Testing, start-up, optimization, and operator training.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cyan-200">
                  <path
                    fillRule="evenodd"
                    d="M20.03 6.22a.75.75 0 01.03 1.06l-9.25 10a.75.75 0 01-1.08.02l-4.25-4.25a.75.75 0 011.06-1.06l3.7 3.7 8.72-9.43a.75.75 0 011.07-.04z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
            },
            {
              title: 'Support',
              desc: 'Maintenance, spare parts supply, and performance upgrades.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cyan-200">
                  <path d="M11.983 2.25a.75.75 0 01.75.75v1.764a7.49 7.49 0 012.77 1.144l1.248-1.248a.75.75 0 011.06 0l1.94 1.94a.75.75 0 010 1.06l-1.248 1.248a7.49 7.49 0 011.144 2.77H21a.75.75 0 010 1.5h-1.764a7.49 7.49 0 01-1.144 2.77l1.248 1.248a.75.75 0 010 1.06l-1.94 1.94a.75.75 0 01-1.06 0l-1.248-1.248a7.49 7.49 0 01-2.77 1.144V21a.75.75 0 01-1.5 0v-1.764a7.49 7.49 0 01-2.77-1.144l-1.248 1.248a.75.75 0 01-1.06 0l-1.94-1.94a.75.75 0 010-1.06l1.248-1.248a7.49 7.49 0 01-1.144-2.77H3a.75.75 0 010-1.5h1.764a7.49 7.49 0 011.144-2.77L4.66 7.66a.75.75 0 010-1.06l1.94-1.94a.75.75 0 011.06 0l1.248 1.248a7.49 7.49 0 012.77-1.144V3a.75.75 0 01.75-.75zm.017 6a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                </svg>
              ),
            },
          ].map((step, idx) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-2xl  border-white/10  p-6 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 ring-1 ring-white/10">
                  {step.icon}
                </div>
                <div className="inline-flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-100/70 ring-1 ring-white/10">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-white font-semibold text-lg">{step.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-cyan-100/80">{step.desc}</div>
              <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div> */}
        
 {/* ===== LEFT SIDE - Animated Stats Tower ===== */}
      <div className="relative  ">
        {/* 3D Experience Tower */}
        <div className="relative p-8 lg:p-10 rounded-3xl  backdrop-blur-xl  overflow-hidden group hover:border-cyan-400/30 transition-all duration-500"
             >
          
          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          {/* Corner Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-100 transition-opacity duration-500"></div>
          
          {/* Experience Timeline */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Years of Excellence</h3>
                <p className="text-slate-400">Building trust through quality</p>
              </div>
            </div>
            
            {/* Animated Progress Bars */}
            <div className="space-y-5">
              {[
                { year: '2007-2012', label: 'Foundation Years', progress: 100, color: 'cyan' },
                { year: '2012-2018', label: 'Regional Expansion', progress: 100, color: 'blue' },
                { year: '2018-2022', label: 'Industrial Growth', progress: 100, color: 'indigo' },
                { year: '2022-Present', label: 'Innovation Era', progress: 75, color: 'purple' },
              ].map((item, index) => (
                <div key={index} className="group/bar">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white font-medium">{item.label}</span>
                    <span className="text-xs text-slate-500">{item.year}</span>
                  </div>
                  <div className="relative h-3 rounded-full bg-slate-800/50 overflow-hidden">
                    <div 
                      className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-400 transition-all duration-1000 ease-out group-hover/bar:shadow-lg group-hover/bar:shadow-${item.color}-500/30`}
                      style={{ 
                        width: `${item.progress}%`,
                        animation: `progressBar 2s ease-out ${index * 0.3}s forwards`
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                    {/* Progress Dot */}
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-${item.color}-400 border-2 border-slate-900 shadow-lg transition-all duration-1000`}
                      style={{ left: `calc(${item.progress}% - 8px)` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 my-3 border-t border-white/10">
              {[
                { number: '17+', label: 'Years' },
                { number: '500+', label: 'Projects' },
                { number: '50+', label: 'Experts' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-semibold text-white">{stat.number}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      </div>


{/* bottom */}
{location === '/' ? <></> : <div className=" lg:border-r-2 border-b-2 border-t-2 border-white/10 grid lg:gap-6 lg:grid-cols-2 lg:items-start">
        <div className="lg:col-span- border-b-2 border-r-2 lg:border-b-0 lg:border-r-0 border-white/10 px-4 ring-white/10">
          <div className="text-white text-lg font-semibold pt-4">Milestones</div>
          <div className="mt-1 text-cyan-100/70 text-sm">A timeline of growth and technical development</div>
          <div className="mt-6 grid gap-4">
            {[
              { year: '2007', title: 'Started operations', desc: 'Water solutions delivered across multiple applications.' },
              { year: '2012', title: 'Legal company registration', desc: 'Expanded capacity and formal project delivery.' },
              { year: 'Today', title: 'Continuous development', desc: 'Ongoing system optimization and technology upgrades.' },
            ].map((m) => (
              <div key={m.year} className=" p-5  border-cyan-500/40">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-100/80 ring-1 ring-white/10">
                      {m.year}
                    </span>
                    <div className="text-white font-semibold">{m.title}</div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-cyan-100/80">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className=" p-2 border-l-2 lg:border-l-0 px-4 pt-5 border-white/10">
          <div className="text-white text-lg font-semibold ">How We Work</div>
          <div className="mt-1 text-cyan-100/70 text-sm">A clear process, from assessment to long-term support</div>
          <div className="mt-6 grid gap-3">
            {[
              { title: 'Assess', desc: 'Review water quality, capacity, and site constraints.' },
              { title: 'Engineer', desc: 'Select process and size equipment for stable operation.' },
              { title: 'Deliver', desc: 'Install, test, commission, and train operators.' },
              { title: 'Support', desc: 'Maintain performance with service and spare parts.' },
            ].map((s, idx) => (
              <div key={s.title} className="   p-5 ">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">{s.title}</div>
                  <div className="text-xs text-cyan-100/60">0{idx + 1}</div>
                </div>
                <div className="mt-2 text-sm text-cyan-100/80">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div> }
      
    </div>
  )
}
