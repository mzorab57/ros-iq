import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-cyan-300 font-semibold">R.O.S Co — Water Solutions</div>
          
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/about" className="text-cyan-200/80 hover:text-white">About</NavLink>
            <NavLink to="/services" className="text-cyan-200/80 hover:text-white">Services</NavLink>
            <NavLink to="/experience" className="text-cyan-200/80 hover:text-white">Experience</NavLink>
            <NavLink to="/contact" className="text-cyan-200/80 hover:text-white">Contact</NavLink>
          </nav>
        </div>
      <div className=" pt-2  text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} R.O.S Co. all rights reserved.</p>
          <p className="mt-1">
            Powered by{" "}
            <a 
              href="https://wa.me/96407701411893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline"
            >
              Al-Code
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
