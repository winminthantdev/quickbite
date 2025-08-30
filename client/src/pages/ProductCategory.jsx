import React from 'react'
import Title from '../components/Title'
import { Link, useParams } from 'react-router'
import { dummyProducts } from '../assets/assets';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {

  const category = useParams();
  console.log(category.subcategory);

  
     const products  = category.subcategory ? dummyProducts.filter(item=> item.subCategory.toLowerCase() === category.subcategory.toLowerCase()) : dummyProducts.filter(item=> item.category.toLowerCase() === category.category.toLowerCase());

     const title = category.subcategory ? `${category.category.toLocaleUpperCase()+' / '+category.subcategory.toLocaleUpperCase()}` : category.category.toLocaleUpperCase()

  return (
    <div className='container overflow-hidden mx-auto px-8 md:px-0 py-4 pt-20'>
      <Title title={title} haveButton={false}/>
      <ProductCard products={products} />
    </div>
  )
}

export default ProductCategory
