import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { assets } from "@/assets/assets";

const banners = [
  {
    id: 1,
    image: assets.banner_4,
    label: "Free Shipping - orders over $100",
    title: (
      <>
        Free Shipping on <br /> orders over <span className="text-primary">$100</span>
      </>
    ),
    description: "Lorem ipsum dolor sit amet consectetur elit. Eveniet, blanditiis!",
    buttonText: "Shop Now",
    buttonIcon: assets.black_arrow_icon,
    textColor: "text-white",
    highlightColor: "bg-yellow-400 text-black",
  },
  {
    id: 2,
    image: assets.banner_3,
    label: "Opening Sale Discount 50%",
    title: (
      <>
        SuperMarket for <br /> Fresh Grocery
      </>
    ),
    buttonText: "View Dishes",
    textColor: "text-primary",
    highlightColor: "bg-yellow-400",
  },
  {
    id: 3,
    image: assets.banner_2,
    label: "Mega Discounts On",
    title: (
      <>
        Tasty Bites Healthy <br /> Foods
      </>
    ),
    subText: "10 - 50% OFF",
    buttonText: "View Dishes",
    textColor: "text-secondary",
  },
  {
    id: 4,
    image: assets.banner_1,
    label: "Mega Discounts On",
    title: (
      <>
        Tasty Bites Healthy <br /> Foods
      </>
    ),
    subText: "10 - 50% OFF",
    buttonText: "View Dishes",
    textColor: "text-primary",
  },
];

const BannerSlide = ({
  image,
  label,
  title,
  description,
  subText,
  buttonText,
  buttonIcon,
  textColor = "text-white",
  highlightColor = "bg-yellow-400 text-black",
}) => (
  <div className="relative w-full md:container md:h-[55vh] mx-auto overflow-hidden md:rounded-lg">
    <img src={image} alt="banner" className="w-full h-[40vh] md:h-[55vh] object-cover object-left" />

    <div className={`absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 ${textColor}`}>
      {label && (
        <h3
          className={`inline-block rounded px-4 py-1 text-sm sm:text-base font-semibold ${highlightColor}`}
        >
          {label}
        </h3>
      )}

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight my-4">{title}</h1>

      {description && <p className="text-lg sm:text-xl">{description}</p>}
      {subText && <h3 className="text-lg sm:text-2xl">{subText}</h3>}

      <button className="bg-white text-black rounded flex items-center justify-center px-4 py-2 mt-4 shadow group">
        {buttonText}
        {buttonIcon && (
          <img
            src={buttonIcon}
            alt=""
            className="ms-2 group-hover:translate-x-2 transition-all duration-300"
          />
        )}
      </button>
    </div>
  </div>
);

const MainBanner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (_, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerSlide {...banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainBanner;
