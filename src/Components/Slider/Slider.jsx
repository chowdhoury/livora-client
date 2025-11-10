import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import logo from "../../assets/logo-half.svg";
import { Link } from "react-router";

const Slider = () => {
  const slide = [
    "https://i.postimg.cc/qvnR6HJ5/house-1.jpg",
    "https://i.postimg.cc/xj4Ts1qH/house-2.jpg",
    "https://i.postimg.cc/jqFd8SC7/house-3.jpg",
    "https://i.postimg.cc/mkKPKQN8/house-4.jpg",
    "https://i.postimg.cc/gj1x1vqS/house-5.jpg",
  ];
  return (
    <div className="relative">
      <div
        className="flex flex-col justify-center items-center text-center text-white absolute z-50 w-full h-full top-0 left-0 bg-[#2F3D7E]/60"
      >
        <div className="max-w-3xl px-4">
          <div className="flex justify-center gap-4">
            <figure>
              <img src={logo} className="h-5" alt="" />
            </figure>
            <p className="text-secondary font-semibold">WELCOME TO LIVORA</p>
          </div>
          <h1 className="font-extrabold lg:text-[70px] md:text-[50px] text-[30px] leading-tight">
            Invest Today in
            <br />
            Your Dream Home
          </h1>

          <p className="my-3 md:my-8">
            Livora brings elegance and purpose together — where thoughtful
            design meets everyday comfort. Every detail is crafted to inspire
            modern living, blending sophistication with simplicity. With Livora,
            experience a lifestyle that feels as natural as it is refined.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link className="bg-secondary hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold duration-400">
              View Property
            </Link>
            <button className="border-2 border-white text-white hover:bg-secondary  px-7 py-3.5 hover:border-secondary rounded-lg font-semibold transition-all duration-300">
              Contact Now
            </button>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper bg-base-300"
      >
        {slide.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide item={item}></Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
