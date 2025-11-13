import { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../../Auth/AuthContext/AuthContext";
import RatingCard from "../RatingCard/RatingCard";
import Filter from "../SearchFilterHelp/Filter";
import Help from "../SearchFilterHelp/Help";
import Search from "../SearchFilterHelp/Search";

const PropertyContainer = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [rating, setRating] = useState(0);
  const [properties, setProperties] = useState({});
  const [ratingReviews, setRatingReviews] = useState([]);
  const [myRatings, setMyRatings] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const description = form.description.value;

    if (rating === 0) {
      toast.warning("Please provide a rating before submitting.");
      return;
    }

    fetch("http://localhost:3000/api/ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        description,
        propertyId: id,
        userEmail: user?.email,
        createdAt: new Date(),
      }),
    })
    .then((res) => res.json())
    .then(() => {
      toast.success("Rating submitted successfully!");
      setRefresh(!refresh)
        // form.reset();
        // setRating(0);
      })
      .catch((err) => {
        toast.error("Failed to submit rating.");
        console.error(err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch property details
        const propertyRes = await fetch(
          `http://localhost:3000/api/properties/${id}`
        );
        const propertyData = await propertyRes.json();
        setProperties(propertyData);

        if (user?.email) {
          // Fetch other users' ratings
          const ratingsRes = await fetch(
            `http://localhost:3000/api/ratings/property/${id}?email=${user.email}`
          );
          const ratingsData = await ratingsRes.json();
          setRatingReviews(ratingsData);

          // Fetch user's own rating
          const myRatingRes = await fetch(
            `http://localhost:3000/api/myRatings/property/${id}?email=${user.email}`
          );
          const myRatingData = await myRatingRes.json();

          setMyRatings(myRatingData);
          setRating(myRatingData?.rating || 0);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, user?.email, refresh]);


  return (
    <div className="w-[95%] lg:w-9/12 mx-auto my-5 lg:my-30 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* LEFT SIDE */}
      <div className="col-span-2">
        {/* Property Image */}
        <img
          src={properties.image}
          className="w-full h-[500px] object-cover rounded-2xl"
          alt="property"
        />

        {/* Property Description */}
        <div className="bg-base-200 rounded-2xl p-10 my-15">
          <h2 className="text-[50px] text-primary font-bold">
            {properties.name}
          </h2>
          <h1 className="text-[22px] text-secondary-focus font-bold mb-1">
            About This Property
          </h1>
          <p className="text-secondary-content">{properties.description}</p>
        </div>

        {/* Mobile Search + Filter */}
        <div className="grid grid-cols-1 lg:hidden md:grid-cols-2 gap-10">
          <Search />
          <Filter />
        </div>

        {/* Rating Section */}
        <div className="bg-base-200 rounded-2xl p-10 my-15">
          <h1 className="text-[22px] text-secondary-focus font-bold mb-1">
            Rate the Property
          </h1>

          {/* Rating Stars */}
          <Rating
            style={{ maxWidth: 240 }}
            value={rating}
            onChange={myRatings ? undefined : setRating}
            readOnly={!!myRatings}
            isRequired
          />

          <div className="mb-5"></div>

          {/* Rating Form */}
          <form onSubmit={handleRatingSubmit}>
            <textarea
              className="bg-white w-full resize-none rounded-md text-primary p-2.5"
              rows={2}
              placeholder="Description"
              name="description"
              {...(!myRatings ? {} : { defaultValue: myRatings?.description || "No Description added" })}
              readOnly={!!myRatings}
            ></textarea>

            {/* CONDITIONAL RENDERING FIX (best way) */}
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

        {/* Other Ratings */}
        <div>
          <h2 className="text-[50px] text-primary font-bold text-center">
            Other's Ratings
          </h2>
          <div className="flex flex-col gap-2">
            {ratingReviews.length === 0 && (
              <h2 className="text-center text-secondary-content mt-5">
                No ratings have been submitted for this property yet.
              </h2>
            )}
            {ratingReviews.map((ratingReview) => (
              <RatingCard key={ratingReview._id} ratingReview={ratingReview} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex flex-col ml-0 lg:ml-5">
        <Search properties={properties} />
        <section className="mt-10">
          <Filter properties={properties} />
        </section>
        <section className="mt-10">
          <Help />
        </section>
      </div>
    </div>
  );
};

export default PropertyContainer;
