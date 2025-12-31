import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Contact from '../pages/Contact';

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Industrial', 'Medical', 'Infrastructure', 'Recycling'];

  const projects = [
    {
      title: "Zhyan Water Bottle Industry – RO System",
      category: "Industrial",
      size: "wide", 
      capacity: "12 m³/h",
      year: "2023",
      location: "Sulaymaniyah",
      description: "Complete RO system package (12 m³/h) consisting of sand filter, carbon filter, UV, and ultra-filtration for premium bottled water production.",
      image: [
        { src: '../assets/images/zyan.jpeg', title: 'Main RO System Unit' },
        { src: '../assets/images/zyan1.jpeg', title: 'Control Panel & Filters' }
      ],
    },
    {
      title: "Dana Gas Filtration",
      category: "Industrial",
      size: "standard",
      capacity: "20 m³/h",
      year: "2022",
      location: "Kurdistan",
      description: "High-capacity filtration (20 m³/h) removing suspended solids and hydrocarbons for oil & gas operations.",
      image: [
        { src: '../assets/images/danaGas.jpeg', title: 'Industrial Filtration System' }
      ],
    },
    {
      title: "Erbil Intl. Airport",
      category: "Infrastructure",
      size: "standard",
      capacity: "15 m³/h",
      year: "2023",
      location: "Erbil",
      description: "Strategic water softener installation (15 m³/h) protecting critical airport plumbing infrastructure.",
      image: [
        { src: '../assets/images/erbilAir.jpeg', title: 'Airport Water System' },
        { src: '../assets/images/erbilAir1.jpeg', title: 'Installation Complete' }
      ],
    },
    {
      title: "Ultra-Pure Industrial EDI",
      category: "Industrial",
      size: "tall", 
      capacity: "16 m³/h",
      year: "2023",
      location: "Iraq",
      description: "Advanced Electrodeionization system (16 m³/h) delivering ultra-pure water with near-zero conductivity for specialized industrial needs.",
      image: [
        { src: '../assets/images/roedi16m.jpeg', title: 'EDI System 16m³/h' }
      ],
    },
    {
      title: "Asia Hospital MBBR",
      category: "Medical",
      size: "standard",
      capacity: "15 m³/day",
      year: "2022",
      location: "Sulaymaniyah",
      description: "Bio-Reactor sewage treatment (15 m³/day) designed specifically for hazardous hospital wastewater.",
      image: [
        { src: '../assets/images/mbbr.jpeg', title: 'MBBR Reactor Tank' },
        { src: '../assets/images/mbbr1.jpeg', title: 'Treatment Process' }
      ],
    },
    {
      title: "Dual Purpose RO",
      category: "Infrastructure",
      size: "standard",
      capacity: "2 m³/h",
      year: "2023",
      location: "Kurdistan",
      description: "Versatile RO unit (2 m³/h) serving both potable drinking water and industrial process needs.",
      image: [
        { src: '../assets/images/rom2.jpeg', title: 'Compact RO Unit' }
      ],
    },
    {
      title: "Car Wash Recycling",
      category: "Recycling",
      size: "wide",
      capacity: "Custom",
      year: "2023",
      location: "Kurdistan",
      description: "Eco-friendly recycling system reducing TSS, oil, and grease to allow water reuse and reduce environmental impact.",
      image: [
        { src: '../assets/images/carwash.jpeg', title: 'Car Wash Recycling System' }
      ],
    },
    {
      title: "Containerized Softener",
      category: "Industrial",
      size: "standard",
      capacity: "20 m³/h",
      year: "2022",
      location: "Kurdistan",
      description: "Plug-and-play containerized solution (20 m³/h) for rapid deployment in remote oil fields.",
      image: [
        { src: '../assets/images/containerized20m3.jpeg', title: 'Containerized Unit' }
      ],
    },
    {
      title: "High Pressure Jet RO",
      category: "Industrial",
      size: "standard",
      capacity: "200 L/h",
      year: "2023",
      location: "Iraq",
      description: "Specialized low-conductivity water system (200 L/h) preventing nozzle blockage in cutting machinery.",
      image: [
        { src: '../assets/images/Containerized-ro-200l.jpeg', title: 'RO Container External' },
        { src: '../assets/images/Containerized-ro-200l1.jpeg', title: 'Internal Components' }
      ],
    },
    {
      title: "ABG Refinery EDI",
      category: "Industrial",
      size: "wide",
      capacity: "12 m³/h",
      year: "2023",
      location: "Kurdistan",
      description: "Critical steam production supply (12 m³/h) for high-pressure boilers in refinery operations.",
      image: [
        { src: '../assets/images/roedi12m.jpeg', title: 'Refinery EDI System' }
      ],
    },
  ];

  const hiddenTitlesOnHome = ['Car Wash Recycling1', 'High Pressure Jet RO2', 'ABG Refinery EDI3'];
  const projectsForRoute = isHomeRoute ? projects.filter((p) => !hiddenTitlesOnHome.includes(p.title)) : projects;

  const filteredProjects = activeFilter === 'All'
    ? projectsForRoute
    : projectsForRoute.filter((p) => p.category === activeFilter);

  // Modal Functions
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    if (selectedProject && selectedProject.image.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.image.length);
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject && selectedProject.image.length > 1) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedProject.image.length) % selectedProject.image.length
      );
    }
  }, [selectedProject]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, nextImage, prevImage]);

  return (
    <>
      <section 
    //   style={{ transform: 'scale(0.90)' }}
      className="relative w-full py-10 overflow-hidden">
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">Our Portfolio</span>
              </div>

              <h2 className="mt-2 text-4xl sm:text-5xl font-semibold text-white">
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
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semisefont-semibold transition-all duration-300 overflow-hidden ${
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
                onClick={() => openModal(project)}
                className={`group cursor-pointer relative rounded-3xl overflow-hidden bg-slate-800 border border-white/5 transition-all duration-500 hover:border-cyan-500/30
                  ${project.size === 'wide' ? 'md:col-span-2' : ''}
                  ${project.size === 'tall' ? 'lg:row-span-2' : ''}
                `}
              >
                
                {/* Image Layer */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                  <img 
                    src={project.image?.[0]?.src || project.image?.[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                  />
                  
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1028] via-[#020617]/30 to-transparent opacity-90 z-10"></div>
                </div>

                {/* Multiple Images Indicator */}
                {project.image.length > 1 && (
                  <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-semibold text-white">{project.image.length}</span>
                  </div>
                )}

                {/* Content Container */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  
                  {/* Top: Category Tag */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-cyan-300 uppercase tracking-widest transform transition-transform duration-500 group-hover:-translate-y-1">
                      {project.category}
                    </span>
                    
                    {/* View Gallery Button */}
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 transform translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 hover:bg-cyan-500 hover:border-cyan-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom: Text Info */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-white mb-3 leading-snug group-hover:text-cyan-50 transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-slate-300 text-sm leading-relaxed pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 border-l-2 border-cyan-500/50 pl-4">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Click to View Hint */}
                    <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <span className="text-xs text-cyan-300 font-medium">Click to view gallery</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isHomeRoute ? null : <Contact />}
      </section>

      {/* ===== IMAGE GALLERY MODAL ===== */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
          
          {/* Modal Content */}
          <div 
            className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col p-4 lg:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* ===== TOP BAR ===== */}
            <div className="flex-shrink-0 flex items-center justify-between mb-6">
              {/* Project Info */}
              <div className="flex items-center gap-4 min-w-0">
                {/* Project Icon */}
                <div className="hidden sm:flex flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 items-center justify-center">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                
                {/* Text Info */}
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-lg lg:text-2xl truncate">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-1 text-sm">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase">
                      {selectedProject.category}
                    </span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span className="text-slate-400 hidden sm:inline">{selectedProject.capacity}</span>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <span className="text-slate-400 hidden sm:inline">{selectedProject.location}</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {/* Image Counter */}
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-cyan-400 font-semibold">{currentImageIndex + 1}</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-400">{selectedProject.image.length}</span>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ===== MAIN IMAGE AREA ===== */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden rounded-3xl bg-black/50 border border-white/10">
              
              {/* Previous Button */}
              {selectedProject.image.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 lg:left-8 z-20 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Image Display */}
              <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-8">
                <img
                  src={selectedProject.image[currentImageIndex]?.src || selectedProject.image[currentImageIndex]}
                  alt={selectedProject.image[currentImageIndex]?.title || selectedProject.title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl shadow-black/50 transition-all duration-500"
                />

                {/* Image Title Overlay */}
                <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8">
                  <div className="flex items-center justify-between p-4 lg:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/30 flex items-center justify-center">
                        <span className="text-lg font-semibold text-cyan-400">{currentImageIndex + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg lg:text-xl">
                          {selectedProject.image[currentImageIndex]?.title || `Image ${currentImageIndex + 1}`}
                        </h4>
                        <p className="text-slate-400 text-sm mt-0.5">
                          {selectedProject.title}
                        </p>
                      </div>
                    </div>
                    
                    {/* Dots Indicator */}
                    {selectedProject.image.length > 1 && (
                      <div className="hidden sm:flex items-center gap-2">
                        {selectedProject.image.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`transition-all duration-300 rounded-full ${
                              idx === currentImageIndex 
                                ? 'w-8 h-3 bg-cyan-400' 
                                : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Next Button */}
              {selectedProject.image.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 lg:right-8 z-20 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* ===== THUMBNAILS BAR ===== */}
            {selectedProject.image.length > 1 && (
              <div className="flex-shrink-0 mt-6">
                <div className="flex justify-center gap-3 overflow-x-auto pb-2 px-4 scrollbar-hide">
                  {selectedProject.image.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-14 lg:w-28 lg:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? 'border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105' 
                          : 'border-transparent opacity-50 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <img 
                        src={img.src || img} 
                        alt={img.title || `Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Active Overlay */}
                      {idx === currentImageIndex && (
                        <div className="absolute inset-0 bg-cyan-500/10 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center">
                            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">{idx + 1}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ===== KEYBOARD SHORTCUTS ===== */}
            <div className="hidden lg:flex justify-center items-center gap-6 mt-4 text-slate-500 text-xs">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono">←</kbd>
                <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono">→</kbd>
                <span className="ml-1">Navigate images</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono">ESC</kbd>
                <span className="ml-1">Close gallery</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== CUSTOM SCROLLBAR HIDE ===== */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Projects;