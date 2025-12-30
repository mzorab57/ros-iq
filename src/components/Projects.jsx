import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Contact from '../pages/Contact';

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  const categories = ['All', 'Industrial', 'Medical', 'Infrastructure', 'Recycling'];

  const projects = [
    {
      title: "Zhyan Water Bottle Industry – RO System",
      category: "Industrial",
      size: "wide", 
      description: "Complete RO system package (12 m³/h) consisting of sand filter, carbon filter, UV, and ultra-filtration for premium bottled water production.",
      image: ['../assets/images/zyan.jpeg', '../assets/images/zyan2.jpeg'],
    },
    {
      title: "Dana Gas Filtration",
      category: "Industrial",
      size: "standard",
      description: "High-capacity filtration (20 m³/h) removing suspended solids and hydrocarbons for oil & gas operations.",
      image: ['../assets/images/danaGas.jpeg'],
    },
    {
      title: "Erbil Intl. Airport",
      category: "Infrastructure",
      size: "standard",
      description: "Strategic water softener installation (15 m³/h) protecting critical airport plumbing infrastructure.",
      image: ['../assets/images/erbilAir.jpeg', '../assets/images/erbilAir1.jpeg'],
    },
    {
      title: "Ultra-Pure Industrial EDI",
      category: "Industrial",
      size: "tall", 
      description: "Advanced Electrodeionization system (16 m³/h) delivering ultra-pure water with near-zero conductivity for specialized industrial needs.",
      image: ['../assets/images/roedi16m.jpeg'],
    },
    {
      title: "Asia Hospital MBBR",
      category: "Medical",
      size: "standard",
      description: "Bio-Reactor sewage treatment (15 m³/day) designed specifically for hazardous hospital wastewater.",
      image: ['../assets/images/mbbr.jpeg', '../assets/images/mbbr1.jpeg'],
    },
    {
      title: "Dual Purpose RO",
      category: "Infrastructure",
      size: "standard",
      description: "Versatile RO unit (2 m³/h) serving both potable drinking water and industrial process needs.",
     image: ['../assets/images/rom2.jpeg'],
    },
    {
      title: "Car Wash Recycling",
      category: "Recycling",
      size: "wide",
      description: "Eco-friendly recycling system reducing TSS, oil, and grease to allow water reuse and reduce environmental impact.",
      image: ['../assets/images/carwash.jpeg'],
    },
    {
      title: "Containerized Softener",
      category: "Industrial",
      size: "standard",
      description: "Plug-and-play containerized solution (20 m³/h) for rapid deployment in remote oil fields.",
      image: ['../assets/images/containerized20m3.jpeg'],
    },
    {
      title: "High Pressure Jet RO",
      category: "Industrial",
      size: "standard",
      description: "Specialized low-conductivity water system (200 L/h) preventing nozzle blockage in cutting machinery.",
      image: ['../assets/images/Containerized-ro-200l.jpeg', '../assets/images/Containerized-ro-200l1.jpeg'],
    },
    {
      title: "ABG Refinery EDI",
      category: "Industrial",
      size: "wide",
      description: "Critical steam production supply (12 m³/h) for high-pressure boilers in refinery operations.",
      image: ['../assets/images/roedi12m.jpeg'],
    },
  ];

  const hiddenTitlesOnHome = ['Car Wash Recycling', 'High Pressure Jet RO', 'ABG Refinery EDI'];
  const projectsForRoute = isHomeRoute ? projects.filter((p) => !hiddenTitlesOnHome.includes(p.title)) : projects;

  const filteredProjects = activeFilter === 'All'
    ? projectsForRoute
    : projectsForRoute.filter((p) => p.category === activeFilter);

  return (
    <section className="relative w-full py-10   overflow-hidden">
      
      {/* Background Ambience */}
      {/* <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-cyan-900/10 to-transparent blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]"></div>
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase">Our Portfolio</span>
            </div>

             <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-white">
        Engineering <span className="text-cyan-400">Excellence</span>
        
      </h2>
       <p className="mt-4 text-cyan-100/80 max-w-3xl">
       Engineering excellence through innovative water treatment solutions across industrial, medical, and infrastructure projects.
      </p>
           
          </div>

          {/* Premium Filter Tabs */}
          <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md inline-flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                  activeFilter === cat
                    ? 'text-white shadow-lg shadow-cyan-900/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {activeFilter === cat && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl -z-10"></div>
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY / BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px] grid-flow-dense">
          
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate(`/projects`);
              }}
              className={`group cursor-pointer relative rounded-3xl overflow-hidden bg-slate-800 border border-white/5 transition-all duration-500 hover:border-cyan-500/30
                ${project.size === 'wide' ? 'md:col-span-2' : ''}
                ${project.size === 'tall' ? 'lg:row-span-2' : ''}
              `}
            >
              
              {/* Image Layer */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <img 
                  src={project.image?.[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1028] via-[#020617]/30 to-transparent opacity-90 z-10"></div>
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                
                {/* Top: Category Tag */}
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold text-cyan-300 uppercase tracking-widest transform transition-transform duration-500 group-hover:-translate-y-1">
                     {project.category}
                  </span>
                  
                  {/* Arrow Icon */}
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 transform translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 hover:bg-cyan-500 hover:border-cyan-500">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>

                {/* Bottom: Text Info */}
                <div>
                  <h3 className="text-xl sm:text-2xl  font-light text-white mb-3 leading-snug group-hover:text-cyan-50 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <div className="overflow-hidden">
                       <p className="text-slate-300 text-sm leading-relaxed pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 border-l-2 border-cyan-500/50 pl-4">
                         {project.description}
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isHomeRoute ? null : <Contact />}
    </section>
  );
};

export default Projects;
