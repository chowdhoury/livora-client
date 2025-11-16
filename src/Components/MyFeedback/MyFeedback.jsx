import MyFeedbackContainer from "./MyFeedbackContainer/MyFeedbackContainer";
import MyFeedbackHero from "./MyFeedbackHero/MyFeedbackHero";

const MyFeedback = () => {
  return (
    <div>
      <title>My Feedbacks</title>
      <section>
        <MyFeedbackHero />
          </section>
          <section>
              <MyFeedbackContainer/>
          </section>
    </div>
  );
};

export default MyFeedback;
