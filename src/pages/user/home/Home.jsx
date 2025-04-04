import Blogs from "./section/Blogs";
import FeatureProducts from "./section/FeatureProducts";
import Hero from "./section/Hero";
import OurProducts from "./section/JustArrived";

const Home = () => {
  return (
    <>
      <Hero />
      <OurProducts />
      <FeatureProducts />
      <Blogs /> 
    </>
  );
};

export default Home;
