import About from './About'
import Services from './Services'
import Experience from './Experience'
import Contact from './Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className="relative " >
     <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
