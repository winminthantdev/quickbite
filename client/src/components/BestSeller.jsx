import React, { useEffect, useRef, useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { dummyProducts } from '../assets/assets'

const BestSeller = () => {
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

  const bestSellers = dummyProducts.filter(product => product.bestSeller).sort(() => Math.random() - 0.5);


  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${isVisible ? 'bottom_to_tops' : 'opacity-50'
        }`}
    >
      <Title title="Best Seller" />
      <div className='flex gap-3 overflow-x-auto scrollbar-hide mt-6'>
        {bestSellers.length > 0 ? (
             bestSellers.map((product)=>(
              <ProductCard key={product._id} product={product} />
            ))
        ): (
            <p className="col-span-full text-center text-gray-500 py-8">
              No products found.
            </p>
        )}
      </div>
    </div>
  )
}

export default BestSeller
