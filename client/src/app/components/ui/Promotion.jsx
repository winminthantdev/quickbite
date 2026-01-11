import React, { useEffect, useRef, useState } from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { fetchProducts } from '@/services/api'   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import CardLoader from './CardLoader'

const Promotion = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate();

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect();
  }, [])

  //  Data Fetching Logic
  const fetchMenusFun = async () => {
    const promotionData = await fetchProducts({ pageSize: 20, is_promotion:true }); 

    return promotionData.data;
  };

  const { data: promotions = [], isLoading } = useQuery({
    queryKey: ["menus", "promotions"], 
    queryFn: fetchMenusFun
  });

  // Route to promotion pages
  const handleSeeAllBtn = () => {
    navigate('/products/promotions')
  }

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <Title title="Promos for this Month" clickSeeAll={handleSeeAllBtn} />

      {isLoading ? (
        <div className="flex justify-center items-center gap-8 py-12">
          { [...Array(5)].map((_, i) => <CardLoader key={i} />)}
        </div>
      ) : promotions.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView="auto"
          spaceBetween={12}
          className="mt-6"
        >
          {promotions.map((product) => (
            <SwiperSlide key={product._id} className="!w-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-400 py-12">
          No promotions available at the moment.
        </p>
      )}
    </div>
  )
}

export default Promotion