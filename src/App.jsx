import { useEffect } from 'react'
import AOS from 'aos'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default App