import { Link } from "react-router";

const FeaturedPropertiesSlide = ({ property }) => {
  const { _id, category, image, name, location, description, costing } =
    property;
  return (
    <div className="bg-base-100 my-15 rounded-xl flex flex-col shadow-lg transition-shadow duration-300">
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
        <h2 className="text-[22px] font-semibold line-clamp-1">{name}</h2>
        <p className="text-secondary font-semibold line-clamp-1">{location}</p>
        <p className="text-secondary-content my-5 line-clamp-1">
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

export default FeaturedPropertiesSlide;
