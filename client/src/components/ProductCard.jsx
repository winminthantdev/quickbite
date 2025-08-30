import React from 'react'
import { useNavigate } from 'react-router';
import Title from './Title';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = ({products, wrap}) => {  

    const navigate = useNavigate();

  return (
    <div className={`w-full flex gap-6 ${wrap ? 'whitespace-nowrap overflow-x-auto' : 'flex-wrap'} scrollbar-hide`}>
  {
    products.map((product,idx)=>(
      <div 
        key={`${product._id}-${idx}`}
        className="group min-w-[250px] max-w-[280px] flex-shrink-0 relative flex flex-col bg-white border border-gray-200 rounded overflow-hidden shadow-md cursor-pointer my-4"
        onClick={() => navigate(`/products/${product.category.toLowerCase()}/${product.subCategory.toLowerCase()}/${product._id}`)}
      >
        {/* discount text when have discount */}
        {
          product.promotion?.isActive && (
            <div className="absolute top-2 right-2 bg-green-600 text-white font-bold rounded px-2 text-xs z-100">
              {`${product.promotion.discountPercent}% off Ks. ${product.price - (product.price * product.promotion.discountPercent / 100)}`}
            </div>
          )
        }

        
        <div className="h-40 overflow-hidden">
          <img 
            src={product.image[0]}
            className="w-full h-40 object-contain transition duration-300 group-hover:scale-110" 
            alt={product.name} 
          />
        </div>
        
        <div className="relative text-sm p-2 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold truncate">{product.name}</h3>
            <div className="flex items-center gap-1">
              <img src={assets.star_icon} className="w-4 h-4" alt="star_icon" />
              <span className="text-xs text-slate-500">4.9</span>
            </div>
          </div>
          
          <p className="text-slate-500 text-xs">$ <span>{product.subCategory}</span></p>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <div className="flex items-center gap-1">
              <img src={assets.clock_icon} className="w-4 h-4" alt="" />
              <span>25-40 minutes</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={assets.delivery_icon} className="w-4 h-4" alt="" />
              <span>{product.price}MMK</span>
            </div>
          </div>
          
          {/* add to cart button */}
          <div className="w-8 h-8 bg-green-500 flex justify-center items-center text-white rounded-full shadow absolute right-4 bottom-4">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </div>
        </div>
      </div>
    ))
  }
</div>

  )
}

export default ProductCard
