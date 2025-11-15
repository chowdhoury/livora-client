import React from 'react';
import ListedPropertyCard from './ListedPropertyCard/ListedPropertyCard';
import { useLoaderData } from 'react-router';
import Search from '../../Shared/Search/Search';
import Filter from '../../Shared/Filter/Filter';
import Help from '../../Shared/Help/Help';


const ListedPropertiesContainer = () => {
    const properties = useLoaderData();
    return (
      <div className="w-[95%] lg:w-9/12 mx-auto my-5 lg:my-30 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="mt-10 lg:hidden">
            <Search />
          </section>
          <section className="md:mt-10 lg:hidden">
            <Filter />
          </section>
          {properties.length === 0 ? (
            <h1 className="text-3xl font-bold text-center py-20 col-span-2">
              No Listed Properties Found!
            </h1>
          ) : (
            <>
              {properties.map((property) => (
                <ListedPropertyCard key={property._id} property={property} />
              ))}
            </>
          )}
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

export default ListedPropertiesContainer;