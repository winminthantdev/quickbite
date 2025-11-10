import React, { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { assets } from '../../assets/assets'

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
                    <div className="relative w-full md:container md:h-[55vh] lg:rounded-lg overflow-hidden mx-auto md:mt-30">
                        <img src={assets.banner_4} alt="banner" className="w-full h-[40vh] md:h-[55vh] object-cover object-left" />

                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start p-6 text-white">
                            <h3 className="bg-yellow-400 text-black rounded px-4 py-1 text-sm sm:text-base">Free Shipping - orders over $100</h3>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight my-4">Free Shipping on <br /> orders over
                                <span className="text-primary"> $100 </span>
                            </h1>
                            <h3 className="text-lg sm:text-xl text-center md:text-start">
                                Lorem ipsum dolor sit amet consectetur elit. <br /> Eveniet, blanditiis!
                            </h3>
                            <button className="bg-white text-black rounded flex items-center group px-4 py-2 mt-4 shadow">
                                Shop Now
                                <img src={assets.black_arrow_icon} className="ms-2 group-hover:translate-x-2 transition-all duration-300" alt="" />
                            </button>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:container w-full h-[40vh] md:h-[55vh] relative md:rounded-lg overflow-hidden mx-auto md:mt-30">
                        <img
                            src={assets.banner_3}
                            alt="banner"
                            className="w-full h-full object-cover object-left"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:left-20 text-center md:text-left">
                            <h3 className="inline-block font-bold text-sm sm:text-base bg-yellow-400 rounded px-4 py-1">
                                Opening Sale Discount 50%
                            </h3>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary my-4">
                                SuperMarket for <br /> Fresh Grocery
                            </h1>
                            <button className="bg-white rounded px-4 py-2 mt-4 shadow">
                                View Dishes
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:container w-full h-[40vh] md:h-[55vh] relative md:rounded-lg overflow-hidden mx-auto md:mt-30">
                        <img
                            src={assets.banner_2}
                            alt="banner"
                            className="w-full h-full object-cover object-left"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:left-20 text-center md:text-left">
                            <h3 className="font-bold text-base sm:text-xl text-white">
                                Mega Discounts On
                            </h3>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-secondary my-4">
                                Tasty Bites Healthy <br /> Foods
                            </h1>
                            <h3 className="text-lg sm:text-2xl text-white">10 - 50% OFF</h3>
                            <button className="bg-white rounded px-4 py-2 mt-4 shadow">
                                View Dishes
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="md:container w-full h-[40vh] md:h-[55vh] relative md:rounded-lg overflow-hidden mx-auto md:mt-30">
                        <img
                            src={assets.banner_1}
                            alt="banner"
                            className="w-full h-full object-cover object-left"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:left-20 text-center md:text-left text-white">
                            <h3 className="font-bold text-base sm:text-xl">Mega Discounts On</h3>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary my-4">
                                Tasty Bites Healthy <br /> Foods
                            </h1>
                            <h3 className="text-lg sm:text-2xl">10 - 50% OFF</h3>
                            <button className="bg-white text-primary rounded px-4 py-2 mt-4 shadow">
                                View Dishes
                            </button>
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
