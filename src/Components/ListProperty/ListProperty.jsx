import { useContext } from "react";
import { CiCircleList } from "react-icons/ci";
import { toast } from "react-toastify";
import house from "../../assets/house6.jpg";
import logo from "../../assets/logo.svg";
import AuthContext from "../../Auth/AuthContext/AuthContext";

const ListProperty = () => {
  const { user } = useContext(AuthContext);
  const handleAddProperty = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const location = form.location.value;
    const costing = form.price.value;
    const description = form.description.value;
    const createdAt = new Date();

    const propertyData = {
      name,
      category,
      image,
      location,
      costing,
      description,
      createdAt,
      sellerEmail: user?.email,
      sellerName: user?.displayName,
      sellerImage: user?.photoURL || "",
    };
    // console.log(propertyData);
    fetch(`${import.meta.env.VITE_api_base_url}/api/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(propertyData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Property added successfully!");
        form.reset();
      })
      .catch((err) => {
        // console.error(err);
        toast.error("Failed to add property.");
      });
  };
  return (
    <div className="relative">
      <title>List Property</title>
      <img
        src={house}
        className="min-h-[1200px] md:min-h-[800px] lg:max-h-screen w-full -mb-40"
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
          <form onSubmit={handleAddProperty}>
            <fieldset className="fieldset flex flex-col md:grid  md:grid-cols-2 text-start">
              <div>
                <label className="label text-[#333333]">User Name</label>
                <input
                  type="text"
                  className="input min-w-full text-primary"
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                  readOnly
                />
                <label className="label text-[#333333] mt-2">
                  Property Name
                </label>
                <input
                  type="text"
                  className="input min-w-full text-primary"
                  placeholder="Golden Villa"
                  name="name"
                  required
                />
                <label className="label text-[#333333] mt-2">Category</label>
                <select
                  className="input min-w-full text-primary"
                  defaultValue=""
                  disabled={false}
                  name="category"
                  required
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
                <label className="label text-[#333333] mt-2">Photo URL</label>
                <input
                  type="url"
                  className="input min-w-full text-primary"
                  placeholder="https://image.com"
                  name="image"
                  required
                />
              </div>
              <div className="">
                <label className="label text-[#333333]">Email</label>
                <input
                  type="email"
                  className="input min-w-full text-primary"
                  placeholder="example@abc.com"
                  defaultValue={user?.email}
                  readOnly
                />

                <label className="label text-[#333333] mt-2">
                  Property Location
                </label>
                <input
                  type="text"
                  className="input min-w-full text-primary"
                  placeholder="New York, USA"
                  name="location"
                  required
                />
                <label className="label text-[#333333] mt-2">Costings</label>
                <input
                  type="number"
                  className="input min-w-full text-primary"
                  placeholder="50000"
                  name="price"
                  required
                />
                <label className="label text-[#333333] mt-2">
                  Property Description
                </label>
                <br />
                <textarea
                  className="bg-base-100 rounded-sm text-primary p-2.5 w-full resize-none"
                  rows={1}
                  placeholder="Describe the property..."
                  id=""
                  name="description"
                  required
                ></textarea>
              </div>
              <button className="text-white font-semibold bg-secondary py-2.5 rounded-sm px-[26px] hover:bg-primary duration-400 cursor-pointer col-span-2 mt-5 text-center inline-block">
                <span className="flex gap-2 items-center justify-center text-[16px]">
                  <span>
                    <CiCircleList />
                  </span>
                  List
                </span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListProperty;
