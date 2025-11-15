import { FaCheck } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../../assets/logo-first.svg";
import meet from "../../../assets/meet.avif";
import house from "../../../assets/modern.jpg";

const WhyUs = () => {
  return (
    <div className="w-[95%] lg:w-9/12 flex flex-col md:flex-row mx-auto my-30 gap-10 items-center">
      <div className="flex-1 md:pr-10 pr-0">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <figure>
            <img src={logo} className="h-5" alt="" />
          </figure>
          <p className="text-secondary-focus font-semibold">Why CHoose Us</p>
        </div>
        <h2 className="text-[30px] md:text-[40px] lg:text-[50px] text-primary font-bold mt-1 text-center md:text-left">
          Let't Find the Right
          <br />
          Selling Options for You
        </h2>
        <p className="text-secondary-content mt-5 mb-2 text-center md:text-left">
          Experience excellence with a team dedicated to your success. We
          combine innovation, precision, and passion to deliver solutions that
          truly make a difference. Our commitment to quality, attention to
          detail, and customer satisfaction set us apart — ensuring every
          project is handled with care and expertise.
        </p>
        <ul className="flex flex-col gap-2 items-center md:items-start">
          <li className="flex gap-2 items-center font-semibold text-secondary-focus">
            <span className=" bg-base-200 text-secondary p-1 rounded-full text-2xl text-[14px]">
              <FaCheck />
            </span>
            Find Excellent Deals
          </li>
          <li className="flex gap-2 items-center font-semibold text-secondary-focus">
            <span className=" bg-base-200 text-secondary p-1 rounded-full text-2xl text-[14px]">
              <FaCheck />
            </span>
            Friendly Host & Fast Support
          </li>
          <li className="flex gap-2 items-center font-semibold text-secondary-focus">
            <span className=" bg-base-200 text-secondary p-1 rounded-full text-2xl text-[14px]">
              <FaCheck />
            </span>
            List Your Own Property
          </li>
        </ul>
        <div className="flex justify-center md:justify-start">
          <Link
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer mt-10 inline-block"
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="flex-1 flex gap-3">
        <img className="rounded-2xl w-[48%] object-cover" src={meet} alt="" />
        <img className="rounded-2xl w-[48%] object-cover" src={house} alt="" />
      </div>
    </div>
  );
};

export default WhyUs;
