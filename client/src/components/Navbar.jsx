import React, { useEffect, useState } from 'react';
import logo from './../assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { assets, dummyCategories, dummyProducts } from '../assets/assets';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    useEffect(()=>{
        if(open){
            
            console.log("hello")
        }else{
            console.log("olleh")
        }
    },[open])

  {`
  .crossxs .lines1 {
    transform: rotate(-45deg) translate(-6px, 6px);
  }
  .crossxs .lines2 {
    opacity: 0;
  }
  .crossxs .lines3 {
    transform: rotate(45deg) translate(-6px, -6px);
  }
`}

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <a href="#">
                <img src={logo} className='w-38 md:w-48 lg:w-60' alt="logo" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">

                <a href="#">Home</a>

                {dummyCategories.map((category, index) => (
                    <div key={index} className="relative group">
                        <a href="#" className="flex items-center space-x-2">
                        <span>{category.text}</span>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                        </a>

                        <div className="w-[500px] absolute hidden group-hover:flex flex-wrap mt-0 pt-4">
                            <div className="bg-white shadow-lg rounded-lg z-50 border border-gray-200 grid grid-cols-3 space-x-16 items-center py-4 px-6">
                            {
                                Array.from(
                                    new Set(
                                        dummyProducts.filter((product) => product.category === category.path)
                                             .map((subCategory,idx) => subCategory.subCategory)
                                    )
                                ).map((subCat,idx)=>(
                                        <a href='#' className='text-nowrap'>{subCat}</a>
                                ))
                            }
                            </div>
                            </div>
                    </div>
                    ))}

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

                <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary transition text-white rounded-full">
                    Login
                </button>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                    <div className="lines1 w-[25px] h-[3px] bg-black rounded-lg mb-[6px] transition-transform duration-500"></div>
  <div className="lines2 w-[25px] h-[3px] bg-black rounded-lg mb-[6px] transition-opacity duration-500"></div>
  <div className="lines3 w-[25px] h-[3px] bg-black rounded-lg transition-transform duration-500"></div>
</button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Contact</a>
                <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>

        </nav>
    )
}

export default Navbar


