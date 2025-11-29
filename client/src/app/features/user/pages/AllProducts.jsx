import React, { useEffect, useState } from 'react'
import Title from '@/components/ui/Title'
import ProductCard from '@/components/ui/ProductCard'
import { useAppContext } from '@/context/AppContext'
import { fetchProducts } from '@/services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Pagination from '../../../components/ui/Pagination'

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  

  const PAGESIZE = 10;

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const prods = await fetchProducts();
      setProducts(prods);
      setLoading(false);
    };
    loadProducts();
  }, []);

    const totalPages = Math.max(1, Math.ceil(products.length/PAGESIZE));
    const pageItems = products.slice((page-1) * PAGESIZE,page * PAGESIZE)  

  return (
    <div className='container mx-auto px-8 md:px-0 py-4 pt-20'>
      <Title title="All Products" haveButton={false} />
      {
        loading ? (<p className="text-center mt-20"><FontAwesomeIcon spin icon={faSpinner} className='me-2' />Loading products...</p>) : 
        (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center mt-6'>
            {pageItems.length > 0 ? (
              pageItems.map(product => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 py-8">
                No products found.
              </p>
            )}
          </div>
        )
      }
      {totalPages >  1 && (
        <Pagination 
          totalPages = {totalPages}
          curPage = {page}
          preBtn = {()=>setPage((curpage)=>Math.max(1,curpage - 1))}
          nextBtn = {()=>setPage((curpage)=>Math.min(totalPages,curpage + 1))}
          onPageChange = {(selectedPage)=>setPage(selectedPage)}
        />
      )}
    </div>
  );
}

export default AllProducts;
