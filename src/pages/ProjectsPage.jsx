import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const projectspage = useMemo(() => [
    {
      id: 1,
      title: t('projectspage.p1.title'),
      category: t('projectspage.categories.industrial'),
      capacity: "12 m³/h",
      year: "2023",
      location: t('projectspage.locations.sulaymaniyah'),
      description: t('projectspage.p1.desc'),
      features: t('projectspage.p1.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/zyan.jpeg', title: t('projectspage.p1.img1') },
        { src: '../assets/images/zyan1.jpeg', title: t('projectspage.p1.img2') }
      ],
    },
    {
      id: 2,
      title: t('projectspage.p2.title'),
      category: t('projectspage.categories.industrial'),
      capacity: "20 m³/h",
      year: "2022",
      location: t('projectspage.locations.kurdistan'),
      description: t('projectspage.p2.desc'),
      features: t('projectspage.p2.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/danaGas.jpeg', title: t('projectspage.p2.img1') }
      ],
    },
    {
      id: 3,
      title: t('projectspage.p3.title'),
      category: t('projectspage.categories.infrastructure'),
      capacity: "15 m³/h",
      year: "2023",
      location: t('projectspage.locations.erbil'),
      description: t('projectspage.p3.desc'),
      features: t('projectspage.p3.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/erbilAir.jpeg', title: t('projectspage.p3.img1') },
        { src: '../assets/images/erbilAir1.jpeg', title: t('projectspage.p3.img2') }
      ],
    },
    {
      id: 4,
      title: t('projectspage.p4.title'),
      category: t('projectspage.categories.industrial'),
      capacity: "16 m³/h",
      year: "2023",
      location: t('projectspage.locations.iraq'),
      description: t('projectspage.p4.desc'),
      features: t('projectspage.p4.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/roedi16m.jpeg', title: t('projectspage.p4.img1') }
      ],
    },
    {
      id: 5,
      title: t('projectspage.p5.title'),
      category: t('projectspage.categories.medical'),
      capacity: "15 m³/day",
      year: "2022",
      location: t('projectspage.locations.sulaymaniyah'),
      description: t('projectspage.p5.desc'),
      features: t('projectspage.p5.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/mbbr.jpeg', title: t('projectspage.p5.img1') },
        { src: '../assets/images/mbbr1.jpeg', title: t('projectspage.p5.img2') }
      ],
    },
    {
      id: 6,
      title: t('projectspage.p6.title'),
      category: t('projectspage.categories.infrastructure'),
      capacity: "2 m³/h",
      year: "2023",
      location: t('projectspage.locations.kurdistan'),
      description: t('projectspage.p6.desc'),
      features: t('projectspage.p6.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/rom2.jpeg', title: t('projectspage.p6.img1') }
      ],
    },
    {
      id: 7,
      title: t('projectspage.p7.title'),
      category: t('projectspage.categories.recycling'),
      capacity: t('projectspage.labels.custom'),
      year: "2023",
      location: t('projectspage.locations.kurdistan'),
      description: t('projectspage.p7.desc'),
      features: t('projectspage.p7.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/carwash.jpeg', title: t('projectspage.p7.img1') }
      ],
    },
    {
      id: 8,
      title: t('projectspage.p8.title'),
      category: t('projectspage.categories.industrial'),
      capacity: "20 m³/h",
      year: "2022",
      location: t('projectspage.locations.kurdistan'),
      description: t('projectspage.p8.desc'),
      features: t('projectspage.p8.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/containerized20m3.jpeg', title: t('projectspage.p8.img1') }
      ],
    },
    {
      id: 9,
      title: t('projectspage.p9.title'),
      category: t('projectspage.categories.industrial'),
      capacity: "200 L/h",
      year: "2023",
      location: t('projectspage.locations.iraq'),
      description: t('projectspage.p9.desc'),
      features: t('projectspage.p9.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/Containerized-ro-200l.jpeg', title: t('projectspage.p9.img1') },
        { src: '../assets/images/Containerized-ro1-200l.jpeg', title: t('projectspage.p9.img2') }
      ],
    },
    {
      id: 10,
      title: t('projectspage.p10.title'),
      category: t('projectspage.categories.industrial'),
      capacity: "12 m³/h",
      year: "2023",
      location: t('projectspage.locations.kurdistan'),
      description: t('projectspage.p10.desc'),
      features: t('projectspage.p10.features', { returnObjects: true }),
      images: [
        { src: '../assets/images/roedi12m.jpeg', title: t('projectspage.p10.img1') }
      ],
    },
  ], [t]);

  const openModal = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
      setIsZoomed(false);
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
      setIsZoomed(false);
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, nextImage, prevImage]);

  return (
    <div  className="relative min-h-screen mt-20 overflow-hidden">
      <header className="relative z-10 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-start">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 backdrop-blur-xl mb-8">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative h-3 w-3 rounded-full bg-cyan-400"></span>
            </div>
            <span className="text-sm font-bold text-cyan-300 tracking-widest uppercase">{t('projectspage.badge')}</span>
          </div>
          <h1 className="text-5xl flex gap-3 items-center sm:text-6xl lg:text-7xl font-semibold text-white mb-6">
            {t('projectspage.hero_title_1')}
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t('projectspage.hero_title_2')}
            </span>
          </h1>
          <p className="max-w-3xl text-start text-xl text-slate-400 leading-relaxed">{t('projectspage.hero_subtitle')}</p>
        </div>
      </header>

      <main dir='ltr' className="relative z-10 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {projectspage.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isReversed={index % 2 !== 0}
              onImageClick={(imageIndex) => openModal(project, imageIndex)}
              t={t}
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
        t={t}
      />
    </div>
  );
};

