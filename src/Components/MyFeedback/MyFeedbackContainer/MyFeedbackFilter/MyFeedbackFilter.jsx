import React from 'react';
import { Link } from "react-router";

const MyFeedbackFilter = () => {
    return (
      <div className="bg-base-200 rounded-2xl p-10">
        <h1 className="text-[22px] text-secondary-focus font-bold mb-5">
          Apply Filters
        </h1>
        <form>
          <select defaultValue="Pick a color" className="select w-full">
            <option>Default</option>
            <option value="cost-asc">Costing Low to High</option>
            <option value="cost-desc">Costing High to Low</option>
            <option value="date-desc">Listed Newest First</option>
            <option value="date-asc">Listed Oldest First</option>
          </select>
          <Link
            to={"/authentication/login"}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer mt-5 w-full text-center inline-block"
          >
            Apply
          </Link>
        </form>
      </div>
    );
};

export default MyFeedbackFilter;