import React, { useState, useEffect, useCallback } from 'react';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Zhyan Water Bottle Industry – RO System",
      category: "Industrial",
      capacity: "12 m³/h",
      year: "2023",
      location: "Sulaymaniyah",
      description: "Complete RO system package consisting of sand filter, carbon filter, UV, and ultra-filtration for premium bottled water production. This comprehensive system ensures the highest quality drinking water that meets international standards.",
      features: ["Sand Filter", "Carbon Filter", "UV Sterilization", "Ultra-Filtration", "RO Membrane"],
      images: [
        { src: '../assets/images/zyan.jpeg', title: 'Main RO System Unit' },
        { src: '../assets/images/zyan1.jpeg', title: 'Control Panel & Filters' }
      ],
    },
    {
      id: 2,
      title: "Dana Gas Filtration System",
      category: "Industrial",
      capacity: "20 m³/h",
      year: "2022",
      location: "Kurdistan Region",
      description: "High-capacity filtration system designed to remove suspended solids, organic matter and hydrocarbons, providing disinfected and clean water.",
      features: ["Hydrocarbon Removal", "Solid Filtration", "Industrial Grade", "24/7 Operation"],
      images: [
        { src: '../assets/images/danaGas.jpeg', title: 'Filtration System Overview' }
      ],
    },
    {
      id: 3,
      title: "Erbil International Airport",
      category: "Infrastructure",
      capacity: "15 m³/h",
      year: "2023",
      location: "Erbil",
      description: "Strategic water softener installation protecting critical airport plumbing infrastructure from scaling, turbidity, organic matter, and bacteria contamination.",
      features: ["Water Softening", "Scale Prevention", "Bacteria Control", "Continuous Supply"],
      images: [
        { src: '../assets/images/erbilAir.jpeg', title: 'Airport Water System' },
        { src: '../assets/images/erbilAir1.jpeg', title: 'Installation Complete' }
      ],
    },
    {
      id: 4,
      title: "Ultra-Pure Industrial EDI System",
      category: "Industrial",
      capacity: "16 m³/h",
      year: "2023",
      location: "Iraq",
      description: "Advanced Electrodeionization system delivering ultra-pure water with near-zero conductivity for specialized industrial applications requiring the highest water purity standards.",
      features: ["EDI Technology", "Ultra-Pure Output", "Near-Zero Conductivity", "Industrial Scale"],
      images: [
        { src: '../assets/images/roedi16m.jpeg', title: 'EDI System 16m³/h' }
      ],
    },
    {
      id: 5,
      title: "Asia Hospital MBBR Treatment",
      category: "Medical",
      capacity: "15 m³/day",
      year: "2022",
      location: "Sulaymaniyah",
      description: "Bio-Reactor sewage treatment system designed specifically for hazardous hospital wastewater using Moving Bed Bio-Reactor technology to safely process medical waste.",
      features: ["MBBR Technology", "Medical Waste", "Bio-Treatment", "Safe Discharge"],
      images: [
        { src: '../assets/images/mbbr.jpeg', title: 'MBBR Reactor Tank' },
        { src: '../assets/images/mbbr1.jpeg', title: 'Treatment Process' }
      ],
    },
    {
      id: 6,
      title: "Dual Purpose RO System",
      category: "Infrastructure",
      capacity: "2 m³/h",
      year: "2023",
      location: "Kurdistan",
      description: "Versatile RO unit designed to serve both potable drinking water and industrial process needs, providing flexibility and efficiency in water treatment.",
      features: ["Dual Purpose", "Drinking Water", "Industrial Use", "Compact Design"],
      images: [
        { src: '../assets/images/rom2.jpeg', title: 'Compact RO Unit' }
      ],
    },
    {
      id: 7,
      title: "Car Wash Water Recycling",
      category: "Recycling",
      capacity: "Custom",
      year: "2023",
      location: "Kurdistan",
      description: "Eco-friendly recycling system designed to reduce TSS, turbidity, oil, and grease while providing high-quality water suitable for reuse, minimizing environmental impact.",
      features: ["Water Recycling", "Oil Removal", "Eco-Friendly", "Cost Saving"],
      images: [
        { src: '../assets/images/carwash.jpeg', title: 'Car Wash Recycling System' }
      ],
    },
    {
      id: 8,
      title: "Containerized water softener system for DANA Gas company",
      category: "Industrial",
      capacity: "20 m³/h",
      year: "2022",
      location: "Kurdistan Region",
      description: "Plug-and-play containerized solution designed for rapid deployment in remote oil fields, removing TSS and hardness to prevent scaling in cooling systems.",
      features: ["Containerized", "Rapid Deploy", "Remote Ready", "Plug & Play"],
      images: [
        { src: '../assets/images/containerized20m3.jpeg', title: 'Containerized Unit' }
      ],
    },
    {
      id: 9,
      title: "High Pressure Jet RO System",
      category: "Industrial",
      capacity: "200 L/h",
      year: "2023",
      location: "Iraq",
      description: "Specialized low-conductivity water system (200 L/h) preventing nozzle blockage in cutting machinery.",
      features: ["High Pressure", "Low Conductivity", "Nozzle Safe", "Precision Water"],
      images: [
        { src: '../assets/images/Containerized-ro-200l.jpeg', title: 'RO Container External' },
        { src: '../assets/images/Containerized-ro1-200l.jpeg', title: 'Internal Components' }
      ],
    },
    {
      id: 10,
      title: "ABG Refinery EDI System",
      category: "Industrial",
      capacity: "12 m³/h",
      year: "2023",
      location: "Kurdistan Region",
      description: "Critical steam production water supply system for high-pressure boilers in refinery operations. Complete design, assembly, installation, and commissioning.",
      features: ["Refinery Grade", "Boiler Feed", "Steam Production", "High Pressure"],
      images: [
        { src: '../assets/images/roedi12m.jpeg', title: 'Refinery EDI System' }
      ],
    },
  ];

  // Open Modal
  const openModal = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  };

  // Navigate Images
  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
      setIsZoomed(false);
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
      );
      setIsZoomed(false);
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
    <div className="relative min-h-screen mt-20 overflow-hidden">
      
     

      {/* ===== HERO HEADER ===== */}
      <header className="relative z-10 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-start">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 backdrop-blur-xl mb-8">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative h-3 w-3 rounded-full bg-cyan-400"></span>
            </div>
            <span className="text-sm font-bold text-cyan-300 tracking-widest uppercase">Our Projects</span>
          </div>

          <h1 className="text-5xl flex gap-3 items-center sm:text-6xl lg:text-7xl font-semibold text-white mb-6">
            Project
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="max-w-3xl  text-start text-xl text-slate-400 leading-relaxed">
            Click on any image to view in full screen gallery
          </p>

        </div>
      </header>

      {/* ===== PROJECTS LIST ===== */}
      <main className="relative z-10 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isReversed={index % 2 !== 0}
              onImageClick={(imageIndex) => openModal(project, imageIndex)}
            />
          ))}
        </div>
      </main>

      {/* ===== IMAGE MODAL ===== */}
      <ImageModal
        isOpen={isModalOpen}
        project={selectedProject}
        currentIndex={currentImageIndex}
        isZoomed={isZoomed}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        onThumbnailClick={setCurrentImageIndex}
        onZoomToggle={() => setIsZoomed(!isZoomed)}
      />
    </div>
  );
};

