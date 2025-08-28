import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'

const CtaSection = () => {

    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.2 } 
      )
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current)
        }
      }
    }, [])

  return (
    <div ref={sectionRef} className="container mx-auto px-8 md:px-0 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
        <div className={`flex flex-col space-y-4 transition-all duration-700 ${isVisible ? 'left_to_rights' : 'opacity-0'}`}>
          <h1 className='text-2xl md:text-5xl font-bold'>Simple Way to Order <br />Your Food Faster</h1>
          <p className='text-justify text-slate-500 md:pe-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati veritatis esse. Doloribus est fuga itaque quibusdam, nisi placeat ea!</p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-38 md:w-auto">
              <img src={assets.play_store} alt="" className="" />
            </div>
            <div className="w-38 md:w-auto">
              <img src={assets.app_store} alt="" className="" />
            </div>
          </div>
        </div>
        <div className={`w-auto overflow-hidden transition-all duration-700 ${isVisible ? 'right_to_lefts' : 'opacity-0'}`}>
          <img src={assets.app_mockup} className='' alt="" />
        </div>
      </div>
    </div>
  )
}

export default CtaSection
