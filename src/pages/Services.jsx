import { useLocation } from 'react-router-dom'
import { 
  Droplets, 
  Waves, 
  Factory, 
  Home, 
  Car, 
  Filter, 
  Wind, 
  Settings, 
  HelpCircle ,
} from "lucide-react";
import Experience from './Experience';
import Contact from './Contact';
const services = [
  {
    icon: <Droplets className="w-6 h-6 text-cyan-300" />,
    title: 'Reverse Osmosis (RO) Systems',
    desc:
      'Design and supply of customized RO systems for industrial, potable, and process water applications.',
    points: ['Custom design', 'Installation', 'Commissioning'],
  },
  {
    icon: <Waves className="w-6 h-6 text-cyan-300" />,  
    title: 'RO-EDI & High-Purity Water',
    desc:
      'High-purity and demineralized water treatment solutions for power plants, oil & gas, and industrial facilities.',
    points: ['RO + EDI integration', 'Ultra-pure water', 'Industrial grade'],
  },
  {
    icon: <Factory className="w-6 h-6 text-cyan-300" />,
    title: 'Industrial Wastewater Treatment',
    desc:
      'Treatment solutions for industrial effluents with COD, BOD, TSS, oil & hydrocarbon removal.',
    points: ['Effluent treatment', 'Water reuse', 'Compliance systems'],
  },
  {
    icon: <Home className="w-6 h-6 text-cyan-300" />,
    title: 'Domestic Sewage Treatment (STP)',
    desc: 'Packaged and customized STP systems using MBBR and conventional treatment processes.',
    points: ['MBBR process', 'Custom design', 'Full installation'],
  },
  {
      icon: <Car className="w-6 h-6 text-cyan-300" />,
    title: 'Car Wash Water Recycling',
    desc:
      'Water recovery and reuse systems to reduce fresh water consumption with compact solutions.',
    points: ['Water recovery', 'Compact design', 'Cost effective'],
  },
  {
    icon: <Filter className="w-6 h-6 text-cyan-300" />,
    title: 'Filtration & Softening Systems',
    desc:
      'Sand, carbon, multimedia filtration and automatic/manual softening systems for pre-treatment.',
    points: ['Multi-media filters', 'Water softeners', 'Pre-treatment'],
  },
  {
   icon: <Wind className="w-6 h-6 text-cyan-300" />,
    title: 'Odor Control Systems',
    desc: 'Odor mitigation systems for wastewater and well water applications.',
    points: ['Odor removal', 'Custom solutions', 'Installation'],
  },
  {
    
     icon: <Settings className="w-6 h-6 text-cyan-300" />,
    title: 'Operation & Maintenance',
    desc:
      'System performance evaluation, preventive and corrective maintenance, spare parts supply.',
    points: ['24/7 support', 'Spare parts', 'Optimization'],
  },
  {
   
     icon: <HelpCircle className="w-6 h-6 text-cyan-300" />,
    title: 'Engineering Consultation',
    desc:
      'Water quality analysis, system sizing, process selection and technical support.',
    points: ['Water analysis', 'System sizing', 'Technical guidance'],
  },
]

export default function Services() {
  const location = useLocation().pathname

  return (
    <div
    // style={{ transform: 'scale(0.90)' }}
     className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8  my-28">
       <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 backdrop-blur-sm">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
               </span>
               <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">OUR SERVICES</span>
             </div>
     
      
      
     
      <h2 className="mt-2 text-4xl sm:text-5xl font-semibold text-white">
        Complete Water <span className="text-cyan-400">Treatment Solutions</span>
      </h2>
      <p className="mt-4 text-cyan-100/80">
        From design to commissioning, we provide end-to-end water treatment services tailored to your specific needs.
      </p>
    

      

      <div className="mt-10 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border-b  border-cyan-500/30 bg-cyan-/5 px-2 py-4 lg:p-6   ring-white/10 transition hover:-translate-y-0.5 hover:border-white/20"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-white/10">
                  {s.icon}
              </span>
              <div>
                <div className="text-white font-semisefont-semibold">{s.title}</div>
                
              </div>
            </div>
            <p className="mt-3 text-cyan-100/60 text-sm">{s.desc}</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-cyan-100/80 text-sm">
              {s.points.map((p) => (
                <li key={p} className="">
                 
                  <span className='bg-cyan-500/20 text-xs p-0.5 text-cyan-300 rounded-full border border-cyan-700 whitespace-nowrap'>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


     {location === '/services' &&
     <>
       <div className="my-16 mt-28 relative">
        <div className="pointer-events-none absolute inset-x-0 top-7 hidden lg:block h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="mt-4 text-white font-semisefont-semibold text-lg">{step.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-cyan-100/80">{step.desc}</div>
              <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div> 
     <Experience /> 
        <Contact />
     </> 
     }


    
    </div>
  )
}
