import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/about', label: 'About', icon: '📖' },
    { to: '/services', label: 'Services', icon: '⚙️' },
    { to: '/projects', label: 'Projects', icon: '🏗️' },
    { to: '/contact', label: 'Contact', icon: '📞' },
  ]

  return (
    <>
      <header 
      
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-1 bg-[#ua0f1a]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' 
            : 'py-2 mb-8 bg-transparent'
        }`}
      >
        <div 
        // style={{ transform: 'scale(0.90)' }}
        className="mx-auto max-w-6xl  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* ===== LOGO ===== */}
            <Link 
              to="/" 
              className="group flex items-center gap-3 relative"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* <div className="absolute -inset-4  rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                   <img src="/logo.jpeg" alt="logo" className=" h-12 w-24 rounded-2xl" />
              </div> */}

              {/* Logo Text */}
             {/* <div className={`transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-lg tracking-tight group-hover:text-cyan-100 transition-colors">R.O.S</span>
                  <span className="text-cyan-400 font-bold text-lg">Co.</span>
                </div>
                <div className="text-cyan-300/60 text-[10px] font-medium tracking-widest uppercase group-hover:text-cyan-300/80 transition-colors">
                  Water Solutions
                </div>
              </div>  */}


          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
          
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">R</span>
                <span className="text-red-500 text-xl sm:text-2xl font-black">.</span>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">O</span>
                <span className="text-red-500 text-xl sm:text-2xl font-black">.</span>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">S</span>
                <span className="text-red-500 text-xl sm:text-2xl font-black">.</span>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight ml-1">Co</span>
                <span className="text-red-500 text-xl sm:text-2xl font-black">.</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wide -mt-1">Water Solutions</span>
            </div>
          </Link>
            </Link>

            {/* ===== DESKTOP NAVIGATION ===== */}
            <nav className="hidden lg:flex items-center">
              {/* Nav Links Container */}
              <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={({ isActive }) =>
                      `group relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/10' 
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`
                    }
                    end={link.to === '/'}
                  >
                    {({ isActive }) => (
                      <>
                        {/* Active Indicator */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-xl border border-cyan-400/30"></div>
                        )}
                        
                        {/* Hover Glow */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <span className="relative z-10 flex items-center gap-2">
                          {link.label}
                        </span>
                        
                        {/* Active Dot */}
                        {isActive && (
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>


            </nav>

            {/* ===== MOBILE MENU BUTTON ===== */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              {/* Hamburger/Close Animation */}
              <div className="relative w-6 h-6 flex flex-col items-center justify-center">
                <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                  open ? 'rotate-45' : '-translate-y-1.5'
                }`}></span>
                <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                  open ? 'opacity-0 scale-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                  open ? '-rotate-45' : 'translate-y-1.5'
                }`}></span>
              </div>
              
              {/* Button Glow */}
              <div className="absolute inset-0 rounded-xl bg-cyan-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0  transition-all duration-500 ease-out ${
            open 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="mx-4 mt-2 p-4 rounded-2xl bg-[#0a0f1a]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
            {/* Mobile Nav Links */}
            <nav className="space-y-1 mb-4">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => {
                    setOpen(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-white border border-cyan-400/30' 
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                  style={{ animationDelay: `${index * 50}ms` }}
                  end={link.to === '/'}
                >
                  {({ isActive }) => (
                    <>
                      
                      
                      {/* Label */}
                      <span className="font-medium">{link.label}</span>
                      
                      {/* Arrow */}
                      <svg 
                        className={`w-5 h-5 -rotate-45 ml-auto transition-all duration-300 ${
                          isActive ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1'
                        }`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>

           

            {/* Contact Info */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                <a href="tel:+9647701234567" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Us</span>
                </a>
                <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                <a href="mailto:info@rosco.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* ===== SCROLL PROGRESS BAR ===== */}
      <ScrollProgress />
    </>
  )
}

// ===== SCROLL PROGRESS COMPONENT =====
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

 

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5  bg-transparent z-[60]">
      <div 
        className="h-full  bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 transition-all duration-150 shadow-lg shadow-cyan-500/50"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}