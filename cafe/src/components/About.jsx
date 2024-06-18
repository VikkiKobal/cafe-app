import "./About.scss";
import chef from "../assets/chef.jpg";
import chefs from "../assets/chefs.jpg";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-wrap">
          <div className="text-content">
            <h2 className="heading">Little Lemon</h2>
            <h3 className="location">India</h3>
            <div className="desc">
            Welcome to our family-owned Mediterranean restaurant, 
            where we bring you the rich flavors of traditional recipes with a modern twist. 
            Our passion for authentic Mediterranean cuisine is reflected in every dish we serve, 
            combining the freshest ingredients with innovative techniques. Join us for a dining experience 
            that honors our heritage while offering a contemporary culinary adventure.
            </div>
          </div>
          <section className="img-wrap">
            <img src={chef} alt="Chef cooking at restaurant" />
            <img src={chefs} alt="Two chefs smiling" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;