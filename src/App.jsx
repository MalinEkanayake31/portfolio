import React from 'react'
import BlurBackground from './components/BlurBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Skills from './components/Skills'

const App = () => {
  return (
    <>
      <BlurBackground/>
      <Navbar/>
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar/>
        <Hero/> 
        <About/> 
        <Skills/>
        <Projects/>
        <Contacts/>
      </main>
    </>
  )
}

export default App
