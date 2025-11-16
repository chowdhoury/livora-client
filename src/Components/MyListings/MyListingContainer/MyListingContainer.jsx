import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../Auth/AuthContext/AuthContext';
import Search from '../../Shared/Search/Search';
import Filter from '../../Shared/Filter/Filter';
import Help from '../../Shared/Help/Help';
import MyListingCard from './MyListingCard/MyListingCard';
import LoaderElement from '../../Shared/LoaderElement/LoaderElement';

const MyListingContainer = () => {
  const [elementLoading, setElementLoading] = useState(false);
    const [properties, setProperties] = useState([]);
    const { user } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false);
  useEffect(() => {
      setElementLoading(true);
      fetch(
        `${import.meta.env.VITE_api_base_url}/api/properties?email=${
          user?.email
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setProperties(data);
          setElementLoading(false);
        });
    }, [user?.email, refresh]);
    return (
      <div className="w-[95%] lg:w-9/12 mx-auto my-5 lg:my-30 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <section className="mt-10 lg:hidden">
            <Search />
          </section>
          <section className="md:mt-10 lg:hidden">
            <Filter />
          </section> */}
          {elementLoading ? (
            <div className="col-span-2 flex justify-center items-center">
              <LoaderElement />
            </div>
          ) : properties.length === 0 ? (
            <h1 className="text-3xl font-bold text-center col-span-2">
              You haven't any listed properties yet.
            </h1>
          ) : (
            properties.map((property) => (
              <MyListingCard
                key={property._id}
                property={property}
                setRefresh={setRefresh}
                refresh={refresh}
              ></MyListingCard>
            ))
          )}
          {/* {properties.length === 0 ? (
            <h1 className="text-3xl font-bold text-center col-span-2">
              You haven't any listed properties yet.
            </h1>
          ) : null}
          {properties.map((property) => (
            <MyListingCard
              key={property._id}
              property={property}
              setRefresh={setRefresh}
              refresh={refresh}
            ></MyListingCard>
          ))} */}
        </div>
        <div className="flex flex-col ml-0 lg:ml-5">
          <div className="hidden lg:block">
            {/* <Search />
            <section className="mt-10">
              <Filter />
            </section> */}
            <section className="">
              <Help />
            </section>
          </div>
        </div>
      </div>
    );
};

export default MyListingContainer;