import React, { useState } from 'react';
import Contact from './Contact';

// 1. Reusable Carousel Component based on your HTML structure
const ProjectCarousel = ({ images, altTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-slate-800 border border-white/10 shadow-2xl group">
      
      {/* Main Image Area (h-3/4) */}
      <div className="relative h-[75%] w-full overflow-hidden bg-slate-900">
        <img
          src={images[activeIndex]}
          alt={`${altTitle} - View ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Navigation Buttons (Only show if more than 1 image) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all opacity-0 group-hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all opacity-0 group-hover:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Area (h-1/4) - Matches your requested structure */}
      <div className="h-[25%] bg-[#0B1120] border-t border-white/10 flex items-center gap-3 px-4 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative flex-shrink-0 h-[80%] aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              activeIndex === idx 
                ? 'border-cyan-500 opacity-100 ring-2 ring-cyan-500/20' 
                : 'border-transparent opacity-40 hover:opacity-80'
            }`}
          >
            <img src={img} alt="thumb" className="w-full h-full object-cover" />
          </button>
        ))}
        
        {/* If only 1 image, show a placeholder text or logo instead of empty space */}
        {images.length === 1 && (
          <div className="w-full text-center text-slate-500 text-xs uppercase tracking-widest font-medium">
            R.O.S Co. Project View
          </div>
        )}
      </div>
    </div>
  );
};


// 2. Main Projects Page Component
const ProjectsPage = () => {
  const projects = [
    {
      title: "Zhyan Water Bottle Industry – RO System",
      category: "Industrial",
      description: "Complete RO system package (12 m³/h) consisting of sand filter, carbon filter, UV, and ultra-filtration for premium bottled water production.",
      image: ['../assets/images/zyan.jpeg', '../assets/images/zyan1.jpeg'],
    },
    {
      title: "Dana Gas Filtration",
      category: "Industrial",
      description: "High-capacity filtration (20 m³/h) removing suspended solids and hydrocarbons for oil & gas operations.",
      image: ['../assets/images/danaGas.jpeg'],
    },
    {
      title: "Erbil Intl. Airport",
      category: "Infrastructure",
      description: "Strategic water softener installation (15 m³/h) protecting critical airport plumbing infrastructure.",
      image: ['../assets/images/erbilAir.jpeg', '../assets/images/erbilAir1.jpeg'],
    },
    {
      title: "Ultra-Pure Industrial EDI",
      category: "Industrial",
      description: "Advanced Electrodeionization system (16 m³/h) delivering ultra-pure water with near-zero conductivity for specialized industrial needs.",
      image: ['../assets/images/roedi16m.jpeg'],
    },
    {
      title: "Asia Hospital MBBR",
      category: "Medical",
      description: "Bio-Reactor sewage treatment (15 m³/day) designed specifically for hazardous hospital wastewater.",
      image: ['../assets/images/mbbr.jpeg', '../assets/images/mbbr1.jpeg'],
    },
    {
      title: "Dual Purpose RO",
      category: "Infrastructure",
      description: "Versatile RO unit (2 m³/h) serving both potable drinking water and industrial process needs.",
      image: ['../assets/images/rom2.jpeg'],
    },
    {
      title: "Car Wash Recycling",
      category: "Recycling",
      description: "Eco-friendly recycling system reducing TSS, oil, and grease to allow water reuse and reduce environmental impact.",
      image: ['../assets/images/carwash.jpeg'],
    },
    {
      title: "Containerized Softener",
      category: "Industrial",
      description: "Plug-and-play containerized solution (20 m³/h) for rapid deployment in remote oil fields.",
      image: ['../assets/images/containerized20m3.jpeg'],
    },
    {
      title: "High Pressure Jet RO",
      category: "Industrial",
      description: "Specialized low-conductivity water system (200 L/h) preventing nozzle blockage in cutting machinery.",
      image: ['../assets/images/Containerized-ro-200l.jpeg', '../assets/images/Containerized-ro-200l1.jpeg'],
    },
    {
      title: "ABG Refinery EDI",
      category: "Industrial",
      description: "Critical steam production supply (12 m³/h) for high-pressure boilers in refinery operations.",
      image: ['../assets/images/roedi12m.jpeg'],
    },
  ];

  return (
    <section className="w-full  py-20 lg:py-28 overflow-hidden relative">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
         {/* Vertical Guide Line */}
         <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className=" mb-24">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">Our Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Showcase</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            Delivering excellence in water treatment solutions across industrial, medical, and infrastructure sectors.
          </p>
        </div>

        {/* Projects List - Alternating Layout */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => {
            // Determine layout direction based on index (even/odd)
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                
                {/* 1. TEXT SECTION */}
                <div className="w-full lg:w-1/2 space-y-6">
                  {/* Category Badge */}
                  <div className={`flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}>
                    <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className={`${isEven ? 'lg:text-left' : 'lg:text-right'} text-left`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-cyan-500/30 pl-6 ml-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Specs / Details (Optional Visuals) */}
                  <div className={`flex gap-6 pt-4 ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}>
                    <div className="flex flex-col gap-1">
                       <span className="text-[10px] uppercase text-slate-500 tracking-widest font-semibold">Status</span>
                       <span className="text-white font-medium flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-green-500"></span> Completed
                       </span>
                    </div>
                    <div className="w-[1px] h-10 bg-white/10"></div>
                    <div className="flex flex-col gap-1">
                       <span className="text-[10px] uppercase text-slate-500 tracking-widest font-semibold">Client</span>
                       <span className="text-white font-medium">Trusted Partner</span>
                    </div>
                  </div>
                </div>


                {/* 2. IMAGE CAROUSEL SECTION */}
                <div className="w-full lg:w-1/2 relative">
                  
                  {/* Decorative Elements around image */}
                  <div className={`absolute top-10 -bottom-10 w-full bg-cyan-500/5 rounded-3xl -z-10 ${isEven ? '-right-10' : '-left-10'}`}></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 rounded-full blur-xl"></div>

                  {/* The Custom Carousel Component */}
                  <ProjectCarousel images={project.image} altTitle={project.title} />

                  {/* Corner Accent */}
                  <div className={`absolute -bottom-4 w-24 h-24 border-b-2 border-cyan-500/50 ${isEven ? '-left-4 border-l-2 rounded-bl-3xl' : '-right-4 border-r-2 rounded-br-3xl'}`}></div>
                </div>

              </div>
            );
          })}
        </div>

        {/* End Line */}
        <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      </div>
      <Contact />
    </section>
  );
};

export default ProjectsPage;