import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeDrawer = () => {
    const drawerToggle = document.getElementById("my-drawer-5");
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = (
    <>
      <li>
        <NavLink
          className={"hover:text-secondary duration-400"}
          to="/"
          onClick={closeDrawer}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"hover:text-secondary duration-400"}
          to="/all-properties"
          onClick={closeDrawer}
        >
          All Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"hover:text-secondary duration-400"}
          to="/user/add-property"
          onClick={closeDrawer}
        >
          Add Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"hover:text-secondary duration-400"}
          to="/user/my-properties"
          onClick={closeDrawer}
        >
          My Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          className={"hover:text-secondary duration-400"}
          to="/user/my-ratings"
          onClick={closeDrawer}
        >
          My Ratings
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar content */}
        <div className="flex justify-between items-center py-4 lg:w-9/12 w-full pr-5 pl-2 md:px-5 lg:px-0 mx-auto h-[60px] my-4">
          <div className="flex gap-2">
            {/* Hamburger menu - only visible on small screens */}
            <label
              htmlFor="my-drawer-5"
              className="lg:hidden swap swap-rotate cursor-pointer"
            >
              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <img src={logo} className="h-8" alt="" />
          </div>
          <div className="lg:block hidden">
            <ul className="flex gap-5 font-semibold text-primary">
              {menuItems}
            </ul>
          </div>
          <div className="relative" ref={dropdownRef}>
            {/* <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                className="h-13 rounded-full w-13 object-cover cursor-pointer"
                onClick={toggleDropdown}
                alt="Profile"
              />

              {isDropdownOpen && (
                <ul className="absolute right-0 top-14 z-10 menu w-52 rounded-box bg-base-100 shadow-lg font-semibold text-primary">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                  <li className="mt-4">
                    <Link
                      to={"/authentication/register"}
                      className="text-white font-semibold bg-secondary hover:bg-primary duration-400 py-3 rounded-sm text-center"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
            </div> */}
            <div className="items-center gap-5 flex">
              {/* <CgProfile /> */}
              <Link
                to={"/authentication/login"}
                className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer"
              >
                Login
              </Link>
              <Link
                to={"/authentication/register"}
                className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-7 hidden md:block hover:bg-primary duration-400 cursor-pointer"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-5"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 font-semibold text-primary">
          {menuItems}
          {/* Mobile-only signup button in drawer */}
          <li className="mt-4 block md:hidden">
            <Link
              to={"/authentication/register"}
              className="text-white font-semibold bg-secondary hover:bg-primary duration-400 py-3 rounded-sm text-center"
              onClick={closeDrawer}
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
