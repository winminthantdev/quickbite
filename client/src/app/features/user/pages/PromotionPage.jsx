import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchProducts } from '@/services/api';
import ProductCard from '../../../components/ui/ProductCard';
import Pagination from '../../../components/ui/Pagination';
import { useState, useEffect } from 'react';
import Title from '../../../components/ui/Title';
import CardLoader from '../../../components/ui/CardLoader';

const PromotionsPage = () => {
  const [page, setPage] = useState(1);
  const PAGESIZE = 10;

  const { data, isLoading, isPlaceholderData, isFetching } = useQuery({
    queryKey: ["products", "promotions", page],
    queryFn: () => fetchProducts({
      pageSize: PAGESIZE,
      page: page,
      is_promotion: true
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
      <div className='container mx-auto px-4 md:px-8 py-10 pt-32 min-h-screen flex flex-col'>

        {/* Header Section with Count Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-100 pb-6">
          <div>
            <Title title="Limited Time Offers" haveButton={false} />
            <p className="text-gray-500 text-sm mt-1">Grab your favorites at a discounted price before they're gone!</p>
          </div>

          {!isLoading && data && (
              <div className="inline-flex items-center bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full border border-orange-100 text-xs font-bold uppercase tracking-wider">
                {data?.meta?.total || 0} Deals Available
              </div>
          )}
        </div>

        {/* Main Grid Area */}
        <div className={`grow transition-all duration-300 ${isPlaceholderData ? 'opacity-40 scale-[0.98]' : 'opacity-100'}`}>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 md:gap-8'>
            {isLoading || isFetching     ? (
                [...Array(PAGESIZE)].map((_, i) => <CardLoader key={i} />)
            ) : (
                <>
                  {pageItems.length > 0 ? (
                      pageItems.map(product => (
                          <ProductCard key={product.id} product={product} />
                      ))
                  ) : (
                      <div className="col-span-full flex flex-col items-center justify-center py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                        <span className="text-4xl mb-4">🏷️</span>
                        <h3 className="text-xl font-medium text-gray-800">No Promotions Today</h3>
                        <p className="text-gray-500 mt-2">Check back later for new exclusive deals.</p>
                      </div>
                  )}
                </>
            )}
          </div>
        </div>

        {/* Pagination Wrapper */}
        <div className="mt-20 mb-12 flex justify-center">
          {totalPages > 1 && (
                <Pagination
                    totalPages={totalPages}
                    curPage={page}
                    preBtn={() => setPage((p) => Math.max(1, p - 1))}
                    nextBtn={() => setPage((p) => Math.min(totalPages, p + 1))}
                    onPageChange={(p) => setPage(p)}
                />
          )}
        </div>
      </div>
  );
};

export default PromotionsPage;