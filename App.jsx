import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Publications from './components/Publications'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-cyan focus:px-4 focus:py-2 focus:text-base"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Timeline />
        <Certifications />
        <Publications />
        <CV />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
