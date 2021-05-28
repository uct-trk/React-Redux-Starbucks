import React from "react";
import "./featuredScreen.css";
import { Fade } from "react-awesome-reveal";
import Heading from "./../Heading/Heading";
import Info from "./../Info/Info";
import Featured from "../Featured/Featured";

const FeaturedScreen = () => {
  return (
    <div className="featuredScreen">
      <Fade>
        <Heading className="head" heading="HAPPY PLACE FOUND" />
      </Fade>
      <Fade>
        <Featured
          title="NEW STRAWBERRY FUNNEL CAKE FRAPPUCCINO® DRINK"
          info="Topped with real funnel-cake pieces and strawberry puree."
          link="Order Frappuccino drink"
          path=""
          image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71091.jpg"
          background="#f0ebe0"
          color="#1e3932"
          order="2"
          className="featured__hoverLight"
        />
      </Fade>
      <Fade>
        <div className="featuredScreen__discover">
          <Info
            title="Mango Dragonfruit Lemonade Starbucks Refreshers® beverage"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71092.jpg"
            info="Vibrant and refreshing with real dragonfruit pieces and lemonade."
            link="Order iced bev"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />

          <Info
            title="Guava Passionfruit Coconutmilk Drink"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71093.jpg"
            info="Bursting with tropical flavors combined with creamy coconutmik. "
            link="Order coconutmilk drink"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />
        </div>
      </Fade>

      <Fade>
        <div className="featuredScreen__discover margin-top">
          <Info
            title="Cold Brew"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71094.jpg"
            info="Our signature slow-steeped cold brew with a super-smooth taste."
            link="Order cold brew"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />

          <Info
            title="NEW Chocolate Almondmilk Shaken Espresso"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71095.jpg"
            info="Starbucks® Blonde Espresso, cocoa and notes of malt shaken together and topped with almondmilk."
            link="Order shaken espresso"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />
        </div>
      </Fade>
      <Fade>
        <Heading className="head" heading="SAVOR THE DAY" />
      </Fade>
      <Fade>
        <div className="featuredScreen__discover margin-top">
          <Info
            title="Bacon, Gouda & Egg Sandwich"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71096.jpg"
            info="Applewood-smoked bacon layered with aged Gouda and a Parmesan frittata."
            link="Order bacon sandwich"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />

          <Info
            title="Impossible™ Breakfast Sandwich"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71097.jpg"
            info="Impossible™ Sausage Made from Plants with a cage-free fried egg and aged Cheddar.*"
            link="Order Impossible™ sandwich"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />
        </div>
      </Fade>
    </div>
  );
};

export default FeaturedScreen;
