import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router";

const PropertyCard = ({ property }) => {
  const { _id, category, image, name, location, createdAt, description, price } =
    property;
  return (
    <div className="bg-base-200 rounded-xl flex flex-col shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          className="rounded-t-xl object-cover h-[350px]"
          alt=""
        />
        <p className="bg-primary w-fit text-white font-medium px-3 py-2 rounded-sm absolute top-5 left-5">
          {category}
        </p>
      </div>
      <div className="p-7">
        <h2 className="text-[22px] font-semibold ">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-secondary-content ">{location}</p>
          <p className="text-secondary font-semibold">
            {createdAt.split("T")[0]}
          </p>
        </div>
        {/* <p className="text-secondary-content mt-5 mb-1 line-clamp-2">
          {description}
        </p> */}

        {/* <hr className="text-secondary-content opacity-50" /> */}
        <div className="flex items-center justify-between my-3">
          <h2 className="text-[22px] font-medium ">${price}</h2>
          <Link
            to={`/properties/${_id}`}
            className="text-primary font-semibold bg-base-200 border-2 hover:text-white border-primary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer"
          >
            View Property
          </Link>
        </div>
        <hr className="text-secondary-content opacity-50" />
        <div className="flex items-center justify-between mt-5">
          <Link
            to={`/properties/${_id}`}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer flex items-center gap-2"
          >
            <span className="text-[20px]">
              <FaRegEdit />
            </span>
            <span>Update</span>
          </Link>
          <Link
            to={`/properties/${_id}`}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-red-600 duration-400 cursor-pointer flex items-center gap-2"
          >
            <span className="text-[20px] font-bold">
              <RiDeleteBinLine />
            </span>
            <span>Delete</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
