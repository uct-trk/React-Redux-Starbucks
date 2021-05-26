import React from "react";
import "./home.css";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Featured from "../Featured/Featured";
import Info from "../Info/Info";
import Policy from "../Policy/Policy";

const Home = () => {
  return (
    <div className="homeScreen">
      <Fade>
        <div className="homeScreen__top">
          <h4>
            Facial coverings are now optional in our stores for our fully
            vaccinated customers, following CDC guidance, except where local
            regulations require it by law. <Link>Learn more</Link>
          </h4>
        </div>
      </Fade>
      <Fade>
        <div className="homeScreen__bottom">
        <div className="homeScreen__bottomLeft">
            <h4>FREE COFFEE IS A TAP AWAY</h4>
            <p>Join now to start earning Rewards.*</p>
            <button>Join now</button>
        </div>
        <div className="homeScreen__bottomRight">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png" alt="first" />
        </div>
        </div>
      </Fade>
      <Fade>
          <Heading heading="TODAY IS YOURS"/>
      </Fade>
      <div className="homeScreen__featured">
          <Fade>
              <Featured
                title="SUMMER FOREVER"
                info="Go vibrant with a Dragon Drink, Star Drink or Pink Drink, all made with real fruit pieces and coconutmilk."
                link="Order coconutmilk drink"
                path=""
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71456.jpg"
                background="#f0ebe0"
                color="#1e3932"
                className="featured__hoverLight"/>
          </Fade>

          <Fade>
              <Featured
                title="GOOD MOOD MADE"
                info="Sip your way to a summer of so much yes. Try our fun new Strawberry Funnel Cake Frappuccino® drink."
                link="Order Frappuccino drink"
                path=""
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71054.jpg"
                background="#f0ebe0"
                color="#1e3932"
                order="2"
                className="featured__hoverLight"/>
          </Fade>
      </div>
      <Fade>
          <Heading heading="MORE TO DISCOVER"/>
      </Fade>

      <Fade>
          <div className="homeScreen__discover">
              <Info
                title="Order and pick up. Easy as that"
                info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
                link="See pickup options"
                path=""
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg"
                background="#d4e9e4"
                color="#1e3932"
                className="featured__hoverLight"/>

                <Info
                title="Let us bring the picnic to you"
                info="Enjoy $0 Delivery Fee on Starbucks orders over $20 on UberEats through May 31.**"
                link="Order now"
                path=""
                image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71057.jpg"
                background="#d4e9e4"
                color="#1e3932"
                className="featured__hoverLight"/>
          </div>
      </Fade>
      
      <Fade>
        <div className="homeScreen__bottom" style={{marginTop: "35px",background: "#f0ebe0"}}>
        <div className="homeScreen__bottomLeft"style={{background: "#f0ebe0"}}>
            <h4>Military Appreciation Month</h4>
            <p>For each Military eGift Card sold in May, we’ll donate $5 to support the mental health and well-being of our military community.***</p>
            <button>Send an eGift</button>
        </div>
        <div className="homeScreen__bottomRight">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71459.jpg" alt="final" />
        </div>
        </div>
      </Fade>
      <Policy/>
    </div>
  );
};

export default Home;
