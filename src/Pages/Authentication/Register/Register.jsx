import { LuLogIn, LuPhoneCall } from "react-icons/lu";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router";
import house from "../../../assets/house6.jpg";
import logo from "../../../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { SiGnuprivacyguard } from "react-icons/si";

const Register = () => {
  return (
    <div className="relative">
      <img
        src={house}
        className="min-h-screen md:min-h-[800px] lg:max-h-screen  w-full -mb-40"
        alt=""
      />
      <div className="flex flex-col justify-center items-center text-center text-white absolute z-10 w-full h-full top-0 left-0 bg-[#2F3D7E]/60">
        <div className="max-w-3xl px-10 bg-[#F6F8FF]/70 py-7 rounded-2xl -mt-15">
          <figure className="flex justify-center">
            <img src={logo} className="h-5" alt="" />
          </figure>
          <h2 className="text-[50px] text-primary font-bold text-center">
            Register
          </h2>
          <form action="">
            <fieldset class="fieldset">
              <label class="label text-[#333333]">Name</label>
              <input
                type="text"
                class="input min-w-[350px] text-primary"
                placeholder="Name"
              />
              <label class="label text-[#333333]">Email</label>
              <input
                type="email"
                class="input min-w-[350px] text-primary"
                placeholder="Email"
              />
              <label class="label text-[#333333]">Photo URL</label>
              <input
                type="url"
                class="input min-w-[350px] text-primary"
                placeholder="Photo URL"
              />
              <label class="label text-[#333333]">Password</label>
              <input
                type="password"
                class="input w-full text-primary"
                placeholder="Password"
              />
              <Link
                to={"/authentication/login"}
                className="text-white font-semibold bg-secondary py-2.5 rounded-sm px-[26px] hover:bg-primary duration-400 cursor-pointer mt-5 text-center inline-block"
              >
                <span className="flex gap-2 items-center justify-center text-[16px]">
                  <span>
                    <SiGnuprivacyguard />
                  </span>
                  Register
                </span>
              </Link>
            </fieldset>
          </form>
          <p className="flex items-start text-secondary-content font-semibold">
            Already have an Account?{" "}
            <Link
              to={"/register"}
              className="text-primary hover:text-secondary ml-2 font-semibold underline"
            >
              Login
            </Link>
          </p>
          <div className="divider text-secondary-content">OR</div>

          <Link
            to={"/authentication/login"}
            className="text-primary bg-transparent font-semibold border-2 primary hover:text-white hover:border-primary py-2.5 rounded-sm px-[26px] hover:bg-primary duration-400 cursor-pointer text-center inline-block justify-center w-full"
          >
            <span className="flex gap-2 items-center justify-center">
              <span>
                <FcGoogle />
              </span>
              Continue with Google
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
