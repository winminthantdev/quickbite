import React, { useEffect } from 'react'
import Title from '../components/Title'
import ProductCard from '../components/ProductCard'
import { dummyProducts } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const AllProducts = () => {

  const { searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    if(searchQuery.length > 0){
      setFilteredProducts(dummyProducts.filter(
        product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    }else{
      setFilteredProducts(dummyProducts)
    }
  },[searchQuery])


  return (
    <div className='container overflow-hidden mx-auto px-8 md:px-0 py-4 pt-20'>
      <Title title="All Products" haveButton={false}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center overflow-x-auto scrollbar-hide mt-6'>
        {filteredProducts.length > 0 ? (
                        filteredProducts.map((product)=>(
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
