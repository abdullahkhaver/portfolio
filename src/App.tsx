import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Awards from "./components/Awards"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <>
<div className="bg-[#101622] text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About/>
        <Skills />
        <Portfolio />
        <Awards />
        <Testimonials />
        <Contact />

      </main>
            <Footer />

    </div>
    </>
  )
}

export default App
