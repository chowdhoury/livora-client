import { RiResetLeftLine } from "react-icons/ri";
import { Link } from "react-router";
import house from "../../assets/house6.jpg";
import logo from "../../assets/logo.svg";

const AddProperties = () => {
  return (
    <div className="relative">
      <img
        src={house}
        className="min-h-[1200px] md:min-h-[800px] lg:min-h-screen w-full -mb-40"
        alt=""
      />
      <div className="flex flex-col justify-center items-center text-center text-white absolute z-10 w-full h-full top-0 left-0 bg-[#2F3D7E]/60">
        <div className="max-w-3xl px-10 bg-[#F6F8FF]/70 py-7 rounded-2xl -mt-15">
          <figure className="flex justify-center">
            <img src={logo} className="h-5" alt="" />
          </figure>
          <h2 className="text-[50px] text-primary font-bold text-center leading-tight">
            List Properties
          </h2>
          <form action="">
            <fieldset class="fieldset flex flex-col md:grid  md:grid-cols-2 text-start">
              <div>
                <label class="label text-[#333333]">User Name</label>
                <input
                  type="text"
                  class="input min-w-full text-primary"
                  placeholder="Your Name"
                />
                <label class="label text-[#333333] mt-2">Property Name</label>
                <input
                  type="text"
                  class="input min-w-full text-primary"
                  placeholder="Golden Villa"
                />
                <label className="label text-[#333333] mt-2">Category</label>
                <select
                  className="input min-w-full text-primary"
                  defaultValue=""
                  disabled={false}
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="rent">Rent</option>
                  <option value="sale">Sale</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
                {/* <label class="label text-[#333333]">Costings</label>
                <input
                  type="number"
                  class="input min-w-full text-primary"
                  placeholder="50000"
                /> */}
                <label class="label text-[#333333] mt-2">Photo URL</label>
                <input
                  type="url"
                  class="input min-w-full text-primary"
                  placeholder="https://image.com"
                />
              </div>
              <div className="">
                <label class="label text-[#333333]">Email</label>
                <input
                  type="email"
                  class="input min-w-full text-primary"
                  placeholder="example@abc.com"
                />

                <label class="label text-[#333333] mt-2">
                  Property Location
                </label>
                <input
                  type="text"
                  class="input min-w-full text-primary"
                  placeholder="New York, USA"
                />
                {/* <label class="label text-[#333333]">Category</label>
                <input
                  type="text"
                  class="input min-w-full text-primary"
                  placeholder="New York, USA"
                /> */}
                <label class="label text-[#333333] mt-2">Costings</label>
                <input
                  type="number"
                  class="input min-w-full text-primary"
                  placeholder="50000"
                />
                <label class="label text-[#333333] mt-2">
                  Property Description
                </label>
                <br />
                <textarea
                  name=""
                  className="bg-white rounded-sm text-primary p-2.5 w-full resize-none"
                  rows={1}
                  placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur voluptatum rem necessita tibus corrupti officia?"
                  id=""
                ></textarea>
              </div>
              <Link
                to={"/authentication/login"}
                className="text-white font-semibold bg-secondary py-2.5 rounded-sm px-[26px] hover:bg-primary duration-400 cursor-pointer col-span-2 mt-5 text-center inline-block"
              >
                <span className="flex gap-2 items-center justify-center text-[16px]">
                  <span>
                    <RiResetLeftLine />
                  </span>
                  Reset
                </span>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperties;
