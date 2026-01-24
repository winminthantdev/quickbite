import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import ProductCard from '@/components/ui/ProductCard';
import { fetchProducts } from '@/services/api';
import Pagination from '@/components/ui/Pagination';
import CardLoader from '@/components/ui/CardLoader';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

const ProductCategory = () => {
  const { category, subcategory } = useParams();
  const [page, setPage] = useState(1);
  const PAGESIZE = 10;

  // Reset page to 1 if the category or subcategory changes
  useEffect(() => {
    setPage(1);
  }, [category, subcategory]);

  const { data, isLoading, isPlaceholderData } = useQuery({
    queryKey: ["menus", { cat: category, sub: subcategory, pg: page }],
    queryFn: () => fetchProducts({
      pageSize: PAGESIZE,
      page: page,
      category: category,
      subcategory: subcategory
    }),
    placeholderData: keepPreviousData, // Smooth transitions
    staleTime: 1000 * 60 * 5,
  });

  // CRITICAL FIX: Use the data directly from the server meta, don't slice manually
  const pageItems = data?.data || [];
  const totalPages = data?.meta?.total_page || 0;

  return (
      <div className='container mx-auto px-4 lg:px-8 py-10 pt-28 min-h-screen flex flex-col'>

        {/* Breadcrumbs - Clean & Professional */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6 bg-gray-50 p-3 rounded-lg">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <Link to={`/products/category/${category}`} className="capitalize hover:text-primary transition-colors">
            {category?.replace(/-/g, ' ')}
          </Link>
          {subcategory && (
              <>
                <span>/</span>
                <span className="text-primary font-medium capitalize">
              {subcategory?.replace(/-/g, ' ')}
            </span>
              </>
          )}
        </nav>

        {/* Header section */}
        <div className="mb-8 border-b border-gray-100 pb-4">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">
            {subcategory ? subcategory.replace(/-/g, ' ') : category.replace(/-/g, ' ')}
          </h1>
          {!isLoading && <p className="text-gray-500 mt-1">{data?.meta?.total || 0} items available</p>}
        </div>

        {/* Grid Container */}
        <div className={`grow transition-all duration-300 ${isPlaceholderData ? 'opacity-50 scale-[0.99]' : 'opacity-100'}`}>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
            {isLoading ? (
                [...Array(PAGESIZE)].map((_, i) => <CardLoader key={i} />)
            ) : (
                <>
                  {pageItems.length > 0 ? (
                      pageItems.map((product) => (
                          <ProductCard key={product.id} product={product} />
                      ))
                  ) : (
                      <div className="col-span-full py-24 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-gray-400 text-lg">No products found in this category.</p>
                      </div>
                  )}
                </>
            )}
          </div>
        </div>

        {/* Pagination Wrapper */}
        <div className="mt-16 mb-8 flex justify-center">
          {totalPages > 1 && (
              <Pagination
                  totalPages={totalPages}
                  curPage={page}
                  preBtn={() => {
                    setPage((prev) => Math.max(1, prev - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
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
  );
};

export default ProductCategory;