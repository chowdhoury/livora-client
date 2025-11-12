import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router";

const Filter = () => {
  return (
    <div className="bg-base-200 rounded-2xl p-10">
      <h1 className="text-[22px] text-secondary-focus font-bold mb-5">
        Important
      </h1>
      <p className=" flex items-center gap-3 text-secondary-content">
        <span className="text-[18px]">
          <FaLocationDot />
        </span>
        Location
      </p>
      <hr className="text-secondary-content opacity-50 my-3" />
      <p className=" flex items-center gap-3 text-secondary-content">
        <span className="text-[18px]">
          <MdCategory />
        </span>
        Category
      </p>
      <hr className="text-secondary-content opacity-50 my-3" />
      <p className=" flex items-center gap-3 text-secondary-content">
        <span className="text-[18px]">
          <IoMdPricetag />
        </span>
        Price
      </p>
      <hr className="text-secondary-content opacity-50 my-3" />
      <p className=" flex items-center gap-3 text-secondary-content">
        <span className="text-[18px]">
          <FaRegCalendarAlt />
        </span>
        Posted
      </p>
    </div>
  );
};

export default Filter;
