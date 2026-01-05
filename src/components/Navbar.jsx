import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <>
      <header dir='ltr' className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-1 bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-2 bg-transparent'
      }`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* LOGO */}
            <Link to="/" className="flex flex-col group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center gap-0.5">
                <span className="text-2xl font-black text-white">R</span>
                <span className="text-red-500 text-xl font-black">.</span>
                <span className="text-2xl font-black text-white">O</span>
                <span className="text-red-500 text-xl font-black">.</span>
                <span className="text-2xl font-black text-white">S</span>
                <span className="text-red-500 text-xl font-black">.</span>
                <span className="text-2xl font-black text-white ml-1 rtl:mr-1 rtl:ml-0">Co</span>
                <span className="text-red-500 text-xl font-black">.</span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-cyan-400 tracking-[0.2em] uppercase -mt-1">
                Water Solutions
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <NavLink onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} key={link.to} to={link.to} className={({ isActive }) =>
                    `px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-white bg-cyan-500/20 shadow-lg shadow-cyan-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`
                  }>
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <LanguageSwitcher />
            </nav>

            {/* MOBILE MENU BUTTON */}
            <div className="flex items-center gap-4 lg:hidden">
              <LanguageSwitcher />
              <button onClick={() => setOpen(!open)} className="text-white p-2">
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`h-0.5 w-full bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`h-0.5 w-full bg-current ${open ? 'opacity-0' : ''}`}></span>
                  <span className={`h-0.5 w-full bg-current transition-all ${open ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="mx-4 mt-2 p-4 rounded-2xl bg-[#0a0f1a]/98 backdrop-blur-2xl border border-white/10 shadow-2xl">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <NavLink onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} key={link.to} to={link.to} className="flex items-center justify-between px-4 py-4 rounded-xl text-slate-300 hover:bg-white/5 transition-all">
                  <span className="font-medium">{link.label}</span>
                  <svg className="w-5 h-5 opacity-30 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {open && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setOpen(false)}></div>}
      
    
    </>
  )
}

