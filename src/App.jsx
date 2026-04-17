import React from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Events from './component/Events'
import Story from './component/Story'
import Gallery from './component/Gallary'
import Contact from './component/Contact'
import RSVP from './component/RVSP'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Story />
      <Events />
      <Gallery />
      <RSVP />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

