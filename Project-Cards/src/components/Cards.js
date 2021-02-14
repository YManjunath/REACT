import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="The journey of a thousand miles begins with a single step."
              label="Islands"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="It’s not what you look at that matters. It’s what you see."
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Some beautiful paths can’t be discovered without getting lost."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Once the Travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life"
              label="Deserts"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
