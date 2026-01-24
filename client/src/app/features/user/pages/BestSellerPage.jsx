import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchProducts } from '@/services/api';
import ProductCard from '../../../components/ui/ProductCard';
import Pagination from '../../../components/ui/Pagination'
import { useState, useEffect } from 'react';
import Title from '../../../components/ui/Title';
import CardLoader from '../../../components/ui/CardLoader';

const BestSellerPage = () => {
  const [page, setPage] = useState(1);
  const PAGESIZE = 10;

  const { data, isLoading, isPlaceholderData } = useQuery({
    queryKey: ["products", "bestseller", page],
    queryFn: () => fetchProducts({
      pageSize: PAGESIZE,
      page: page,
      is_bestseller: true
    }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const totalPages = data?.meta?.total_page || 0;
  const pageItems = data?.data || [];

  return (
      <div className='container mx-auto px-4 lg:px-8 py-10 pt-32 min-h-screen flex flex-col'>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-100 pb-6">
          <div>
            <Title title="Best Sellers" haveButton={false} />
            <p className="text-gray-500 text-sm mt-1">Our most popular dishes, ordered by community favorites.</p>
          </div>

          {!isLoading && data && (
              <div className="bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
              {data?.meta?.total || 0} Products Found
            </span>
              </div>
          )}
        </div>

        {/* Grid Container */}
        <div className={`grow transition-all duration-500 ${isPlaceholderData ? 'opacity-40 scale-[0.99] grayscale-[20%]' : 'opacity-100'}`}>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 md:gap-8'>
            {isLoading ? (
                [...Array(PAGESIZE)].map((_, i) => <CardLoader key={i} />)
            ) : (
                <>
                  {pageItems.length > 0 ? (
                      pageItems.map(product => (
                          <ProductCard key={product.id} product={product} />
                      ))
                  ) : (
                      // Improved Empty State Design
                      <div className="col-span-full flex flex-col items-center justify-center py-32 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                          <span className="text-2xl">🍽️</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">No Bestsellers Yet</h3>
                        <p className="text-gray-500 max-w-xs mx-auto mt-2">Check back soon as we update our top-performing dishes daily.</p>
                      </div>
                  )}
                </>
            )}
          </div>
        </div>

        {/* Pagination: Enhanced spacing */}
        <div className="mt-20 mb-10 flex justify-center">
          {totalPages > 1 && (
                <Pagination
                    totalPages={totalPages}
                    curPage={page}
                    preBtn={() => setPage((prev) => Math.max(1, prev - 1))}
                    nextBtn={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                    onPageChange={(selectedPage) => setPage(selectedPage)}
                />
          )}
        </div>
      </div>
  );
};

export default BestSellerPage;