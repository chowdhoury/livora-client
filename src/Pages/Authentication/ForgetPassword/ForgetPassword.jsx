import React from 'react';
import { LuLogIn, LuPhoneCall } from "react-icons/lu";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router";
import house from "../../../assets/house6.jpg";
import logo from "../../../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { RiResetLeftLine } from 'react-icons/ri';

const ForgetPassword = () => {
    return (
      <div className="relative">
        <img src={house} className="min-h-screen w-full -mb-40" alt="" />
        <div className="flex flex-col justify-center items-center text-center text-white absolute z-10 w-full h-full top-0 left-0 bg-[#2F3D7E]/60">
          <div className="max-w-3xl px-10 bg-[#F6F8FF]/70 py-7 rounded-2xl -mt-15">
            <figure className="flex justify-center">
              <img src={logo} className="h-5" alt="" />
            </figure>
            <h2 className="text-[50px] text-primary font-bold text-center leading-tight">
              Reset Password
            </h2>
            <form action="">
              <fieldset class="fieldset">
                <label class="label text-[#333333]">Email</label>
                <input
                  type="email"
                  class="input min-w-full text-primary"
                  placeholder="Email"
                />
                <Link
                  to={"/authentication/login"}
                  className="text-white font-semibold bg-secondary py-2.5 rounded-sm px-[26px] hover:bg-primary duration-400 cursor-pointer mt-5 text-center inline-block"
                >
                  <span className="flex gap-2 items-center justify-center text-[16px]">
                    <span>
                      <RiResetLeftLine />
                    </span>
                    Reset
                  </span>
                </Link>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ForgetPassword;