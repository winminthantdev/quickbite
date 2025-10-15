import React, { useEffect, useRef, useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { fetchProducts } from '../../services/api'   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Promotion = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [promotions, setPromotions] = useState([])
  const [loading, setLoading] = useState(false)

    // intersection animation

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

    // fetch products

  useEffect(() => {
    const getPromotions = async () => {
      setLoading(true)
      try {
        const allProducts = await fetchProducts()
        const activePromos = allProducts
          .filter(product => product.promotion && product.promotion.isActive)
          .sort((a, b) => b.promotion.discountPercent - a.promotion.discountPercent)

        setPromotions(activePromos)
      } catch (error) {
        console.error("Failed to fetch products:", error)
        setPromotions([])
      } finally {
        setLoading(false)
      }
    }

    getPromotions()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${isVisible ? 'bottom_to_tops' : 'opacity-0'}`}
    >
      <Title title="Promos for this Month" />

      {loading ? (
        <p className="text-center py-8 text-gray-500">
          <FontAwesomeIcon spin icon={faSpinner} className="me-2" /> Loading promotions...
        </p>
      ) : promotions.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          spaceBetween={12}   // little space between cards
          className="mt-6"
        >
          {promotions.map((product) => (
            <SwiperSlide key={product._id} className="!w-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="col-span-full text-center text-gray-500 py-8">
          No promotions found.
        </p>
      )}
    </div>
  )
}

export default Promotion