// ===== PROJECT CARD COMPONENT =====
const ProjectCard = ({ project, index, isReversed, onImageClick, t }) => {
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
        {/* Image Section */}
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
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300 flex items-center justify-center text-center">
              <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium mt-2">{t('projectspage.labels.click_view')}</p>
              </div>
            </div>
            
            {/* Image Title Badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="px-4 py-2 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10">
                <p className="text-white text-sm font-medium truncate">📷 {project.images[currentImage]?.title}</p>
              </div>
            </div>

            {/* Image Counter */}
            {project.images.length > 1 && (
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-xl border border-white/10">
                  <span className="text-xs font-bold text-white">{currentImage + 1} / {project.images.length}</span>
                </div>
              </div>
            )}

            {/* Navigation Dots */}
            {project.images.length > 1 && (
              <div className="absolute top-4 left-4 flex gap-1.5">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImage ? 'bg-cyan-400 w-6' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnail Strip - Below Image */}
          {project.images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {project.images.map((img, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => onImageClick(imgIndex)}
                  className={`relative flex-1 h-16 lg:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 group/thumb ${
                    imgIndex === currentImage 
                      ? 'border-cyan-400 shadow-lg shadow-cyan-500/30' 
                      : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  {/* Title Tooltip */}
                  <div className="absolute bottom-0 left-0 right-0 p-1 bg-black/70 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                    <p className="text-white text-[9px] truncate text-center">{img.title}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className={`${isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
          <div className={`inline-flex items-center gap-3 mb-6 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30">
              <span className="text-xs font-bold text-cyan-300 uppercase">{project.category}</span>
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">{project.description}</p>
          
          <div className={`flex flex-wrap gap-2 mb-8 ${isReversed ? 'lg:justify-end' : ''}`}>
            {Array.isArray(project.features) && project.features.map((feature, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">{feature}</span>
            ))}
          </div>
          
          <div className={`flex flex-wrap gap-6 ${isReversed ? 'lg:justify-end' : ''}`}>
            <div>
              <div className="text-xs text-slate-500">{t('projectspage.labels.capacity')}</div>
              <div className="text-sm font-bold text-white">{project.capacity}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">{t('projectspage.labels.location')}</div>
              <div className="text-sm font-bold text-white">{project.location}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">{t('projectspage.labels.year')}</div>
              <div className="text-sm font-bold text-white">{project.year}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===== IMAGE MODAL COMPONENT =====
const ImageModal = ({ isOpen, project, currentIndex, isZoomed, onClose, onNext, onPrev, onThumbnailClick, onZoomToggle, t }) => {
  if (!isOpen || !project) return null;
  
  const currentImage = project.images[currentIndex];
  const hasMultipleImages = project.images.length > 1;

  return (
    <div className="fixed inset-0 z-[100]" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
      
      {/* Modal Content */}
      <div className="relative z-10 w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
        
        {/* ===== TOP BAR ===== */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 lg:p-6 border-b border-white/10">
          {/* Project Info */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 items-center justify-center flex-shrink-0">
              <span className="text-lg font-semibold text-cyan-400">{String(project.id).padStart(2, '0')}</span>
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-bold text-lg lg:text-xl line-clamp-1">{project.title}</h3>
              <div className="flex flex-wrap items-center gap-2 lg:gap-3 text-sm text-slate-400">
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium">{project.category}</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">{project.location}</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
            {/* Image Counter */}
            {hasMultipleImages && (
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-cyan-400 font-bold">{currentIndex + 1}</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-400">{project.images.length}</span>
              </div>
            )}

            {/* Zoom Button */}
            <button
              onClick={onZoomToggle}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
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
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-all"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="absolute left-2 lg:left-8 z-20 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all group"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:-translate-x-0.5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div 
            className={`relative transition-all duration-500 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`} 
            onClick={onZoomToggle}
          >
            <img 
              src={currentImage.src} 
              alt={currentImage.title}
              className="max-w-full max-h-[60vh] lg:max-h-[65vh] object-contain rounded-2xl shadow-2xl shadow-black/50" 
            />
            
            {/* Image Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-base lg:text-lg">{currentImage.title}</h4>
                  <p className="text-slate-400 text-xs lg:text-sm">{project.title}</p>
                </div>
                {hasMultipleImages && (
                  <div className="text-slate-400 text-xs lg:text-sm">
                    {currentIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Next Button */}
          {hasMultipleImages && (
            <button 
              onClick={onNext} 
              className="absolute right-2 lg:right-8 z-20 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all group"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => onThumbnailClick(idx)}
                    className={`relative flex-shrink-0 w-20 h-14 lg:w-28 lg:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 group ${
                      idx === currentIndex 
                        ? 'border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105' 
                        : 'border-transparent opacity-50 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Active Checkmark */}
                    {idx === currentIndex && (
                      <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                    )}

                    {/* Hover Overlay with Number */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{idx + 1}</span>
                    </div>

                    {/* Title on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-1 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-[9px] lg:text-[10px] truncate text-center">{img.title}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Dots for Mobile */}
              <div className="flex justify-center gap-1.5 mt-3 lg:hidden">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onThumbnailClick(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-cyan-400 w-6' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== KEYBOARD SHORTCUTS ===== */}
        <div className="hidden lg:flex justify-center items-center gap-6 pb-4 text-slate-500 text-xs">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono">←</kbd>
            <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono">→</kbd>
            <span className="ml-1">{t('projectspage.labels.navigate') || 'Navigate'}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-600"></div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 rounded bg-white/10 text-white font-mono">ESC</kbd>
            <span className="ml-1">{t('projectspage.labels.close') || 'Close'}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-600"></div>
          <div className="flex items-center gap-2">
            <span>{t('projectspage.labels.click_zoom') || 'Click image to zoom'}</span>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;