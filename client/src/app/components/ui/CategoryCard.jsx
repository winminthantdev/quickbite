import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import { fetchCategories } from '@/services/api';

const CategoryCard = () => {

  const fetchCategoriesFun = async () => {
    const res = await fetchCategories();
    return res.data || [];
  };

  const {data : categories = [], isLoading, isFetching} = useQuery({queryKey: ["categories"], queryFn: fetchCategoriesFun})
    

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex items-center space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-2">
        {isLoading || isFetching ? (
          [...Array(6)].map((_, i) => (
              <div className="text-center flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 animate-pulse rounded-full bg-gray-400 flex items-center justify-center"></div>
              </div>
            ))
        ) : (
          categories.map((category) => (
          <div key={category.slug} className="text-center flex-shrink-0">
            <Link to={`/products/category/${category.slug}`} className="block">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center border-2 border-green-500 transition hover:border-green-600 shadow-md">
                <img
                  src={category.image}
                  className="w-full h-full object-cover"
                  alt={category.name}
                />
              </div>
              <p className="text-sm md:text-md my-1 font-medium">{category.name}</p>
            </Link>
          </div>
        ))
        )}
        
      </div>
    </div>
  );
};

export default CategoryCard;
