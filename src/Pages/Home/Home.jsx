import React from "react";
import Slider from "../../Components/Slider/Slider";
import PerfectHome from "../../Components/PerfectHome/PerfectHome";
import WhyUs from "../../Components/WhyUs/WhyUs";
import About from "../../Components/About/About";

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
      <section>
        <About/>
      </section>
    </div>
  );
};

export default Home;
