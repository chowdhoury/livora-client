import React, { useContext } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { RiResetLeftLine } from "react-icons/ri";
import house from "../../assets/house6.jpg";
import logo from "../../assets/logo.svg";

const PasswordReset = () => {
  const { forgetPassword } = useContext(AuthContext);
  const handleForgetPassword = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;

    try {
      await forgetPassword(email);
      toast.success(`Password reset email sent to ${email}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative">
      <img src={house} className="min-h-screen w-full -mb-40" alt="" />
      <div className="flex flex-col justify-center items-center text-center text-white absolute z-10 w-full h-full top-0 left-0 bg-[#2F3D7E]/60">
        <div className="max-w-3xl px-10 bg-[#F6F8FF]/70 py-7 rounded-2xl -mt-15">
          <figure className="flex justify-center">
            <img src={logo} className="h-5" alt="" />
          </figure>
          <h2 className="text-[50px] text-primary font-bold text-center leading-tight">
            Reset Password
          </h2>
          <form onSubmit={handleForgetPassword}>
            <fieldset className="fieldset">
              <label className="label text-[#333333]">Email</label>
              <input
                type="email"
                className="input min-w-full text-primary"
                placeholder="Email"
                name="email"
                required
              />
              <button className="text-white font-semibold bg-secondary py-2.5 rounded-sm px-[26px] hover:bg-primary duration-400 cursor-pointer mt-5 text-center inline-block">
                <span className="flex gap-2 items-center justify-center text-[16px]">
                  <span>
                    <RiResetLeftLine />
                  </span>
                  Reset
                </span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
