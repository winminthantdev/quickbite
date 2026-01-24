import React, { useState } from 'react'
import Title from '@/components/ui/Title'
import ProductCard from '@/components/ui/ProductCard'
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Pagination from '@/components/ui/Pagination'
import CardLoader from '@/components/ui/CardLoader' // Use skeletons instead of spinners

const AllProducts = () => {
  const [page, setPage] = useState(1);
  const PAGESIZE = 10;

  const { data: menus, isLoading, isFetching } = useQuery({
    queryKey: ["menus", page],
    queryFn: () => fetchProducts({ pageSize: PAGESIZE, page: page }),
    keepPreviousData: true,
  });

  const totalPages = menus?.meta?.total_page || 0;
  const pageItems = menus?.data || [];

  return (
      <div className='container mx-auto px-4 md:px-0 py-8 pt-24 min-h-screen flex flex-col'>
        <div className="flex justify-between items-center mb-6">
          <Title title="Our Collection" haveButton={false} />
          {/* Subtle indicator for background fetching */}
          {isFetching && !isLoading && (
              <div className="text-orange-500 text-sm animate-pulse">
                <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                Updating...
              </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className={`grow transition-opacity duration-300 ${isFetching ? 'opacity-50' : 'opacity-100'}`}>
          {isLoading ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {[...Array(PAGESIZE)].map((_, i) => <CardLoader key={i} />)}
              </div>
          ) : (
              <>
                {pageItems.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                      {pageItems.map(product => (
                          <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
                      <p className="text-gray-500 text-lg">No products found in this category.</p>
                    </div>
                )}
              </>
          )}
        </div>

        {/* Pagination Wrapper - Adds margin and centering */}
        <div className="mt-12 py-6 border-t border-gray-100 flex justify-center">
          {totalPages > 1 && (
              <Pagination
                  totalPages={totalPages}
                  curPage={page}
                  preBtn={() => {
                    setPage((prev) => Math.max(1, prev - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Better UX
                  }}
                  nextBtn={() => {
                    setPage((prev) => Math.min(totalPages, prev + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onPageChange={(selectedPage) => {
                    setPage(selectedPage);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
              />
          )}
        </div>
      </div>
  )
}

export default AllProducts