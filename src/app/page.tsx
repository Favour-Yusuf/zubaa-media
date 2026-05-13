import HowItWorks from '@/components/HowItWorks'
import Navbar from '@/components/Navbar2'
import Pricing from '@/components/Pricing'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Benefits from '@/components/Benefits'
import Hero from '@/components/Hero2'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import About from '@/components/AboutUs'
import Footer from '@/components/Footer2'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <Benefits/>
      <HowItWorks/>
      <Stats/>
      <Services/>
      <Pricing/>
      <About/>
      <FAQ/>
      <FinalCTA/>
    <Footer/>
    </>
  )
}

export default page