import React, { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { assets } from '../assets/assets'

const MainBanner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="md:container w-full md:h-[55vh] relative md:rounded-lg overflow-hidden mx-auto md:mt-30">
                        <img src={assets.slide4} alt="banner" className="w-full h-screen md:h-auto object-cover object-left md:block" />
                        <div className="absolute left-[50%] top-[50%] md:left-24 translate-[-50%] md:translate-0 md:left-20 md:top-50">
                            <h3 className='w-auto inline-block sm:text-sm bg-yellow-400 rounded text-center px-4 py-1'>Free Shipping - orders over $100</h3>
                            <h1 className='text-3xl sm:text-6xl text-nowrap font-bold leading-tight  my-4'>Free Shipping on<br />orders over <span className='text-primary'>$100</span></h1>
                            <h3 className='text-lg'>Lorem ipsum dolor sit amet consectetur elit. <br /> Eveniet, blanditiis!</h3>
                            <button className='bg-white rounded cursor-pointer flex group px-4 py-2 mt-4'>Shop Now <img src={assets.black_arrow_icon} className='ms-2 group-hover:translate-x-1 transition' alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:container w-full md:h-[55vh] relative md:rounded-lg overflow-hidden mx-auto md:mt-30">
                        <img src={assets.slide3} alt="banner" className="w-full h-screen md:h-auto object-cover object-left md:block" />
                        <div className="absolute left-[50%] top-[50%] translate-[-50%] md:top-50">
                            <h3 className='w-auto inline-block font-bold sm:text-sm bg-yellow-400 rounded text-center px-4 py-1'>Opening Sale Discount 50%</h3>
                            <h1 className='text-3xl sm:text-6xl text-nowrap font-bold text-primary my-4'>SuperMarket for <br />Fresh Grocery</h1>
                            <button className='bg-white rounded cursor-pointer px-4 py-2 mt-4'>View Dishes</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:container w-full md:h-[55vh] relative md:rounded-lg overflow-hidden mx-auto md:mt-30">
                        <img src={assets.slide2} alt="banner" className="w-full h-screen md:h-auto object-cover object-left md:block" />
                        <div className="absolute left-[50%] top-[50%] md:left-24 translate-[-50%] md:translate-0 md:left-20 md:top-50">
                            <h3 className='font-bold sm:text-xl text-white'>Mega Discounts On</h3>
                            <h1 className='text-3xl sm:text-6xl text-nowrap font-bold text-secondary my-4'>Tasty Bites Healthy <br />Foods</h1>
                            <h3 className='text-lg sm:text-2xl text-white'>10 - 50% OFF</h3>
                            <button className='bg-white rounded cursor-pointer px-4 py-2 mt-4'>View Dishes</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:container w-full md:h-[55vh] relative md:rounded-lg overflow-hidden mx-auto md:mt-30">
                        <img src={assets.slide1} alt="banner" className="w-full h-screen md:h-auto object-cover object-left md:block" />
                        <div className="absolute left-[50%] top-[50%] md:left-24 translate-[-50%] md:translate-0 md:left-20 md:top-50">
                            <h3 className='font-bold sm:text-xl'>Mega Discounts On</h3>
                            <h1 className='text-3xl sm:text-6xl text-nowrap font-bold text-primary my-4'>Tasty Bites Healthy <br />Foods</h1>
                            <h3 className='text-lg sm:text-2xl'>10 - 50% OFF</h3>
                            <button className='bg-white rounded cursor-pointer text-primary px-4 py-2 mt-4'>View Dishes</button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}

export default MainBanner
