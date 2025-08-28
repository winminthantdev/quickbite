import React, { useEffect, useRef, useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'

const Promotion = () => {
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
    <div ref={sectionRef}
      className={`container mx-auto px-8 md:px-0 py-4 transition-all duration-700 ${isVisible ? 'bottom_to_tops' : 'opacity-0'}`}
    >
      <Title title="Promos for this Month" />
      <ProductCard />
    </div>
  )
}

export default Promotion
