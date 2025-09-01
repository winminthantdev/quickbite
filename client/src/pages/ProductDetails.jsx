import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import { assets, dummyProducts } from '../assets/assets';
import ProductCard from '../components/ProductCard';
import Title from '../components/Title';

const ProductDetails = () => {
  
    const {id} = useParams()
    const [relatedProducts, setRelatedProducts] = useState([])
    const [thumbnail, setThumbnail] = useState(null);
    const navigate = useNavigate();

    const product = dummyProducts.find((item)=> item._id === id);

    if (!product) {
        return <p className="text-center py-20">Product not found.</p>;
    }


    useEffect(()=>{
        if(dummyProducts.length > 0){
            const productsCopy = dummyProducts.filter((item)=> product.subCategory === item.subCategory && product._id !== item._id)
            setRelatedProducts(productsCopy.slice(0,5))
        }
    },[product])    

    useEffect(()=>{
        setThumbnail(product?.image[0] ? product.image[0] : null)
    },[product])
    
    return product && (
        <div className="container mx-auto px-4 md:px-0 py-4 pt-20">
            <p>
                <Link to={"/"}>Home</Link> /
                <Link to={"/products"}> Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`}> {product.category}</Link> /
                <Link to={`/products/${product.category.toLowerCase()}/${product.subCategory.toLowerCase()}`}> {product.subCategory}</Link> /
                <span className="text-primary"> {product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-3">
                    <div className="flex md:flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={image} onClick={() => setThumbnail(image)} className="w-36 h-36 border border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} className='w-full h-full object-cover' alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="w-90 h-90 border border-gray-500/30  rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                            <img  src={ i < 4 ? assets.star_icon : assets.star_dull_icon } className='w-3.5 md:w-4' alt="" />
                        ))}
                        <p className="text-base ml-2">(4)</p>
                    </div>

                    <div className="mt-6">
                        <p className={`${product.promotion.isActive ? 'text-gray-500/70 line-through inline-block me-2' : 'text-2xl font-medium'}`}>MMK: {product.price}</p>{product.promotion.isActive && <p className='inline-block'>{product.promotion.discountPercent}% off</p>}
                        {product.promotion.isActive && 
                            <p className="text-2xl font-medium">MMK: {product.price - (product.price * product.promotion.discountPercent / 100)}</p>
                        }
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <p className="text-gray-500/70">
                        {product.description}
                    </p>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-200/70 text-gray-800/80 hover:bg-gray-200 transition" 
                            onClick={()=> addToCart(product._id)}
                        >
                            Add to Cart
                        </button>
                        <button className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull transition" 
                            onClick={()=> {addToCart(product._id); navigate("/cart")}}
                        >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            {/* -------------------------- related products ------------------------ */}
            <div className="flex flex-col items-center mt-20">
                <Title title="Related Products" haveButton={false} />
                <div className='w-full flex gap-3 overflow-x-auto scrollbar-hide mt-6'>
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((product,idx)=>(
                            <ProductCard key={idx} product={product} />
                        ))
                    ): (
                        <p className="col-span-full text-center text-gray-500 py-8">
                            No products found.
                        </p>
                    )}
                </div>
                <button className='mx-auto cursor-pointer border rounded text-primary hover:bg-primary/10 transition my-16 px-12 py-2.5' onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product.subCategory.toLowerCase()}`); scrollTo(0,0)}}>See more</button>
            </div>
        </div>
    );
}

export default ProductDetails
