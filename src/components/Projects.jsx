import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Contact from '../pages/Contact';

const Projects = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Categories translation mapping
  const categories = ['All', 'Industrial', 'Medical', 'Infrastructure', 'Recycling'];

  const projects = useMemo(() => [
    {
      id: "zhyan",
      category: "Industrial",
      size: "wide", 
      capacity: "12 m³/h",
      year: "2023",
      location_key: "sulaymaniyah",
      image: [
        { src: '../assets/images/zyan.jpeg', title_key: 'img_main_unit' },
        { src: '../assets/images/zyan1.jpeg', title_key: 'img_control_panel' }
      ],
    },
    {
      id: "dana_gas",
      category: "Industrial",
      size: "standard",
      capacity: "20 m³/h",
      year: "2022",
      location_key: "kurdistan",
      image: [
        { src: '../assets/images/danaGas.jpeg', title_key: 'img_filtration' }
      ],
    },
    {
      id: "erbil_airport",
      category: "Infrastructure",
      size: "standard",
      capacity: "15 m³/h",
      year: "2023",
      location_key: "erbil",
      image: [
        { src: '../assets/images/erbilAir.jpeg', title_key: 'img_airport_system' },
        { src: '../assets/images/erbilAir1.jpeg', title_key: 'img_installation' }
      ],
    },
    {
      id: "edi_16m",
      category: "Industrial",
      size: "tall", 
      capacity: "16 m³/h",
      year: "2023",
      location_key: "iraq",
      image: [
        { src: '../assets/images/roedi16m.jpeg', title_key: 'img_edi_unit' }
      ],
    },
    {
      id: "asia_hospital",
      category: "Medical",
      size: "standard",
      capacity: "15 m³/day",
      year: "2022",
      location_key: "sulaymaniyah",
      image: [
        { src: '../assets/images/mbbr.jpeg', title_key: 'img_reactor' },
        { src: '../assets/images/mbbr1.jpeg', title_key: 'img_process' }
      ],
    },
    {
      id: "dual_ro",
      category: "Infrastructure",
      size: "standard",
      capacity: "2 m³/h",
      year: "2023",
      location_key: "kurdistan",
      image: [
        { src: '../assets/images/rom2.jpeg', title_key: 'img_compact_ro' }
      ],
    },
    {
      id: "car_wash",
      category: "Recycling",
      size: "wide",
      capacity: "Custom",
      year: "2023",
      location_key: "kurdistan",
      image: [
        { src: '../assets/images/carwash.jpeg', title_key: 'img_recycling_sys' }
      ],
    },
    {
      id: "cont_softener",
      category: "Industrial",
      size: "standard",
      capacity: "20 m³/h",
      year: "2022",
      location_key: "kurdistan",
      image: [
        { src: '../assets/images/containerized20m3.jpeg', title_key: 'img_container_unit' }
      ],
    },
    {
      id: "jet_ro",
      category: "Industrial",
      size: "standard",
      capacity: "200 L/h",
      year: "2023",
      location_key: "iraq",
      image: [
        { src: '../assets/images/Containerized-ro-200l.jpeg', title_key: 'img_ext' },
        { src: '../assets/images/Containerized-ro-200l1.jpeg', title_key: 'img_int' }
      ],
    },
    {
      id: "abg_refinery",
      category: "Industrial",
      size: "wide",
      capacity: "12 m³/h",
      year: "2023",
      location_key: "kurdistan",
      image: [
        { src: '../assets/images/roedi12m.jpeg', title_key: 'img_refinery_sys' }
      ],
    },
  ], []);

  const hiddenIdsOnHome = ['car_wash', 'jet_ro', 'abg_refinery'];
  const projectsForRoute = isHomeRoute ? projects.filter((p) => !hiddenIdsOnHome.includes(p.id)) : projects;

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
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, nextImage, prevImage]);

  return (
    <>
      <section className="relative w-full py-10 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">{t('projects.badge')}</span>
              </div>

              <h2 className="mt-2 text-4xl sm:text-5xl font-semibold text-white">
                {t('projects.title_main')} <span className="text-cyan-400">{t('projects.title_highlight')}</span>
              </h2>
              <p className="mt-4 text-cyan-100/80 max-w-3xl">
                {t('projects.intro')}
              </p>
            </div>

            {/* Premium Filter Tabs */}
            <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md inline-flex flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                    activeFilter === cat ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {activeFilter === cat && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl -z-10"></div>
                  )}
                  {t(`projects.categories.${cat.toLowerCase()}`)}
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
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img 
                    src={project.image?.[0]?.src} 
                    alt={t(`projects.list.${project.id}.title`)} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1028] via-[#020617]/30 to-transparent opacity-90 z-10"></div>
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-cyan-300 uppercase tracking-widest">
                      {t(`projects.categories.${project.category.toLowerCase()}`)}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-white mb-3 leading-snug">
                      {t(`projects.list.${project.id}.title`)}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-cyan-500/50 pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {t(`projects.list.${project.id}.desc`)}
                    </p>
                    <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs text-cyan-300 font-medium">{t('projects.view_gallery')}</span>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
          <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col p-4 lg:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex-shrink-0 flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-lg lg:text-2xl truncate">
                    {t(`projects.list.${selectedProject.id}.title`)}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-slate-400">
                    <span className="text-cyan-300 uppercase">{t(`projects.categories.${selectedProject.category.toLowerCase()}`)}</span>
                    <span>•</span>
                    <span>{selectedProject.capacity}</span>
                    <span>•</span>
                    <span>{t(`projects.locations.${selectedProject.location_key}`)}</span>
                  </div>
                </div>
              </div>
              <button onClick={closeModal} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500/20 transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-1 relative flex items-center justify-center overflow-hidden rounded-3xl bg-black/50 border border-white/10">
              {selectedProject.image.length > 1 && (
                <button onClick={prevImage} className="absolute left-4 z-20 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500/20 transition-all">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7" /></svg>
                </button>
              )}

              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={selectedProject.image[currentImageIndex]?.src}
                  alt="Project"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
                    <h4 className="text-white font-semibold">{t(`projects.list.${selectedProject.id}.images.${selectedProject.image[currentImageIndex].title_key}`)}</h4>
                  </div>
                </div>
              </div>

              {selectedProject.image.length > 1 && (
                <button onClick={nextImage} className="absolute right-4 z-20 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500/20 transition-all">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;