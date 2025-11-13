import { use, useContext, useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import Filter from "../SearchFilterHelp/Filter";
import Help from "../SearchFilterHelp/Help";
import Search from "../SearchFilterHelp/Search";
import AuthContext from "../../../Auth/AuthContext/AuthContext";

const PropertyContainer = () => {
  const {user}=useContext(AuthContext)
  const [ratings,setRatings]=useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/ratings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRatings(data);
        // console.log(data);
      });
  }, [user?.email]);
  return (
    <div className="w-[95%] lg:w-9/12 mx-auto my-5 lg:my-30 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="mt-10 lg:hidden">
          <Search />
        </section>
        <section className="md:mt-10 lg:hidden">
          <Filter />
        </section>
        {ratings.map((rating) => (
          <PropertyCard key={rating._id} rating={rating}></PropertyCard>
        ))}
      </div>
      <div className="flex flex-col ml-0 lg:ml-5">
        <div className="hidden lg:block">
          <Search />
          <section className="mt-10">
            <Filter />
          </section>
          <section className="mt-10">
            <Help />
          </section>
        </div>
      </div>
    </div>
  );
};

export default PropertyContainer;
