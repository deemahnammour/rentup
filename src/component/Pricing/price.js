import React from "react";
import "./price.css";
import PriceCard from "./PriceCard"

const price = () => {
  return (
    <section className="price padding">
      <div className="container">
        <h2>Select Your Package</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <br /> labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <PriceCard/>
        
      </div>
    </section>
  );
};

export default price;
