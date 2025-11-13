import { CgRename } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router";

const Search = ({ properties }) => {
  console.log(properties);
  return (
    <div className="bg-base-200 rounded-2xl p-10">
      <h1 className="text-[22px] text-secondary-focus font-bold mb-5">
        Seller Info
      </h1>
      <figure className="flex justify-center mb-5">
        <img
          src={
            properties?.userPhoto
          }
          alt=""
          className="h-30 rounded-full w-30 object-cover"
        />
      </figure>
      <p className=" flex items-center gap-3 text-primary text-[20px] font-medium">
        <span className="text-[22px]">
          <CgRename />
        </span>
        {properties?.userName}
      </p>
      <hr className="text-secondary-content opacity-50 my-3" />
      <p className=" flex items-center gap-3 text-secondary-content">
        <span className="text-[18px]">
          <MdOutlineAlternateEmail />
        </span>
        {properties?.userEmail}
      </p>
    </div>
  );
};

export default Search;