// ===== PROJECT CARD COMPONENT =====
const ProjectCard = ({ project, index, isReversed, onImageClick }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  return (
    <div className="relative mb-24 lg:mb-32">
      {/* Background Number */}
      <div className={`absolute top-0 ${isReversed ? 'right-0' : 'left-0'} text-[200px] font-semibold text-white/[0.02] leading-none pointer-events-none -z-10`}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
        
        {/* IMAGE SECTION */}
        <div className={`relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer"
               onClick={() => onImageClick(currentImage)}>
            
            {/* Main Image */}
            {project.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img.src}
                alt={img.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  imgIndex === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/60 to-transparent"></div>
            
            {/* Click to View Overlay */}
            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium mt-2 text-center">Click to view</p>
              </div>
            </div>

            {/* Image Title Badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="px-4 py-2 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10">
                <p className="text-white text-sm font-medium truncate">
                  📷 {project.images[currentImage]?.title}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            {project.images.length > 1 && (
              <div className="absolute top-4 right-4 flex gap-2">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(imgIndex);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      imgIndex === currentImage 
                        ? 'bg-cyan-400 w-6' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-4">
              <div className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-xl border border-white/10">
                <span className="text-xs font-bold text-white">
                  {currentImage + 1} / {project.images.length}
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {project.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {project.images.map((img, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => onImageClick(imgIndex)}
                  className={`relative flex-1 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 group/thumb ${
                    imgIndex === currentImage 
                      ? 'border-cyan-400 shadow-lg shadow-cyan-500/30' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CONTENT SECTION */}
        <div className={`${isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
          <div className={`inline-flex items-center gap-3 mb-6 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            
            <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30">
              <span className="text-xs font-bold text-cyan-300 uppercase">{project.category}</span>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div className={`flex flex-wrap gap-2 mb-8 ${isReversed ? 'lg:justify-end' : ''}`}>
            {project.features.map((feature, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
                {feature}
              </span>
            ))}
          </div>

          <div className={`flex flex-wrap gap-6 ${isReversed ? 'lg:justify-end' : ''}`}>
            <div className="flex items-center gap-2">
           
              <div>
                <div className="text-xs text-slate-500">Capacity</div>
                <div className="text-sm font-bold text-white">{project.capacity}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
             
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="text-sm font-bold text-white">{project.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
             
              <div>
                <div className="text-xs text-slate-500">Year</div>
                <div className="text-sm font-bold text-white">{project.year}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      {index < 9 && (
        <div className="mt-24">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      )}
    </div>
  );
};

// ===== IMAGE MODAL COMPONENT =====
const ImageModal = ({ 
  isOpen, 
  project, 
  currentIndex, 
  isZoomed,
  onClose, 
  onNext, 
  onPrev, 
  onThumbnailClick,
  onZoomToggle 
}) => {
  if (!isOpen || !project) return null;

  const currentImage = project.images[currentIndex];
  const hasMultipleImages = project.images.length > 1;

  return (
    <div className="fixed inset-0 z-[100]" onClick={onClose}>
      
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
      
      {/* Modal Content */}
      <div 
        className="relative z-10 w-full h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* ===== TOP BAR ===== */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 lg:p-6 border-b border-white/10">
          {/* Project Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
              <span className="text-lg font-semibold text-cyan-400">
                {String(project.id).padStart(2, '0')}
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg lg:text-xl line-clamp-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium">
                  {project.category}
                </span>
                <span>•</span>
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Image Counter */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-cyan-400 font-bold">{currentIndex + 1}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">{project.images.length}</span>
            </div>

            {/* Zoom Button */}
            <button
              onClick={onZoomToggle}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ===== MAIN IMAGE AREA ===== */}
        <div className="flex-1 relative flex items-center justify-center p-4 lg:p-8 overflow-hidden">
          
          {/* Previous Button */}
          {hasMultipleImages && (
            <button
              onClick={onPrev}
              className="absolute left-4 lg:left-8 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all group"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div 
            className={`relative max-w-full max-h-full transition-all duration-500 ${
              isZoomed ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in'
            }`}
            onClick={onZoomToggle}
          >
            {/* Image */}
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="max-w-full max-h-[70vh] lg:max-h-[75vh] object-contain rounded-2xl shadow-2xl shadow-black/50"
            />

            {/* Image Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-lg lg:text-xl">
                    {currentImage.title}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {project.title}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <span>📷</span>
                  <span>Image {currentIndex + 1} of {project.images.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          {hasMultipleImages && (
            <button
              onClick={onNext}
              className="absolute right-4 lg:right-8 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all group"
            >
              <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* ===== THUMBNAILS BAR ===== */}
        {hasMultipleImages && (
          <div className="flex-shrink-0 p-4 lg:p-6 border-t border-white/10 bg-black/50">
            <div className="max-w-4xl mx-auto">
              {/* Scrollable Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {project.images.map((img, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => onThumbnailClick(imgIndex)}
                    className={`relative flex-shrink-0 w-24 h-16 lg:w-32 lg:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 group ${
                      imgIndex === currentIndex 
                        ? 'border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105' 
                        : 'border-transparent opacity-50 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Active Indicator */}
                    {imgIndex === currentIndex && (
                      <div className="absolute inset-0 border-2 border-cyan-400 rounded-xl">
                        <div className="absolute top-1 right-1 w-3 h-3 bg-cyan-400 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{imgIndex + 1}</span>
                    </div>

                    {/* Title Tooltip */}
                    <div className="absolute bottom-0 left-0 right-0 p-1 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-[10px] truncate text-center">{img.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== KEYBOARD SHORTCUTS HINT ===== */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-4 text-slate-500 text-xs">
          <div className="flex items-center gap-1">
            <kbd className="px-2 py-1 rounded bg-white/10 text-white">←</kbd>
            <kbd className="px-2 py-1 rounded bg-white/10 text-white">→</kbd>
            <span className="ml-1">Navigate</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-1">
            <kbd className="px-2 py-1 rounded bg-white/10 text-white">ESC</kbd>
            <span className="ml-1">Close</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-1">
            <span>Click image to zoom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;