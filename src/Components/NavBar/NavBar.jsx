import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.svg";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/all-properties">All Properties</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/user/add-property">Add Properties</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/user/my-properties">My Properties</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/user/my-ratings">My Ratings</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/authentication/login">Login</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-secondary duration-400"} to="/authentication/register">Signup</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center p-4  w-8/12 mx-auto h-[60px] border my-4">
      <div>
        <img src={logo} className="h-8" alt="" />
      </div>
      <div>
        <ul className="flex gap-5 font-semibold text-primary">{menuItems}</ul>
      </div>
      <div>
        <CgProfile />
        {/* <button>Signup</button>
        <button>Login</button> */}
      </div>
    </div>
  );
};

export default NavBar;
