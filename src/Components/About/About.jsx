import { FaShieldHalved } from "react-icons/fa6";
import { SiCircuitverse, SiDecentraland } from "react-icons/si";
import { TbHomeSpark } from "react-icons/tb";
import { Link } from "react-router";
import house from "../../assets/house5.jpg";
import meet from "../../assets/house6.jpg";
import logo from "../../assets/logo-first.svg";

const About = () => {
  return (
    <div className="w-[95%] lg:w-9/12 flex flex-col-reverse md:flex-row mx-auto my-30 gap-10 items-center">
      <div className="flex-1 flex flex-col gap-3">
        <img className="rounded-2xl h-80 lg:h-70 object-cover" src={meet} alt="" />
        <img className="rounded-2xl h-80 lg:h-70 object-cover" src={house} alt="" />
      </div>
      <div className="flex-1 md:pr-10 pr-0">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <figure>
            <img src={logo} className="h-5" alt="" />
          </figure>
          <p className="text-secondary-focus font-semibold">About Livora</p>
        </div>
        <h2 className="text-[30px] md:text-[40px] lg:text-[50px] text-primary font-bold mt-1 text-center md:text-left">
          The Leading Real Estate
          <br />
          About Marketplace.
        </h2>
        <p className="text-secondary-content mt-5 mb-7 text-center md:text-left">
          Livora is more than just a property platform — it's where dreams meet
          design. We make finding, exploring, and owning your perfect space
          effortless and inspiring. Every listing, every feature, and every
          detail is built to help you live better.
        </p>
        <div className="flex justify-between">
          <ul className="flex flex-col gap-3 items-center md:items-start">
            <li className="flex gap-2 items-center font-semibold text-secondary-focus">
              <span className=" bg-base-200 text-secondary p-2 rounded-full text-2xl text-[25px]">
                <TbHomeSpark />
              </span>
              Smart Home Design
            </li>
            <li className="flex gap-2 items-center font-semibold text-secondary-focus">
              <span className=" bg-base-200 text-secondary p-2 rounded-full text-2xl text-[25px]">
                <SiCircuitverse />
              </span>
              Exceptional Lifestyle
            </li>
          </ul>
          <ul className="flex flex-col gap-3 items-center md:items-start">
            <li className="flex gap-2 items-center font-semibold text-secondary-focus">
              <span className=" bg-base-200 text-secondary p-2 rounded-full text-2xl text-[25px]">
                <SiDecentraland />
              </span>
              Beautiful Scene Around
            </li>
            <li className="flex gap-2 items-center font-semibold text-secondary-focus">
              <span className=" bg-base-200 text-secondary p-2 rounded-full text-2xl text-[25px]">
                <FaShieldHalved />
              </span>
              Complete 24/7 Security
            </li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-start">
          <Link
            to={"/authentication/login"}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer mt-10 inline-block"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
