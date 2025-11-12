import { GrUpdate } from "react-icons/gr";
import logo from "../../../assets/logo.svg";

const Update = ({ handleOpenModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update logic here
  };

  return (
    <div
      className="flex flex-col justify-center items-center text-center text-white fixed z-30 w-full h-full top-0 left-0 bg-[#2F3D7E]/80 overflow-y-auto py-4"
      onClick={() => handleOpenModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl mx-4 md:mx-8 px-4 md:px-10 bg-[#F6F8FF]/70 py-4 md:py-7 rounded-2xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto my-auto"
      >
        <figure className="flex justify-center">
          <img src={logo} className="h-5" alt="Logo" />
        </figure>

        <h2 className="text-3xl md:text-[50px] text-primary font-bold text-center leading-tight mb-2 md:mb-4">
          Update Properties
        </h2>

        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset flex flex-col md:grid md:grid-cols-2 text-start gap-2 md:gap-4">
            <div>
              <label className="label text-[#333333]">User Name</label>
              <input
                type="text"
                className="input min-w-full text-primary"
                placeholder="Your Name"
              />

              <label className="label text-[#333333] mt-2">Property Name</label>
              <input
                type="text"
                className="input min-w-full text-primary"
                placeholder="Golden Villa"
              />

              <label className="label text-[#333333] mt-2">Category</label>
              <select className="input min-w-full text-primary" defaultValue="">
                <option value="" disabled>
                  Select Category
                </option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
              </select>

              <label className="label text-[#333333] mt-2">Photo URL</label>
              <input
                type="url"
                className="input min-w-full text-primary"
                placeholder="https://image.com"
              />
            </div>

            <div>
              <label className="label text-[#333333]">Email</label>
              <input
                type="email"
                className="input min-w-full text-primary"
                placeholder="example@abc.com"
              />

              <label className="label text-[#333333] mt-2">
                Property Location
              </label>
              <input
                type="text"
                className="input min-w-full text-primary"
                placeholder="New York, USA"
              />

              <label className="label text-[#333333] mt-2">Costings</label>
              <input
                type="number"
                className="input min-w-full text-primary"
                placeholder="50000"
              />

              <label className="label text-[#333333] mt-2">
                Property Description
              </label>
              <textarea
                name=""
                className="bg-white rounded-sm text-primary p-2.5 w-full resize-none"
                rows={1}
                placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur voluptatum rem necessita tibus corrupti officia?"
                id=""
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white font-semibold bg-secondary py-2.5 rounded-sm px-4 md:px-[26px] hover:bg-primary duration-400 cursor-pointer col-span-1 md:col-span-2 mt-3 md:mt-5"
            >
              <span className="flex gap-2 items-center justify-center text-[16px]">
                <GrUpdate />
                Update
              </span>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Update;
