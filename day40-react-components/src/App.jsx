import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Pinterest from './components/Pinterest'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
      <Footer />
    </div>
  )
}

export default App

// <Home />