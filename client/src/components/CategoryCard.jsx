import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { fetchCategories } from '../services/api';
const CategoryCard = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
        };
        loadCategories();
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div className="w-full flex items-center space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
                {categories.map((category, index) => (
                    <Link 
                        to={`/products/${category.path.toLowerCase()}`} 
                        key={index} 
                        className="text-center"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center border-2 border-green-500 transition hover:border-green-600">
                            <img 
                                src={category.image} 
                                className="w-full h-full object-cover" 
                                alt={category.text} 
                            />
                        </div>
                        <p className="text-sm md:text-md my-1">{category.text}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryCard;
