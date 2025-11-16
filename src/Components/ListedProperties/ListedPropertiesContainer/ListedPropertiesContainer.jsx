import { useState } from "react";
import { useLoaderData } from "react-router";
import ListedPropertyCard from "./ListedPropertyCard/ListedPropertyCard";

import Help from "../../Shared/Help/Help";
import ListedPropertiesFilter from "./ListedPropertiesFilter/ListedPropertiesFilter";
import ListedPropertiesSearch from "./ListedPropertiesSearch/ListedPropertiesSearch";
import LoaderElement from "../../Shared/LoaderElement/LoaderElement";

const ListedPropertiesContainer = () => {
  const [properties, setProperties] = useState(useLoaderData());
  const [elementLoading, setElementLoading] = useState(false);

  const handleFilter = async (e) => {
    setElementLoading(true);
    e.preventDefault();

    const filter = e.target.filter.value;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_api_base_url}/api/properties?sort=${filter}`
      );
      const data = await res.json();
      setProperties(data);
    } catch (error) {
      setProperties([]);
    }

    setElementLoading(false);
  };
  const handleSearch = async (e) => {
    setElementLoading(true);
    e.preventDefault();
    const query = e.target.search.value;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_api_base_url}/api/properties?search=${query}`
      );
      const data = await res.json();
      setProperties(data);
    } catch (error) {
      setProperties([]);
    }
    setElementLoading(false);
  };

  return (
    <div className="w-[95%] lg:w-9/12 mx-auto my-5 lg:my-30 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="mt-10 lg:hidden">
          <ListedPropertiesSearch handleSearch={handleSearch} />
        </section>

        <section className="md:mt-10 lg:hidden">
          <ListedPropertiesFilter handleFilter={handleFilter} />
        </section>

        {elementLoading ? (
          <div className="col-span-2 flex justify-center items-center">
            <LoaderElement />
          </div>
        ) : properties.length === 0 ? (
          <h1 className="text-3xl font-bold text-center col-span-2">
            No Listed Properties Found!
          </h1>
        ) : (
          properties.map((property) => (
            <ListedPropertyCard
              key={property._id}
              property={property}
              handleFilter={handleFilter}
            />
          ))
        )}
      </div>

      <div className="flex flex-col ml-0 lg:ml-5">
        <div className="hidden lg:block">
          <ListedPropertiesSearch handleSearch={handleSearch} />

          <section className="mt-10">
            <ListedPropertiesFilter handleFilter={handleFilter} />
          </section>

          <section className="mt-10">
            <Help />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ListedPropertiesContainer;
