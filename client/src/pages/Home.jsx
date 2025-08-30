import React from 'react'
import MainBanner from '../components/MainBanner'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import Promotion from '../components/Promotion'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='container overflow-hidden  mx-auto px-8 md:px-0 py-4 '>
      <MainBanner />
      <Category />
      <Promotion  />
      <BestSeller />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default Home
