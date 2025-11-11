import React from "react";
import { Link, useLoaderData } from "react-router";
import PropertyCard from "../PropertyCard/PropertyCard";
import Search from "../SearchFilterHelp/Search";
import Filter from "../SearchFilterHelp/Filter";
import Help from "../SearchFilterHelp/Help";

const PropertyContainer = () => {
    const properties = useLoaderData();
    // console.log(properties);
  return (
    <div className="w-[95%] lg:w-9/12 mx-auto my-5 lg:my-30 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
        <Search className="" />
        <Filter />
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property}></PropertyCard>
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
