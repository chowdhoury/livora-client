import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const closeDrawer = () => {
    const drawerToggle = document.getElementById("my-drawer-5");
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

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
      {/* <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/authentication/login">Login</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/authentication/register">Signup</NavLink>
      </li> */}
    </>
  );
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar content */}
        <div className="flex justify-between items-center py-4 lg:w-9/12 w-full pr-5 pl-2 md:px-5 lg:px-0 mx-auto h-[60px] border my-4">
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
          <div className="items-center gap-5 flex">
            {/* <CgProfile /> */}
            <Link
              to={"/authentication/login"}
              className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px]"
            >
              Login
            </Link>
            <Link
              to={"/authentication/register"}
              className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-7 hidden md:block"
            >
              Signup
            </Link>
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
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
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
