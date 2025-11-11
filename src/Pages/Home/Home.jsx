import React from "react";
import Slider from "../../Components/Slider/Slider";
import PerfectHome from "../../Components/PerfectHome/PerfectHome";
import WhyUs from "../../Components/WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <section>
        <Slider />
      </section>
      <section>
        <WhyUs/>
      </section>
      <section>
        <PerfectHome/>
      </section>
    </div>
  );
};

export default Home;
