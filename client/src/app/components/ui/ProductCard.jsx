import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { assets } from '@/assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

const ProductCard = ({product}) => {  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleAddToCart = () =>{
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      images: product.images,
      promotion: product.promotion,
      category: product.category?.name
    }));
  };

  return (    
    <div 
        key={`${product.id}`}
        className="group w-full min-w-[250px] max-w-[300px] flex-shrink-0 relative flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md cursor-pointer my-4"
        onClick={() => navigate(`/products/${product.id}`, scrollTo(0,0))}
      >
        {/* discount text when have discount */}
        {
          product.promotion?.isActive && (
            <div className="absolute top-2 right-2 bg-green-600 text-white font-bold rounded px-2 text-xs z-100">
              {`${product.promotion.discountPercent}% OFF`}
            </div>
          )
        }
        
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={product.image}
            className="w-full h-full object-contain transition duration-300 group-hover:scale-110" 
            alt={product.name} 
          />
        </div>
        
        <div className="relative text-sm p-2 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold truncate">{product.name}</h3>
            <div className="flex items-center gap-1">
              <img src={assets.star_icon} className="w-4 h-4" alt="star_icon" />
              <span className="text-xs text-slate-500">{product.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-slate-500 text-xs">$ <span>{product.subcategory?.name} ( {product.category?.name} )</span></p>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <div className="flex items-center gap-1">
              <img src={assets.clock_icon} className="w-4 h-4" alt="" />
              <span>25-40 mins</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={assets.delivery_icon} className="w-4 h-4" alt="" />
              {product.promotion?.isActive ? (
              <div className="flex flex-col items-center">
                <span className="text-gray-400 line-through">
                  Ks. {parseFloat(product.price).toLocaleString()}
                </span>
                <span className="font-semibold">
                  Ks. {parseFloat(product.final_price).toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="font-semibold">
                Ks. {parseFloat(product.price).toLocaleString()}
              </span>
            )}
            </div>
          </div>
          
          {/* add to cart button */}
          <div className="w-8 h-8 bg-green-500 flex justify-center items-center text-white rounded-full shadow absolute right-4 bottom-4" onClick={(e)=>{e.stopPropagation(); handleAddToCart();}}>
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </div>
        </div>
      </div>
  )
}

export default ProductCard

// 3/4 ?/280