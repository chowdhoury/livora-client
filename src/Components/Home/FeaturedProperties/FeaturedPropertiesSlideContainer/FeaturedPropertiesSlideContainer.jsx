import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertySlide from "./FeaturedPropertiesSlide/FeaturedPropertiesSlide";
import logo from "../../../../assets/logo-first.svg";

const FeaturedPropertiesSlideContainer = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const loadProperties = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/api/properties/featured"
        );
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        setProperties([]);
      }
    };

    loadProperties();
  }, []);

  return (
    <div className="bg-base-200">
      <div className="w-[95%] lg:w-9/12 mx-auto py-15 gap-10 items-center">
        <div className="flex justify-center gap-4">
          <figure>
            <img src={logo} className="h-5" alt="" />
          </figure>
          <p className="text-secondary-focus font-semibold">Our Top Picks</p>
        </div>

        <h2 className="text-[50px] text-primary font-bold text-center">
          Discover top-rated homes.
        </h2>
        <>
          {properties.length === 0 ? (
            <h1 className="text-3xl font-bold text-center py-20">
              No Featured Properties Available
            </h1>
          ) : null}
          {properties.length > 0 && (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
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
          )}
        </>
      </div>
    </div>
  );
};

export default FeaturedPropertiesSlideContainer;
