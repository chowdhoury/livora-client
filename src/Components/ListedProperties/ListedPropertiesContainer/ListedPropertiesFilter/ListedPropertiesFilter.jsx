import React from 'react';
import { Link } from "react-router";

const ListedPropertiesFilter = ({ handleFilter }) => {
  return (
    <div className="bg-base-200 rounded-2xl p-10">
      <h1 className="text-[22px] text-secondary-focus font-bold mb-5">
        Apply Filters
      </h1>
      <form onSubmit={handleFilter}>
        <select defaultValue="newest" className="select w-full" name='filter'>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="highest">High to Low</option>
          <option value="lowest">Low to High</option>
        </select>
        <button className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer mt-5 w-full text-center inline-block">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ListedPropertiesFilter;