import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { fetchCategories } from '../../services/api';

const CategoryCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex items-center space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-2">
        {categories.map((category) => (
          <div key={category.path} className="text-center flex-shrink-0">
            <Link to={`/products/${category.path.toLowerCase()}`} className="block">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center border-2 border-green-500 transition hover:border-green-600 shadow-md">
                <img
                  src={category.image}
                  className="w-full h-full object-cover"
                  alt={category.text}
                />
              </div>
              <p className="text-sm md:text-md my-1 font-medium">{category.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
