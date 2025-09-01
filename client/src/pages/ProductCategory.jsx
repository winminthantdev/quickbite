import React from 'react'
import Title from '../components/Title'
import { Link, useParams } from 'react-router'
import { dummyProducts } from '../assets/assets';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {

  const { category, subcategory, promotion } = useParams();

  const products = subcategory
    ? dummyProducts.filter(
      (item) =>
        item.subCategory.toLowerCase() === subcategory.toLowerCase() &&
        item.category.toLowerCase() === category.toLowerCase()
    )
    : promotion
      ? dummyProducts.filter((item) => item.promotion.isActive)
      : category
        ? dummyProducts.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        )
        : dummyProducts.filter((item) => item.bestSeller);

  const title = subcategory
    ? `${category.toUpperCase()} / ${subcategory.toUpperCase()}`
    : category
      ? category.toUpperCase()
      : promotion
        ? "PROMOTIONS"
        : "BEST SELLERS";

  return (
    <div className='container overflow-hidden mx-auto px-8 md:px-0 py-4 pt-20'>
      <Title title={title} haveButton={false} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center overflow-x-auto scrollbar-hide mt-6'>
        {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-8">
              No products found.
            </p>
          )}

      </div>
    </div>
  )
}

export default ProductCategory
