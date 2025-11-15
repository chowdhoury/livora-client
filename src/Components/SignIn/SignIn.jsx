import React, { useContext, useState } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { LuLogIn } from "react-icons/lu";
import house from "../../assets/house6.jpg";
import logo from "../../assets/logo.svg";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { SignInUser, googleSignIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const errors = [];
    if (password.length < 6) errors.push("At least 6 characters");
    if (!/[A-Z]/.test(password)) errors.push("One uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("One lowercase letter");

    if (errors.length > 0) {
      toast.warning(errors.join(", "));
      return;
    }

    try {
      await SignInUser(email, password);
      form.reset();
      toast.success("Sign In Successful");
      navigate(location.state || "/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Sign In Successful");
      navigate(location.state || "/");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
            Sign In
          </h2>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label text-[#333333]">Email</label>
              <input
                type="email"
                className="input min-w-[350px] text-primary"
                placeholder="Email"
                name="email"
              />
              <label className="label text-[#333333]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full text-primary z-20"
                  placeholder="Password"
                  name="password"
                />
                <span
                  className="absolute text-2xl right-3 top-2.5 text-primary cursor-pointer z-30"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </span>
              </div>
              <div className="flex items-start text-primary hover:text-secondary">
                <Link
                  to={"/authentication/password-reset"}
                  className="link link-hover"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="text-white font-semibold bg-secondary py-2.5 rounded-sm px-[26px] hover:bg-primary duration-400 cursor-pointer mt-5 text-center inline-block">
                <span className="flex gap-2 items-center justify-center text-[16px]">
                  <span>
                    <LuLogIn />
                  </span>
                  Sign In
                </span>
              </button>
            </fieldset>
          </form>
          <p className="flex items-start text-secondary-content font-semibold">
            Don't have an Account?{" "}
            <Link
              to={"/authentication/sign-up"}
              className="text-primary hover:text-secondary ml-2 font-semibold underline"
            >
              Sign Up
            </Link>
          </p>
          <div className="divider text-secondary-content">OR</div>

          <Link
            onClick={handleGoogleSignIn}
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

export default SignIn;
