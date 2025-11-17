import React from "react";
import "./team.css";
import Data from "../../Data";

const Team = () => {
  const teamitem = Data.team.map((item) => {
    return (
      <div className="col-md-4 box key={index} ">
        <button className="btn3">{item.list} Listing</button>
        <div className="details">
          <div className="img">
            <img src={item.cover} alt="cover" />
            <i className="fa fa-circle-check"></i>
          </div>
          <i className="fa fa-location"></i>
          <label>{item.location}</label>
          <h4>{item.name}</h4>
          <ul>
            {item.icon.map((icon, index) => (
              <li key={index}>{icon}</li>
            ))}
          </ul>
          <div className="button">
             <button className="btn3">
            <i className="fa fa-envelope"></i> Message
          </button>
          <button className="btn4">
            <i className="fa fa-phone-alt"></i>
          </button>
          </div>
         
        </div>
      </div>
    );
  });
  return (
    <section className="team background">
      <div className="container">
        <div className="row ">
          <h2>Our Featured Agents</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
            <br /> labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className="top">{teamitem}</div>
      </div>
    </section>
  );
};

export default Team;
