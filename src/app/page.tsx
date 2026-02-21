import About from '@/components/About'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Paths from '@/components/Paths'
import Problem from '@/components/Problem'
import TwoOptions from '@/components/TwoOptions'
import WhoWeWorkWith from '@/components/WhoWeWorkWith'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Problem/>
    <TwoOptions/>
    <Paths/>
    <WhoWeWorkWith/>
    <About/>
    <FAQ/>
    <FinalCTA/>
    <Footer/>
    </>
  )
}

export default page