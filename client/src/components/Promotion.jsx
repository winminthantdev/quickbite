import React, { useEffect, useRef, useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { dummyProducts } from '../assets/assets'

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

    const promotions = dummyProducts.filter(product => product.promotion && product.promotion.isActive).sort((a, b) => b.promotion.discountPercent - a.promotion.discountPercent);


  return (
    <div ref={sectionRef}
      className={`transition-all duration-700 ${isVisible ? 'bottom_to_tops' : 'opacity-0'}`}
    >
      <Title title="Promos for this Month" haveButton={true} />
      <ProductCard products={promotions} />
    </div>
  )
}

export default Promotion
