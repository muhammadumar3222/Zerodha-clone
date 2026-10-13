import Navbar from "./Nabar.jsx";
import Hero from "./Hero.jsx";
import Stats from "./Stats.jsx";
import Eduction from "./Eduction.jsx";
import Awards from "./Awards.jsx";
import Pricing from "./Pricing.jsx";
import OpenAccout from "../OpenAccout.jsx";
import Footer from "../Footer.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Eduction />
      <OpenAccout />
    </>
  );
};

export default HomePage;
