import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { assets } from '@/assets/assets';
import ProductCard from '@/components/ui/ProductCard';
import Title from '@/components/ui/Title';
import { addToCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { fetchProductsById, fetchRelatedProducts } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [selectedImage, setSelectedImage] = useState(null);

    const { data: menu, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductsById(id).then(res => res.data),
        onSuccess: (data) => setSelectedImage(data?.images?.[0])
    });

    const { data: relatedProducts = [] } = useQuery({
        queryKey: ["product", "related", id],
        queryFn: () => fetchRelatedProducts(id).then(res => res.data),
        enabled: !!id,
    });

    useEffect(() => {
        if (menu?.images?.length > 0) {
            setSelectedImage(menu.images[0]);
        }
    }, [menu]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleAddToCart = (shouldNavigate = false) => {
        dispatch(addToCart(menu));
        if (shouldNavigate) navigate("/cart");
    };

    if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading product...</div>;
    if (error || !menu) return <div className="py-20 text-center">Product not found.</div>;

    const finalPrice = menu.promotion?.isActive
        ? menu.price - (menu.price * menu.promotion.discountPercent / 100)
        : menu.price;

    return (
        <div className="container mx-auto px-4 lg:px-8 pt-28 pb-10">
            {/* Breadcrumbs - Improved for readability */}
            <nav className="text-sm text-gray-500 mb-8 flex flex-wrap gap-2">
                <Link to="/" className="hover:text-primary">Home</Link> /
                <Link to="/products" className="hover:text-primary">Products</Link> /
                <Link to={`/products/category/${menu.category.slug}`} className="capitalize"> {menu.category.name}</Link> /
                <span className="text-primary font-medium"> {menu.name}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* Image Section */}
                <div className="flex flex-col md:flex-row gap-4 lg:w-3/5">
                    {/* Thumbnail Strip */}
                    <div className="flex md:flex-col gap-3 order-2 md:order-1">
                        {menu.images?.map((img) => (
                            <button
                                key={img}
                                onClick={() => setSelectedImage(img)}
                                className={`w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-primary' : 'border-transparent bg-gray-50'}`}
                            >
                                <img src={img} className="w-full h-full object-cover" alt="Product thumbnail" />
                            </button>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="flex-1 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 order-1 md:order-2">
                        <img
                            src={selectedImage || menu.images?.[0]}
                            alt={menu.name}
                            className="w-full aspect-square object-contain transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex-1 flex flex-col">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{menu.name}</h1>

                    {/* Rating Section */}
                    <div className="flex items-center gap-2 mt-4">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src={i < Math.floor(menu.rating || 4) ? assets.star_icon : assets.star_dull_icon} className="w-4" alt="star" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">({menu.rating || 4.0})</span>
                    </div>

                    <div className="my-8 py-6 border-y border-gray-100">
                        {menu.promotion?.isActive ? (
                            <div className="space-y-1">
                                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded uppercase">
                                    {menu.promotion.discountPercent}% OFF
                                </span>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-bold text-primary">MMK {finalPrice.toLocaleString()}</span>
                                    <span className="text-lg text-gray-400 line-through">MMK {menu.price.toLocaleString()}</span>
                                </div>
                            </div>
                        ) : (
                            <span className="text-3xl font-bold text-gray-900">MMK {menu.price.toLocaleString()}</span>
                        )}
                        <p className="text-xs text-gray-400 mt-2">*Inclusive of all applicable taxes</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-800">About Product</h3>
                        <p className="text-gray-600 leading-relaxed">{menu.description}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4 mt-auto pt-6">
                        <button
                            onClick={() => handleAddToCart(false)}
                            className="py-4 rounded-xl font-bold border-2 border-gray-200 hover:bg-gray-50 transition-all active:scale-95"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => handleAddToCart(true)}
                            className="py-4 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="mt-24">
                <div className="flex items-center justify-between mb-8">
                    <Title title="You May Also Like" haveButton={false} />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {relatedProducts.length > 0 ? (
                        relatedProducts.slice(0, 5).map((rp) => (
                            <ProductCard key={rp.id} product={rp} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-400 py-10">No related products found.</p>
                    )}
                </div>

                <div className="flex justify-center mt-12">
                    <button
                        className="px-10 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all"
                        onClick={() => navigate(`/products/category/${menu.category.slug}`)}
                    >
                        See All in {menu.category.name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;