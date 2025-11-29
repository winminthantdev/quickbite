import React from 'react'
import MainBanner from '@/components/ui/MainBanner'
import Category from '@/components/ui/Category'
import BestSeller from '@/components/ui/BestSeller'
import Promotion from '@/components/ui/Promotion'
import CtaSection from '@/components/ui/CtaSection'

const Home = () => {
  return (
    <div className='container overflow-hidden mx-auto px-8 md:px-0 py-4 '>
      <MainBanner />
      <Category />
      <Promotion  />
      <BestSeller />
      <CtaSection />
    </div>
  )
}

export default Home
