import React, { useEffect, useRef, useState } from 'react';
import Title from './Title';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router';
import {useQuery} from "@tanstack/react-query";

const BestSeller = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    const promotionData = await fetchProducts({ pageSize: 20, is_bestseller:true });

    return promotionData.data;
  };

  const { data: bestseller = [], isLoading } = useQuery({
    queryKey: ["menus", "bestseller"],
    queryFn: fetchMenusFun
  });

  const handleSeeAllBtn = () => {
    console.log("YOU ARE CLICKING SEE ALL ...");

    navigate('/products/bestsellers')
  }

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${isVisible ? 'bottom_to_tops' : 'opacity-50'}`}
    >
      <Title title="Best Seller"  clickSeeAll={handleSeeAllBtn} />
      {isLoading ? (
        <p className="text-center py-8 text-gray-500">
          <FontAwesomeIcon spin icon={faSpinner} className='me-2' /> Loading products...
        </p>
      ) : (
          bestseller.length > 0 ? (
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView="auto"   
            spaceBetween={12}       
            className="mt-6"
          >
            {bestseller.map((product) => (
              <SwiperSlide key={product._id} className="!w-auto"> 
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

        ) : (
          <p className="col-span-full text-center text-gray-500 py-8">
            No products found.
          </p>
        )
      )}
    </div>
  );
};

export default BestSeller;
