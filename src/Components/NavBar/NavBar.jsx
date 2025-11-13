import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.svg";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const { displayName, photoURL, email } = user || {};


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navbar menu links
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
              to="/user/list-property"
              onClick={closeDrawer}
            >
              List Property
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:text-secondary duration-400"
              to="/user/my-properties"
              onClick={closeDrawer}
            >
              My Listings
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:text-secondary duration-400"
              to="/user/my-ratings"
              onClick={closeDrawer}
            >
              My Feedback
            </NavLink>
          </li>
        </>
      )}
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
          <div className="relative" ref={dropdownRef}>
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
                  to={"/authentication/login"}
                  className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer"
                >
                  Login
                </Link>

                <Link
                  to={"/authentication/register"}
                  className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-7 hidden md:block hover:bg-primary duration-400 cursor-pointer"
                >
                  Register
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
          {!user && (<li className="mt-4 block md:hidden">
            <Link
              to={"/authentication/register"}
              className="text-white font-semibold bg-secondary hover:bg-primary duration-400 py-3 rounded-sm text-center"
              onClick={closeDrawer}
            >
              Signup
            </Link>
          </li>)}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
