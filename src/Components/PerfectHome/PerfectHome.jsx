import React from "react";
import logo from "../../assets/logo-first.svg";
import { TbHomeSearch } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { GiHouseKeys } from "react-icons/gi";

const PerfectHome = () => {
  return (
    <div className="bg-base-200 py-30">
      <div className="flex justify-center gap-4">
        <figure>
          <img src={logo} className="h-5" alt="" />
        </figure>
        <p className="text-secondary-focus font-semibold">WELCOME TO LIVORA</p>
      </div>
      <h2 className="text-[50px] text-primary font-bold text-center">
        Find a Perfect Home
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%] lg:w-9/12 mx-auto mt-15">
        <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center text-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
          <span className="text-4xl text-white bg-primary p-5 rounded-full mb-4 inline-block group-hover:bg-secondary">
            <TbHomeSearch />
          </span>
          <h2 className="text-[22px] font-semibold">Find Property</h2>
          <p className="text-secondary-content">
            Find verified listings with detailed insights, high-quality photos,
            and transparent pricing.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center text-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
          <span className="text-4xl text-white bg-primary p-5 rounded-full mb-4 inline-block group-hover:bg-secondary">
            <BsPeople />
          </span>
          <h2 className="text-[22px] font-semibold">Meet Retailer</h2>
          <p className="text-secondary-content">
            Partner with verified retailers to expand your network and grow your
            business.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center text-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
          <span className="text-4xl text-white bg-primary p-5 rounded-full mb-4 inline-block group-hover:bg-secondary">
            <HiOutlineDocumentDuplicate />
          </span>
          <h2 className="text-[22px] font-semibold">Documents</h2>
          <p className="text-secondary-content">
            Easily upload, manage, and access all your property documents in one
            secure place.
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl flex flex-col justify-center items-center text-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
          <span className="text-4xl text-white bg-primary p-5 rounded-full mb-4 inline-block group-hover:bg-secondary">
            <GiHouseKeys />
          </span>
          <h2 className="text-[22px] font-semibold">Take the keys</h2>
          <p className="text-secondary-content">
            Get ready to move in — complete the deal and take the keys to your
            new home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerfectHome;
