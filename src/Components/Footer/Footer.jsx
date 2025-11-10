import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarker,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import logo from "../../assets/logo-white.svg";

const Footer = () => {
  return (
    <div className="bg-primary relative mt-20">
      <div className="flex bg-base-200 w-9/12 mx-auto px-10 py-5 rounded-2xl items-center absolute left-1/2  -translate-x-1/2 -translate-y-1/2">
        <div className="flex-1">
          <h1 className="font-black text-primary text-[40px]">
            Subscribe Our Newsletter
          </h1>
          <p className="text-secondary-content">
            Duis pulvinar metus elit, ut aliquam est sollicitudin finibus.
          </p>
        </div>
        <div className="flex-1 flex">
          <input
            className="bg-white w-full px-4 py-4 h-12 rounded-l-sm focus:outline-none"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <button className="bg-secondary text-white px-6 py-4 h-12 rounded-r-sm hover:bg-primary duration-400">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex w-9/12 mx-auto justify-between pt-30 pb-16 gap-15 text-white">
        <div className="flex-1 flex flex-col gap-5">
          <figure>
            <img src={logo} className="h-8" alt="" />
          </figure>
          <p>
            Livora brings innovation and elegance together, crafting solutions
            that are both powerful and intuitive.
          </p>
          <div className="flex gap-3">
            <span className="bg-secondary p-3 duration-400 text-white hover:bg-white hover:text-primary cursor-pointer rounded-sm">
              <FaFacebookF />
            </span>
            <span className="bg-secondary p-3 duration-400 text-white hover:bg-white hover:text-primary cursor-pointer rounded-sm">
              <FaInstagram />
            </span>
            <span className="bg-secondary p-3 duration-400 text-white hover:bg-white hover:text-primary cursor-pointer rounded-sm">
              <FaXTwitter />
            </span>
            <span className="bg-secondary p-3 duration-400 text-white hover:bg-white hover:text-primary cursor-pointer rounded-sm">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-secondary font-bold text-xl">Legal</h2>
          <a className="hover:text-secondary font-medium duration-400" href="">
            Terms & Conditions
          </a>
          <a className="hover:text-secondary font-medium duration-400" href="">
            Privacy Policy
          </a>
          <a className="hover:text-secondary font-medium duration-400" href="">
            Cookie Policy
          </a>
          <a className="hover:text-secondary font-medium duration-400" href="">
            Refund Policy
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-secondary font-bold text-xl">Support</h2>
          <a className="hover:text-secondary font-medium duration-400" href="">
            Help Center
          </a>
          <a className="hover:text-secondary font-medium duration-400" href="">
            FAQs
          </a>
          <a className="hover:text-secondary font-medium duration-400" href="">
            Community
          </a>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-secondary font-bold text-xl">Contact</h2>
          <span className="flex items-start gap-2 ">
            <FaMapMarker />
            <span>15 Orchard View, #09-03, Singapore 238890</span>
          </span>
          <span className="flex items-center gap-2 ">
            <FaPhone />
            <span>+0 12345 67890</span>
          </span>
          <span className="flex items-center gap-2 ">
            <IoIosMail />
            <span>info@livora.com</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
