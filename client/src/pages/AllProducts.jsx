import React from 'react'
import Title from '../components/Title'
import ProductCard from '../components/ProductCard'
import { dummyProducts } from '../assets/assets'

const AllProducts = () => {

  return (
    <div className='container overflow-hidden mx-auto px-8 md:px-0 py-4 pt-20'>
      <Title title="All Products" haveButton={false}/>
      <ProductCard products={dummyProducts} wrap={false} />
    </div>
  )
}

export default AllProducts
