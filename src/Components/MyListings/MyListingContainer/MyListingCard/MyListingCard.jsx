import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import MyListingUpdate from "./MyListingUpdate/MyListingUpdate";

const MyListingCard = ({ property, setRefresh, refresh }) => {
  const { _id, category, image, name, location, createdAt, costing } = property;
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_api_base_url}/api/properties/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setRefresh(!refresh);
              fetch(`${import.meta.env.VITE_api_base_url}/api/ratings/${_id}`, {
                method: "DELETE",
              }).then((res) => res.json())
                .catch((err) => console.error(err))
                .then((res) => res.json())
                .then((data) => {
                  setRefresh(!refresh);
                });
            } else {
              toast.error("Failed to delete the property");
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-base-200 rounded-xl flex flex-col shadow-lg transition-shadow duration-300 h-fit">
      <section className={openModal ? "block" : "hidden"}>
        <MyListingUpdate
          property={property}
          handleOpenModal={handleOpenModal}
          setRefresh={setRefresh}
          refresh={refresh}
        ></MyListingUpdate>
      </section>
      <div className="relative">
        <img
          src={image}
          className="rounded-t-xl object-cover h-[350px]"
          alt=""
        />
        <p className="bg-primary w-fit text-white font-medium px-3 py-2 rounded-sm absolute top-5 left-5">
          {category}
        </p>
      </div>
      <div className="p-7">
        <h2 className="text-[22px] font-semibold ">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-secondary-content ">{location}</p>
          <p className="text-secondary font-semibold">
            {createdAt.split("T")[0]}
          </p>
        </div>
        {/* <p className="text-secondary-content mt-5 mb-1 line-clamp-2">
          {description}
        </p> */}

        {/* <hr className="text-secondary-content opacity-50" /> */}
        <div className="flex items-center justify-between my-3">
          <h2 className="text-[22px] font-medium ">${costing}</h2>
          <Link
            to={`/listed-properties/${_id}`}
            className="text-primary font-semibold bg-base-200 border-2 hover:text-white border-primary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer"
          >
            View Property
          </Link>
        </div>
        <hr className="text-secondary-content opacity-50" />
        <div className="flex items-center justify-between mt-5">
          <button
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer flex items-center gap-2"
            onClick={() => handleOpenModal(true)}
          >
            <span className="text-[20px]">
              <FaRegEdit />
            </span>
            <span>Update</span>
          </button>
          <Link
            onClick={handleDelete}
            className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-red-600 duration-400 cursor-pointer flex items-center gap-2"
          >
            <span className="text-[20px] font-bold">
              <RiDeleteBinLine />
            </span>
            <span>Delete</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyListingCard;
