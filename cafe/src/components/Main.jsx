import About from "./About";
import HeroSection from "./HeroSection";
import "./Main.css";
import SpecialsMenu from "./SpecialsMenu";
import Testimonials from "./Testimonials";
const Main = () => {
  return (
    <main>
      <HeroSection />
      <SpecialsMenu />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;