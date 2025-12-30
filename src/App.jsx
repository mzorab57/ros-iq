import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Projects from './components/Projects'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <div className="relative z-10 min-h-screen text-cyan-100">
        <Navbar  />
        <main className='mt-24'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/experience" element={<Experience />} /> */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
