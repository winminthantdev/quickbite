import React, { useEffect, useRef, useState } from 'react';
import Title from './Title';
import ProductCard from './ProductCard';
import { fetchProducts } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const BestSeller = () => {
  const sectionRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <div className='flex gap-3 overflow-x-auto scrollbar-hide mt-6'>
        {loading ? (
          <p className="text-center py-8 text-gray-500">
            <FontAwesomeIcon spin icon={faSpinner} className='me-2' /> Loading products...
          </p>
        ) : (
          products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-8">
              No products found.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default BestSeller;
