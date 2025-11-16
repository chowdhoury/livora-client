import { Rating } from "@smastrom/react-rating";
import { useContext, useEffect, useState } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../../Auth/AuthContext/AuthContext";
import Help from "../../Shared/Help/Help";
import PropertyInfo from "./PropertyInfo/PropertyInfo";
import RatingCard from "./RatingCard/RatingCard";
import SellerInfo from "./SellerInfo/SellerInfo";

const PropertyDetailsContainer = () => {
  const { propertyId } = useParams();
  const { user } = useContext(AuthContext);

  const [rating, setRating] = useState(0);
  const [properties, setProperties] = useState({});
  const [ratingReviews, setRatingReviews] = useState([]);
  const [myRatings, setMyRatings] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyRes = await fetch(
          `${import.meta.env.VITE_api_base_url}/api/properties/${propertyId}`
        );

        const propertyData = await propertyRes.json();
        setProperties(propertyData);

        if (user?.email) {
          const ratingsRes = await fetch(
            `${
              import.meta.env.VITE_api_base_url
            }/api/ratings/property/${propertyId}?email=${
              user.email
            }&type=others`
          );
          const ratingsData = await ratingsRes.json();
          setRatingReviews(ratingsData);

          const myRatingRes = await fetch(
            `${
              import.meta.env.VITE_api_base_url
            }/api/ratings/property/${propertyId}?email=${user.email}&type=my`
          );

          const myRatingData = await myRatingRes.json();

          if (myRatingData && myRatingData.rating) {
            setMyRatings(myRatingData);
            setRating(myRatingData.rating);
          } else {
            setMyRatings(null);
            setRating(0);
          }
        }
      } catch (error) {
      }
    };

    fetchData();
  }, [propertyId, user?.email, refresh]);

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const description = form.description.value;

    if (rating === 0) {
      toast.warning("Please provide a rating!");
      return;
    }

    fetch(`${import.meta.env.VITE_api_base_url}/api/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        description,
        propertyId,
        userEmail: user?.email,
        createdAt: new Date(),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Rating submitted successfully!");
        setRefresh(!refresh);
      })
      .catch((err) => {
        toast.error("Failed to submit rating.");
      });
  };

  return (
    <div className="w-[95%] lg:w-9/12 mx-auto my-5 lg:my-30 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2">
        <title>{properties.name}</title>
        <img
          src={properties.image}
          className="w-full h-[500px] object-cover rounded-2xl"
          alt="property"
        />

        <div className="bg-base-200 rounded-2xl p-10 my-15">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] text-primary font-bold">
            {properties.name}
          </h2>
          <h1 className="text-[22px] text-secondary-focus font-bold mb-1">
            About This Property
          </h1>
          <p className="text-secondary-content">{properties.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:hidden md:grid-cols-2 gap-10">
          <SellerInfo properties={properties} />
          <PropertyInfo properties={properties} />
        </div>

        <div className="bg-base-200 rounded-2xl p-10 my-15">
          <h1 className="text-[22px] text-secondary-focus font-bold mb-1">
            Rate the Property
          </h1>

          <Rating
            style={{ maxWidth: 240 }}
            value={rating}
            onChange={myRatings ? undefined : setRating}
            readOnly={!!myRatings}
            isRequired
          />

          <div className="mb-5"></div>

          <form onSubmit={handleRatingSubmit}>
            <textarea
              className="bg-base-100 w-full resize-none rounded-md text-primary p-2.5"
              rows={2}
              placeholder="Description"
              name="description"
              defaultValue={
                myRatings ? myRatings.description || "No Description added" : ""
              }
              readOnly={!!myRatings}
            ></textarea>

            {!myRatings && (
              <button className="text-white font-semibold bg-secondary py-3.5 rounded-sm px-[30px] hover:bg-primary duration-400 cursor-pointer mt-1 text-center inline-block">
                <span className="flex gap-2 items-center">
                  <MdOutlineSubdirectoryArrowRight />
                  Rate Now
                </span>
              </button>
            )}
          </form>
        </div>

        <div>
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] text-primary font-bold text-center">
            Other's Ratings
          </h2>
          <div className="flex flex-col gap-2">
            {ratingReviews.length === 0 && (
              <h2 className="text-center text-secondary-content mt-5">
                No ratings yet.
              </h2>
            )}

            {ratingReviews.map((ratingReview) => (
              <RatingCard key={ratingReview._id} ratingReview={ratingReview} />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col ml-0 lg:ml-5">
        <SellerInfo properties={properties} />

        <section className="mt-10">
          <PropertyInfo properties={properties} />
        </section>

        <section className="mt-10">
          <Help />
        </section>
      </div>
    </div>
  );
};

export default PropertyDetailsContainer;
