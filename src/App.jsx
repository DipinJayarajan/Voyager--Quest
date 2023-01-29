import React from 'react'
import Activities from './components/Activities'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'

function App() {
  

  return (
    <div>
      <Navbar />
      <Topbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
    </div>
  )
}

export default App
