import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import PropertySlide from "./PropertySlide";
import { useEffect, useState } from "react";

const SlideContainer = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/properties/featured")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);
  return (
    <div className="bg-base-200">
      <div className="w-[95%] lg:w-9/12 mx-auto py-15 gap-10 items-center">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {properties.map((property) => (
              <SwiperSlide key={property._id}>
                <PropertySlide property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default SlideContainer;
