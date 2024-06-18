import "./HeroSection.css";
import HeroImage from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <section className="hero-section-wrap">
          <div className="text-content">
            <h2 className="title">Little Lemon</h2>
            <h3 className="sup-script">India</h3>
            <p className="desc">
            "Lorem ipsum, representing the pain of sitting, 
            is the work of elite scholars, but from time to time, 
            it is necessary to endure pain and great hardship."
            </p>
            <Link className="cta" to="/reservation">
              Reserve a table
            </Link>
          </div>
          <div className="image-wrap">
            <img src={HeroImage} alt="Restaurant Food Platter" loading="lazy" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;