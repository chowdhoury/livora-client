import React from "react";
import Slider from "../../Components/Slider/Slider";
import PerfectHome from "../../Components/PerfectHome/PerfectHome";
import WhyUs from "../../Components/WhyUs/WhyUs";
import About from "../../Components/About/About";
import SlideContainer from "../../Components/Featured/SlideContainer";

const Home = () => {
  return (
    <div>
      <section>
        <Slider />
      </section>
      <section>
        <SlideContainer/>
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
