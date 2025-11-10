import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductCard from '../components/ProductCard'
import { useAppContext } from '../context/AppContext'
import { fetchProducts } from '../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const AllProducts = () => {
  const { searchQuery } = useAppContext();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const prods = await fetchProducts();
      setProducts(prods);
      setLoading(false);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const query = typeof searchQuery === 'string' ? searchQuery.toLowerCase() : '';
    if (query) {
      setFilteredProducts(
        products.filter(product => product.name.toLowerCase().includes(query))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <div className='container mx-auto px-8 md:px-0 py-4 pt-20'>
      <Title title="All Products" haveButton={false} />
      {
        loading ? (<p className="text-center mt-20"><FontAwesomeIcon spin icon={faSpinner} className='me-2' />Loading products...</p>) : 
        (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center mt-6'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
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
    </div>
  );
}

export default AllProducts;
