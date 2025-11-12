import { CgRename } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router";

const Search = () => {
  return (
    <div className="bg-base-200 rounded-2xl p-10">
      <h1 className="text-[22px] text-secondary-focus font-bold mb-5">
        Seller Info
      </h1>
      <figure className="flex justify-center mb-5">
        <img
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
          alt=""
          className="h-30 rounded-full w-30 object-cover"
        />
      </figure>
      <p className=" flex items-center gap-3 text-primary text-[20px] font-medium">
        <span className="text-[22px]">
          <CgRename />
        </span>
        Md Raihan Chowdhooury
      </p>
      <hr className="text-secondary-content opacity-50 my-3" />
      <p className=" flex items-center gap-3 text-secondary-content">
        <span className="text-[18px]">
          <MdOutlineAlternateEmail />
        </span>
        mdr8077@gmail.com
      </p>
    </div>
  );
};

export default Search;
