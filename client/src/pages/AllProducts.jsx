import React from 'react'
import Title from '../components/Title'
import ProductCard from '../components/ProductCard'
import { dummyProducts } from '../assets/assets'

const AllProducts = () => {

  return (
    <div className='container overflow-hidden mx-auto px-8 md:px-0 py-4 pt-20'>
      <Title title="All Products" haveButton={false}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center overflow-x-auto scrollbar-hide mt-6'>
        {dummyProducts.length > 0 ? (
                        dummyProducts.map((product)=>(
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

export default AllProducts
