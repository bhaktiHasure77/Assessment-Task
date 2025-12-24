import React from 'react'
import Navbar from './Components/Navbar.jsx'
import './App.css'
import WhyChoose from './Components/WhyChoose.jsx'  
import Hero from './Components/Hero.jsx'
import WhyLearn from './Components/WhyLearn.jsx'
import Featured from './Components/Featured.jsx'
import Platform from './Components/Platform.jsx'
import Testimonial from './Components/Testimonial.jsx'
import Blogs from './Components/Blogs.jsx'
import Newsletter from './Components/Newsletter.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  

  return (
    <>
    <Navbar />
     <Hero />
      <WhyChoose />
      <WhyLearn />
      <Featured />
      <Platform />
      <Testimonial />
      <Blogs />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
