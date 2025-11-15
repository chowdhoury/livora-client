import { Link } from "react-router";

const ListedPropertyCard = ({ property }) => {
  const { _id, category, image, name, sellerName, location, description, costing } =
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
          <p className="text-secondary font-semibold">{sellerName}</p>
          <p className="text-primary font-medium ">{location}</p>
        </div>
        <p className="text-secondary-content my-5 line-clamp-2">
          {description}
        </p>

        <hr className="text-secondary-content opacity-50" />
        <div className="flex items-center justify-between mt-5">
          <h2 className="text-[22px] font-medium ">${costing}</h2>
          <Link
            to={`/listed-properties/${_id}`}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedPropertyCard;
