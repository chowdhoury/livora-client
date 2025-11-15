import AboutUs from "./AboutUs/AboutUs";
import FeaturedProperties from "./FeaturedProperties/FeaturedProperties";
import HeroSlider from "./HeroSlider/HeroSlider";
import PerfectHome from "./PerfectHome/PerfectHome";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <section>
        <HeroSlider />
      </section>
      <section>
        <FeaturedProperties />
      </section>
      <section>
        <WhyUs />
      </section>
      <section>
        <PerfectHome />
      </section>
      <section>
        <AboutUs />
      </section>
    </div>
  );
};

export default Home;
