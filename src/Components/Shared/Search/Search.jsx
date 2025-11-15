import React from 'react';
import { Link } from 'react-router';

const Search = () => {
    return (
      <div className="bg-base-200 rounded-2xl p-10">
        <h1 className="text-[22px] text-secondary-focus font-bold mb-5">
          Search Properties
        </h1>
        <form>
          <label className="input w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              className="focus:outline-none"
            />
          </label>
          <Link
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer mt-5 w-full text-center inline-block"
          >
            Search
          </Link>
        </form>
      </div>
    );
};

export default Search;