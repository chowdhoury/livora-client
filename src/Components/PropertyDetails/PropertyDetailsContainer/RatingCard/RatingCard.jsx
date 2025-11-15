import { Rating } from "@smastrom/react-rating";

const RatingCard = ({ ratingReview }) => {
  const { userEmail, rating, description, createdAt } = ratingReview;
  return (
    <div className="bg-base-200 rounded-2xl p-10">
      <h1 className="text-secondary font-bold mb-1">
        {userEmail.slice(0, 1) + "*****@" + userEmail.split("@")[1] + " "}
        on {createdAt.split("T")[0]}
      </h1>
      <div>
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      </div>
      <p className="mt-2">{description || "Review not given by the user."}</p>
    </div>
  );
};

export default RatingCard;
