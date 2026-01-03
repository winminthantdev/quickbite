import React, { useEffect, useState } from 'react';
import logo from '@/assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { assets } from '@/assets/assets';
import { Link, useNavigate } from 'react-router';
import { getCartItemsCount } from '@/store/cartSlice';
import { useSelector } from 'react-redux';
import Login from '@/components/ui/Login';
import { checkAuth, getUserInfo, logoutUser } from '@/services/authService';
import { faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { fetchCategories, searchProducts } from '@/services/api';

const Navbar = () => {
    const [searchItem, setSearchItem] = useState("");
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [ResultLoading, setResultLoading] = useState(false);

    const itemCount = useSelector(getCartItemsCount);

    // fetch categories from API (or local JSON)
    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
        };
        loadCategories();
    }, []);


    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchItem.trim().length > 0) {
                setResultLoading(true);
                try {
                    const results = await searchProducts(searchItem);
                    setSearchResults(results);
                } catch (error) {
                    console.error("Error fetching search results:", error);
                }
                setResultLoading(false);
            } else {
                setSearchResults([]);
            }
        }, 400);

        return () => clearTimeout(delayDebounceFn);
    }, [searchItem]);


    const userInfo = JSON.parse(localStorage.getItem("auth")).user;
    
    

    const handleSignout = () => {
        logoutUser();
        navigate("/");
    };

    return (
        <div className="fixed w-full border-b border-gray-300 bg-white z-1000">
            <nav className="container flex items-center justify-between relative transition-all gap-4 mx-auto py-4 px-4">

                <Link to="/">
                    <img src={logo} className="w-38" alt="logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="relative group">
                            <Link
                                to={`/products/${category.path.toLowerCase()}`}
                                className="flex items-center text-xs xl:text-md space-x-2"
                            >
                                <span className="truncate whitespace-nowrap overflow-hidden">
                                    {category.text}
                                </span>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>

                            {/* Subcategories dropdown */}
                            {category.subcategories && category.subcategories.length > 0 && (
                                <div className="w-[500px] absolute hidden group-hover:flex flex-wrap mt-0 pt-4">
                                    <div className="bg-white shadow-lg rounded-lg z-50 border border-gray-200 grid grid-cols-3 gap-4 py-4 px-6">
                                        {category.subcategories.map((subCat, idx) => (
                                            <Link
                                                key={idx}
                                                to={`/products/${category.path.toLowerCase()}/${subCat.toLowerCase()}`}
                                                className="text-nowrap hover:text-primary"
                                            >
                                                {subCat}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Search */}
                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input
                            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                            type="text"
                            placeholder="Search products"
                            onChange={e => setSearchItem(e.target.value.trim())}
                        />
                        <img src={assets.search_icon} alt="search_icon" />
                    </div>

                    {/* Cart */}
                    <div className="relative cursor-pointer" onClick={() => navigate('/my-account/cart')}>
                        <img src={assets.nav_cart_icon} alt="cart_icon" />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
                            {itemCount}
                        </button>
                    </div>

                    {/* Auth Section */}
                    {!(checkAuth()) ? (
                        <button
                            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary transition text-white rounded-full text-sm"
                            onClick={() => setShowModal(true)}
                        >
                            Login
                        </button>
                    ) : (
                        <div className="relative w-8 h-8 group flex justify-center items-center bg-primary hover:bg-primary transition text-white rounded-full text-sm">
                            <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
                            <div className="absolute -right-5 top-5 p-4">
                                <div className="border border-gray-300 rounded bg-white text-gray-500 p-4 hidden group-hover:flex">
                                    <ul className="flex flex-col space-y-1 font-bold">
                                        <li
                                            className="cursor-pointer hover:text-black"
                                            onClick={() => navigate("/my-account/user-info")}
                                        >
                                            {userInfo?.name}
                                        </li>
                                        <li
                                            className="cursor-pointer hover:text-black"
                                            onClick={() => navigate("/my-account/user-info")}
                                        >
                                            {userInfo?.email}
                                        </li>
                                        <li
                                            className="cursor-pointer hover:text-black"
                                            onClick={() => navigate("/my-account/orders")}
                                        >
                                            Order History
                                        </li>
                                        <li
                                            className="cursor-pointer hover:text-red-500"
                                            onClick={handleSignout}
                                        >
                                            Sign Out
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center gap-6 lg:hidden">
                    <div
                        className="relative cursor-pointer lg:hidden"
                        onClick={() => navigate('my-account/cart')}
                    >
                        <img src={assets.nav_cart_icon} className="w-6 opacity-80" alt="cart" />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
                            {itemCount}
                        </button>
                    </div>
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                        className="lg:hidden cursor-pointer"
                    >
                        <div className={`w-[25px] h-[3px] bg-black rounded-lg m-[6px] transition-transform duration-500 ${open ? "rotate-[-45deg] translate-x-[-2px] translate-y-[9px]" : ""}`}></div>
                        <div className={`w-[25px] h-[3px] bg-black rounded-lg m-[6px] transition-opacity duration-500 ${open ? "opacity-0" : ""}`}></div>
                        <div className={`w-[25px] h-[3px] bg-black rounded-lg m-[6px] transition-transform duration-500 ${open ? "rotate-[45deg] translate-x-[-2px] translate-y-[-9px]" : ""}`}></div>
                    </button>
                </div>

                {/* Mobile dropdown */}
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm lg:hidden`}>
                    {categories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col w-full">
                            <Link to={`/products/${cat.path.toLowerCase()}`} className="block py-2">
                                {cat.text}
                            </Link>
                        </div>
                    ))}

                    {!(checkAuth()) ? (
                        <button
                            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary transition text-white rounded-full text-sm"
                            onClick={() => setShowModal(true)}
                        >
                            Login
                        </button>
                    ) : (
                        <div className="w-full flex items-center border-t text-gray-500 pt-4 text-sm">
                            <ul className="flex flex-col space-y-1 font-bold">
                                <li
                                    className="cursor-pointer hover:text-black"
                                    onClick={() => navigate("/my-account/user-info")}
                                >
                                    {userInfo?.name}
                                </li>
                                <li
                                    className="cursor-pointer hover:text-black"
                                    onClick={() => navigate("/my-account/user-info")}
                                >
                                    {userInfo?.email}
                                </li>
                                <li
                                    className="cursor-pointer hover:text-black"
                                    onClick={() => navigate("/my-account/orders")}
                                >
                                    Order History
                                </li>
                                <li
                                    className="cursor-pointer hover:text-red-500"
                                    onClick={handleSignout}
                                >
                                    Sign Out
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            {/* Show Modal when true */}
            {showModal && <Login onClose={() => setShowModal(false)} />}

            {/* Show Search Items Result */}
            {searchItem && (
                <div className="hidden lg:flex absolute top-[75px] right-3 transform -translate-x-1/2 w-2/3 max-w-md bg-white border border-gray-200 shadow-lg rounded-xl z-[2000]">
                    <div className="w-full max-h-[350px] overflow-y-auto">
                        {ResultLoading ? (
                            <div className="p-6 text-center text-gray-500 text-sm">Loading...</div>
                        ) : searchResults.length > 0 ? (
                            searchResults.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        navigate(`/products/${item.category}/${item.subCategory}/${item._id}`);
                                        setSearchItem("");
                                        setSearchResults([]);
                                    }}
                                    className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition"
                                >
                                    <img
                                        src={item.image[0] || assets.sample_img}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-lg object-cover border"
                                    />
                                    <div className="flex flex-col">
                                        <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
                                        <p className="text-xs text-gray-500 truncate w-[200px]">{item.category}</p>
                                        <span className="text-sm font-bold text-primary mt-1">${item.price}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-6 text-center text-gray-500 text-sm">
                                No results found for "{searchItem}"
                            </div>
                        )}
                    </div>
                </div>
            )}


        </div>
    );
};

export default Navbar;
