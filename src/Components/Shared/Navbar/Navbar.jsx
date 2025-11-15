import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../Auth/AuthContext/AuthContext";
import logo from "../../../assets/logo.svg";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const { displayName, photoURL, email } = user || {};
  const dropdownRef = useRef(null);

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(`Error logging out: ${error.message}`);
      });
  };

  const closeDrawer = () => {
    const drawerToggle = document.getElementById("my-drawer-5");
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  const menuItems = (
    <>
      <li>
        <NavLink
          className="hover:text-secondary duration-400"
          to="/"
          onClick={closeDrawer}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className="hover:text-secondary duration-400"
          to="/listed-properties"
          onClick={closeDrawer}
        >
          Listed Properties
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              className="hover:text-secondary duration-400"
              to="/user/my-listings"
              onClick={closeDrawer}
            >
              My Listings
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:text-secondary duration-400"
              to="/user/my-feedbacks"
              onClick={closeDrawer}
            >
              My Feedback
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          className="hover:text-secondary duration-400"
          to="/user/list-property"
          onClick={closeDrawer}
        >
          List Property
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* Navbar */}
        <div className="flex justify-between items-center py-4 lg:w-9/12 w-full pr-5 pl-2 md:px-5 lg:px-0 mx-auto h-[60px] my-4">
          {/* Left side */}
          <div className="flex gap-2 items-center">
            {/* Mobile hamburger */}
            <label
              htmlFor="my-drawer-5"
              className="lg:hidden swap swap-rotate cursor-pointer"
            >
              {/* open icon */}
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

            {/* Logo */}
            <img src={logo} className="h-8" alt="Logo" />
          </div>

          {/* Desktop menu */}
          <div className="lg:block hidden">
            <ul className="flex gap-5 font-semibold text-primary">
              {menuItems}
            </ul>
          </div>

          {/* Right side (Profile or Login/Register) */}
          <div className="relative flex items-center gap-5" ref={dropdownRef}>
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                className="theme-controller"
                checked={isDarkMode}
                onChange={handleThemeToggle}
              />

              {/* SUN ICON */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* MOON ICON */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {user ? (
              <div>
                <img
                  src={
                    photoURL ||
                    "https://i.postimg.cc/CKF63PxH/default-avatar-photo-placeholder-icon-grey-vector-38594397.avif"
                  }
                  className="h-13 w-13 rounded-full object-cover cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  alt="Profile"
                />

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-base-200 w-60 rounded-md shadow-lg z-50 p-4 flex flex-col">
                    <p className="font-semibold text-secondary-content">
                      {displayName}
                    </p>
                    <p className="text-sm text-primary mt-1">{email}</p>

                    <Link
                      onClick={handleLogOut}
                      className="text-white font-semibold bg-secondary py-3 rounded-md px-4 hover:bg-primary duration-300 text-center w-full mt-5"
                    >
                      Sign Out
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="items-center gap-5 flex">
                <Link
                  to={"/authentication/sign-in"}
                  className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer"
                >
                  Sign In
                </Link>

                <Link
                  to={"/authentication/sign-up"}
                  className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-7 hidden md:block hover:bg-primary duration-400 cursor-pointer"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-5"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 min-h-full w-80 p-4 font-semibold text-primary">
          {menuItems}

          {/* Mobile-only Signup */}
          {!user && (
            <li className="mt-4 block md:hidden">
              <Link
                to={"/authentication/register"}
                className="text-white font-semibold bg-secondary hover:bg-primary duration-400 py-3 rounded-sm text-center"
                onClick={closeDrawer}
              >
                Signup
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );

};

export default Navbar;
