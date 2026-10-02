import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import './App.css'
import About from './components/About'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="stats-strip" aria-label="Xntrova results">
          <div className="container stats-grid">
            <div className="stat">
              <strong>250%+</strong>
              <span>Organic traffic growth</span>
            </div>

            <div className="stat">
              <strong>120+</strong>
              <span>Projects delivered</span>
            </div>

            <div className="stat">
              <strong>500+</strong>
              <span>Clients served</span>
            </div>
          </div>
        </section>
        <Services />
        <About />
       <Process />
       <Portfolio />
       <Testimonials />
       <FAQ />
       <CTA />
       <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App