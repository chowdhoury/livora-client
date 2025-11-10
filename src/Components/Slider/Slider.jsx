import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

const Slider = () => {
  const slide = [
    "https://i.postimg.cc/qvnR6HJ5/house-1.jpg",
    "https://i.postimg.cc/xj4Ts1qH/house-2.jpg",
    "https://i.postimg.cc/jqFd8SC7/house-3.jpg",
    "https://i.postimg.cc/mkKPKQN8/house-4.jpg",
    "https://i.postimg.cc/gj1x1vqS/house-5.jpg",
  ];
    return (
      <div>
            
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
      {slide.map((item,index) => (
          <SwiperSlide key={index}>
          <Slide item={item}></Slide>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
  );
};

export default Slider;
