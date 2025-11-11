import React from 'react';
import logo from "../../../assets/logo-white.svg";
import { Link } from 'react-router';
import { LuPhoneCall } from 'react-icons/lu';

const Help = () => {
    return (
      <div className="relative">
        <div className="flex flex-col justify-center items-center text-center text-white absolute z-50 w-full h-full top-0 left-0 bg-[#2F3D7E]/60 rounded-2xl">
          <div className="max-w-3xl px-4">
            <figure className="flex justify-center mb-5">
              <img src={logo} className="h-5" alt="" />
            </figure>
            <h1 className="font-extrabold lg:text-[28px] md:text-[28px] text-[28px] leading-tight">
              Need Help?
              <br />
              Talk to Our Expert.
            </h1>
            <Link
              to={"/authentication/login"}
              className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer mt-5 text-center inline-block"
            >
              <span className='flex gap-2 items-center'>
                <span>
                  <LuPhoneCall />
                </span>
                +0123 456 7890
              </span>
            </Link>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/gjhDBv1p/house8.jpg"
          className="rounded-2xl w-full"
          alt=""
        />
      </div>
    );
};

export default Help;