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

const BestSeller = () => {
  const sectionRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

    // intersection animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

    // fetch products

  useEffect(() => {
    // Fetch products
    const getProducts = async () => {
      setLoading(true);
      try {
        const allProducts = await fetchProducts();
        const bestSellers = allProducts
          .filter(product => product.bestSeller)
          .sort(() => Math.random() - 0.5);
        setProducts(bestSellers);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${isVisible ? 'bottom_to_tops' : 'opacity-50'}`}
    >
      <Title title="Best Seller" />
      {loading ? (
        <p className="text-center py-8 text-gray-500">
          <FontAwesomeIcon spin icon={faSpinner} className='me-2' /> Loading products...
        </p>
      ) : (
        products.length > 0 ? (
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView="auto"   
            spaceBetween={12}       
            className="mt-6"
          >
            {products.map((product) => (
              <SwiperSlide key={product._id} className="!w-auto"> 
                {/* !w-auto = keep natural card width */}
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
