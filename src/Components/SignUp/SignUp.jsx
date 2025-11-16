import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import house from "../../assets/house6.jpg";
import logo from "../../assets/logo.svg";
import AuthContext from "../../Auth/AuthContext/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createUserWithEmail, updateUserProfile, googleSignIn, setLoading } =
    useContext(AuthContext);

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
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
      await createUserWithEmail(email, password);

      try {
        await updateUserProfile({
          displayName: name,
          photoURL,
        });
      } catch {}

      form.reset();
      toast.success("Sign Up Successful");
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();

      toast.success("Sign In Successful");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative">
      <title>Sign Up</title>
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
            Sign Up
          </h2>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label text-[#333333]">Name</label>
              <input
                type="text"
                className="input min-w-[350px] text-primary"
                placeholder="Name"
                name="name"
                required
              />
              <label className="label text-[#333333]">Email</label>
              <input
                type="email"
                className="input min-w-[350px] text-primary"
                placeholder="Email"
                name="email"
                required
              />
              <label className="label text-[#333333]">Photo URL</label>
              <input
                type="url"
                className="input min-w-[350px] text-primary"
                placeholder="Photo URL"
                name="photoURL"
                required
              />
              <label className="label text-[#333333]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full text-primary z-20"
                  placeholder="Password"
                  name="password"
                  required
                />
                <span
                  className="absolute text-2xl right-3 top-2.5 text-primary cursor-pointer z-30"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </span>
              </div>
              <button className="text-white font-semibold bg-secondary py-2.5 rounded-sm px-[26px] hover:bg-primary duration-400 cursor-pointer mt-5 text-center inline-block">
                <span className="flex gap-2 items-center justify-center text-[16px]">
                  <span>
                    <SiGnuprivacyguard />
                  </span>
                  Sign Up
                </span>
              </button>
            </fieldset>
          </form>
          <p className="flex items-start text-secondary-content font-semibold">
            Already have an Account?{" "}
            <Link
              to={"/authentication/sign-in"}
              className="text-primary hover:text-secondary ml-2 font-semibold underline"
            >
              Sign In
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

export default SignUp;
