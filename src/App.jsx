import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Art from './components/Art'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#090D1A]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Art />
      <Contact />
      <Footer />
    </div>
  )
}
