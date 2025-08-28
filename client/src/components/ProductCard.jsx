import React from 'react'
import { useNavigate } from 'react-router';
import Title from './Title';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = () => {

    const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">

            {
                Array(5).fill('').map((_,i)=>(
                    <div className="w-full sm:w-62 xl:w-68 relative flex flex-col bg-white border border-gray-200 rounded overflow-hidden shadow-md cursor-pointer my-4" onClick={()=>navigate("/")}>
                        {/* discount text when have discount */}
                        <div className="absolute top-2 right-2 bg-green-600 text-white text-bold rounded px-2">15% off Ks.12000</div>
                        <img src="https://delishglobe.com/wp-content/uploads/2025/02/Burmese-Mohinga-Fish-Noodle-Soup.png" className='w-full h-42 object-cover' alt="food" />
                        <div className="relative text-sm p-2 space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className='w-48 text-xl font-bold truncate white-space-nowrap overflow-hidden'>Monhinga</h3>
                                <div className="flex items-center gap-2">
                                    <img src={assets.star_icon} className='w-4 h-4' alt="star_icon" />
                                    <span className='text-xs text-slate-500'>4.9</span>
                                </div>
                            </div>
                            <p className='text-slate-500 text-xs'>$ <span>Burmese food</span></p>
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                <div className="flex items-center gap-2">
                                    <img src={assets.clock_icon} className='w-4 h-4' alt="" />
                                    <span>25-40 minutes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={assets.delivery_icon} className='w-4 h-4' alt="" />
                                    <span>750MMK</span>
                                </div>
                            </div>
                            {/* add to cart button */}
                            <div className="w-8 h-8 bg-green-500 flex justify-center items-center text-white rounded-full shadow absolute right-4 bottom-4 p-2">
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
