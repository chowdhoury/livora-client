import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../../../Auth/AuthContext/AuthContext";

const PropertyCard = ({ rating }) => {
  const {user}=useContext(AuthContext)
  console.log(rating);
  const [property, setProperty] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/api/properties/${rating?.propertyId}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        // console.log("All data", data);
      });
  }, [rating.propertyId]);
  const {
    _id,
    category,
    image,
    name,
    price,
  } = property;
  return (
    <div className="bg-base-200 rounded-xl flex flex-col shadow-lg transition-shadow duration-300 h-fit">
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
          <p className="text-secondary font-semibold">{user.displayName}</p>
          <p className="text-secondary-content ">{rating.createdAt.split('T')[0]}</p>
        </div>
        <div className="my-2 ">5Star</div>
        <p className="text-secondary-contentline-clamp-2">{rating.description}</p>

        <hr className="text-secondary-content opacity-50" />
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-[22px] font-medium ">${price}</h2>
          <Link
            to={`/properties/${_id}`}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
