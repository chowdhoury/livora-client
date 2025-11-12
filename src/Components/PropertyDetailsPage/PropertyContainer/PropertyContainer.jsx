import { useEffect, useState } from "react";
// import PropertyCard from "../PropertyCard/PropertyCard";
import Filter from "../SearchFilterHelp/Filter";
import Help from "../SearchFilterHelp/Help";
import Search from "../SearchFilterHelp/Search";
import home from "../../../assets/house6.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import RatingCard from "../RatingCard/RatingCard";

const PropertyContainer = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="w-[95%] lg:w-9/12 mx-auto my-5 lg:my-30 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2">
        <img
          src={home}
          className="w-full h-[500px] object-cover rounded-2xl"
          alt=""
        />
        <div className="bg-base-200 rounded-2xl p-10 my-15">
          <h2 className="text-[50px] text-primary font-bold">Register</h2>
          <h1 className="text-[22px] text-secondary-focus font-bold mb-1">
            About This Property
          </h1>
          <p className="text-secondary-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            voluptates ullam, nihil adipisci tempora et, dolores modi officia
            voluptatem esse rerum qui minima. Minima debitis quibusdam odit
            pariatur voluptatem ut.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:hidden md:grid-cols-2 gap-10">
          <Search></Search>

          <Filter></Filter>
        </div>
        <div className="bg-base-200 rounded-2xl p-10 my-15">
          <h1 className="text-[22px] text-secondary-focus font-bold mb-1">
            Rate the Property
          </h1>
          <div>Ratings here</div>
          <textarea
            name=""
            className="bg-white w-full resize-none rounded-md text-primary p-2.5"
            rows={2}
            id=""
            placeholder="Description"
          ></textarea>
          <Link
            to={"/authentication/login"}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer mt-1 text-center inline-block"
          >
            <span className="flex gap-2 items-center">
              <span>
                <MdOutlineSubdirectoryArrowRight />
              </span>
              Rate Now
            </span>
          </Link>
        </div>
        <div>
          <h2 className="text-[50px] text-primary font-bold text-center">
            Other's Ratings
          </h2>
          <div className="flex flex-col gap-2">
            <RatingCard></RatingCard>
            <RatingCard></RatingCard>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex  flex-col ml-0 lg:ml-5">
        <Search />
        <section className="mt-10">
          <Filter />
        </section>
        <section className="mt-10">
          <Help />
        </section>
      </div>
    </div>
  );
};

export default PropertyContainer;
