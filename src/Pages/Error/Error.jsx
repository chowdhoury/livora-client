import React from 'react';
import error from '../../assets/error.svg';
import { Link } from 'react-router';

const Error = () => {
    return (
      <div className="flex h-screen w-screen items-center justify-center flex-col gap-10">
        <img src={error} alt="" />
        <h1 className="font-black text-primary text-3xl text-center md:text-start mb-5 md:mb-0 md:text-[40px] ">
          Oops! Sorry, We Could Not Find the Page
        </h1>
          <Link
            to={"/"}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer text-center inline-block"
          >
            Back to Home
          </Link>
      </div>
    );
};

export default Error;