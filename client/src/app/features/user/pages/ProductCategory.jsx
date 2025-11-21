import React, { useEffect, useState } from 'react';
import Title from '@/components/ui/Title';
import { Link, useLocation, useParams } from 'react-router';
import ProductCard from '@/components/ui/ProductCard';
import { fetchProducts } from '@/services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../../../components/ui/Pagination';

const ProductCategory = () => {
  const { category, subcategory } = useParams();
  const location = useLocation();
  const stateProducts = location.state?.products ?? null;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const PAGESIZE = 10;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      if (stateProducts) {
        setProducts(stateProducts);
        setLoading(false);
        return;
      }
      try {
         const allProducts = await fetchProducts();
        const filtered = subcategory
          ? allProducts.filter(
            (item) =>
              item.subCategory?.toLowerCase() === subcategory.toLowerCase() &&
              item.category?.toLowerCase() === category.toLowerCase()
          )
          : allProducts.filter(
            (item) => item.category?.toLowerCase() === category.toLowerCase()
          );

        setProducts(filtered);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [category, subcategory]);

  const totalPages = Math.max(1, Math.ceil(products.length/PAGESIZE));
  const totalItems = products.slice((page-1) * PAGESIZE,page * PAGESIZE)  

  return (
    <div className='container overflow-hidden mx-auto px-8 md:px-0 py-4 pt-20'>
      <p>
        <Link to={"/"}>Home</Link> /
        <Link to={"/products"}> Products</Link> /
        <Link to={`/products/${category.toLowerCase()}`}> {category}</Link>
        {subcategory && (
          <>
            <span>/</span>
            <span className="text-primary"> {subcategory}</span>
          </>
        )}
      </p>

      {loading ? (
        <p className="text-center py-8 text-gray-500"><FontAwesomeIcon spin icon={faSpinner} className='me-2' />Loading products...</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center overflow-x-auto scrollbar-hide mt-6'>
          {totalItems.length > 0 ? (
            totalItems.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-8">
              No products found.
            </p>
          )}
        </div>
      )}
      {totalPages.length > 1 && (
        <Pagination />
      )}
    </div>
  );
};

export default ProductCategory;
