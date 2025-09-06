import React, { useEffect, useState } from 'react';
import logo from './../assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { assets, dummyCategories, dummyProducts } from '../assets/assets';
import { Link, useNavigate } from 'react-router';
import { getCartItemsCount } from './../store/cartSlice';
import { useSelector } from 'react-redux';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const { navigate, searchQuery, setSearchQuery } = useAppContext();

    const [open, setOpen] = useState(false)

    const itemCount = useSelector(getCartItemsCount)

    useEffect(()=>{
        navigate('/products')
    },[searchQuery])



    return (
        <div className="fixed w-full border-b border-gray-300 bg-white z-1000">
            <nav className="container flex items-center justify-between relative transition-all gap-4 mx-auto py-4 px-4">

                <Link to="/">
                    <img src={logo} className='w-38' alt="logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-8">

                    {dummyCategories.map((category, index) => (
                        <div key={index} className="relative group">
                            <Link to={`/products/${category.path.toLowerCase()}`} className="flex items-center text-xs xl:text-md space-x-2">
                                <span className='truncate white-space-nowrap overflow-hidden'>{category.text}</span>
                                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                            </Link>

                            <div className="w-[500px] absolute hidden group-hover:flex flex-wrap mt-0 pt-4">
                                <div className="bg-white shadow-lg rounded-lg z-50 border border-gray-200 grid grid-cols-3 space-x-16 items-center py-4 px-6">
                                    {
                                        Array.from(
                                            new Set(
                                                dummyProducts.filter((product) => product.category === category.path)
                                                    .map((subCategory, idx) => subCategory.subCategory)
                                            )
                                        ).map((subCat, idx) => (
                                            <Link key={idx} to={`/products/${category.path.toLowerCase()}/${subCat.toLowerCase()}`} className='text-nowrap'>{subCat}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" onChange={(e)=>setSearchQuery(e.target.value)} />
                        <img src={assets.search_icon} alt="cart_icon" />
                    </div>

                    <div className="relative cursor-pointer" onClick={()=>navigate('/cart')}>
                        <img src={assets.nav_cart_icon} alt='cart_icon' />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{itemCount}</button>
                    </div>

                    <button className="cursor-pointer px-4 py-2 bg-primary hover:bg-primary transition text-white rounded-full">
                        Login
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className='flex items-center gap-6 lg:hidden'>
                    <div className="relative cursor-pointer lg:hidden" onClick={()=>navigate('/cart')}>
                        <img src={assets.nav_cart_icon} className='w-6 opacity-80' alt="cart" />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{itemCount}</button>
                    </div>
                    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="lg:hidden cursor-pointer">
                        <div className={`w-[25px] h-[3px] bg-black rounded-lg m-[6px] transition-transform duration-500 ${open ? "rotate-[-45deg] translate-x-[-2px] translate-y-[9px]" : ""}`}></div>
                        <div className={`w-[25px] h-[3px] bg-black rounded-lg m-[6px] transition-opacity duration-500 ${open ? "opacity-0" : ""}`}></div>
                        <div className={`w-[25px] h-[3px] bg-black rounded-lg m-[6px] transition-transform duration-500 ${open ? "rotate-[45deg] translate-x-[-2px] translate-y-[-9px]" : ""}`}></div>
                    </button>
                </div>

                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm lg:hidden`}>
                    <a href="#" className="block">Home</a>
                    <a href="#" className="block">About</a>
                    <a href="#" className="block">Contact</a>
                    <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary transition text-white rounded-full text-sm">
                        Login
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar


