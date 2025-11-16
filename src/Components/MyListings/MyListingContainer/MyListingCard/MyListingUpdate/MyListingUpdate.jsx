import React, { use, useContext } from 'react';
import logo from '../../../../../assets/logo.svg'
import { toast } from "react-toastify";
import { GrUpdate } from "react-icons/gr";
import AuthContext from '../../../../../Auth/AuthContext/AuthContext';

const MyListingUpdate = ({ handleOpenModal, property, setRefresh, refresh }) => {
  const {user}=useContext(AuthContext);
      const {
    _id,
    category,
    image,
    name,
    location,
    costing,
    sellerName,
    description,
  } = property;
  // console.log(property);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedName = form.name.value;
    const updatedCategory = form.category.value;
    const updatedImage = form.image.value;
    const updatedLocation = form.location.value;
    const updatedPrice = form.price.value;
    const updatedDescription = form.description.value;
    const updatedProperty = {
      name: updatedName,
      category: updatedCategory,
      image: updatedImage,
      location: updatedLocation,
      costing: updatedPrice,
      description: updatedDescription,
    };
    fetch(`${import.meta.env.VITE_api_base_url}/api/properties/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        setRefresh(!refresh);
        // console.log(data);
        handleOpenModal(false);
        toast.success("Property updated successfully!");
      })
      .catch((err) => {
        // console.error(err);
        toast.error("Failed to update property.");
      });
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
                defaultValue={sellerName}
                readOnly
              />

              <label className="label text-[#333333] mt-2">Property Name</label>
              <input
                type="text"
                className="input min-w-full text-primary"
                placeholder="Golden Villa"
                defaultValue={name}
                name="name"
              />

              <label className="label text-[#333333] mt-2">Category</label>
              <select
                className="input min-w-full text-primary"
                defaultValue={category}
                name="category"
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
                defaultValue={image}
                name="image"
              />
            </div>

            <div>
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
                defaultValue={location}
                name="location"
              />

              <label className="label text-[#333333] mt-2">Costings</label>
              <input
                type="number"
                className="input min-w-full text-primary"
                placeholder="50000"
                defaultValue={costing}
                name="price"
              />

              <label className="label text-[#333333] mt-2">
                Property Description
              </label>
              <textarea
                className="bg-base-100 rounded-sm text-primary p-2.5 w-full resize-none"
                rows={1}
                placeholder="Property Description"
                id=""
                name="description"
                defaultValue={description}
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

export default MyListingUpdate;