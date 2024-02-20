import React, { useEffect, useRef, useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Hero from './comps/Home page/Hero'
import AboutMe from './comps/AboutMe'
import Porject from './comps/Projects/Porject'
import Contect from './comps/Contect'
import Footer from './Footer'
import NavBar from './comps/Home page/NavBar'
import { ScrollProvider } from './Context'


function App() {

  const [Comps, setComps] = useState('')

  const Hero1 = useRef(null)
  const About1 = useRef(null)
  const Porject1 = useRef(null)
  const Contect1 = useRef(null)
  const Footer1 = useRef(null)

  const handleClick = (asdf) => {

    if (asdf == 'Hero1') Hero1.current?.scrollIntoView({ behavior: "smooth" })
    if (asdf == 'About1') About1.current?.scrollIntoView({ behavior: "smooth" })
    if (asdf == 'Porject1') Porject1.current?.scrollIntoView({ behavior: "smooth" })
    if (asdf == 'Contect1') Contect1.current?.scrollIntoView({ behavior: "smooth" })

  };


  return (
    <ScrollProvider value={{ Comps, setComps, handleClick }}>
      <NavBar />
      <Hero ref={Hero1} />
      <AboutMe ref={About1} />
      <Porject ref={Porject1} />
      <Contect ref={Contect1} />
      <Footer ref={Footer1} />
    </ScrollProvider>
  )
}

export default App