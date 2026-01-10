import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/services/api';
import ProductCard from '../../../components/ui/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Pagination from '../../../components/ui/Pagination'
import { useState } from 'react';
import Title from '../../../components/ui/Title';
import CardLoader from '../../../components/ui/CardLoader';

const PromotionsPage = () => {
    const [page, setPage] = useState(1);
  
  const PAGESIZE = 10;

  const { data, isLoading } = useQuery({
    queryKey: ["products", "promotions"],
    queryFn: async () => {
      const res = await fetchProducts({ 
        pageSize: PAGESIZE, 
        is_promotion: true
      });
      
      return res;
    },
    staleTime: 1000 * 60 * 5, 
  });

  console.log(data);
  

    const totalPages = data?.meta?.total_page;
    
    const pageItems = data?.data; 

    return (
    <div className='container mx-auto px-8 md:px-0 py-4 pt-20'>
      <Title title="All Products" haveButton={false} />
      {
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6'>
        {isLoading ? (
          [...Array(10)].map((_, i) => <CardLoader key={i} />)
        ) : (
          <>
            {pageItems.length > 0 ? (
              pageItems.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400 py-12">No promotions found.</p>
            )}
          </>
        )}
      </div>
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
};

export default PromotionsPage;


