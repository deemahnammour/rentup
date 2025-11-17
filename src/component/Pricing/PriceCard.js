import React from "react";
import Data from "../../Data";

const PriceCard = () => {
 
  return (
    <div className="content">
      {Data.price.map((item, index) => {
        return (
          <div className="box" key={index}>
            <div className="toptbn">
              <button className="btn3">{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              
              <span>$</span> {item.price}
            </h1>
            <p>{item.ptext}</p>
            <ul>
              {item.list.map((val, i) => {
                const { icon, text, change } = val;
                return (
                  <li key={i}>
                    <label
                      htmlFor=""
                      style={{
                        background:
                          change === "color" ? "#dc35451d" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
            <button className="btn5" style={{ background:
                          item.plan === "Standard" ? "#dc35451d" : "#fff",
                        color: item.plan === "Standard" ? "#dc3848" : "#27ae60",}}> Start {item.plan}</button>
          </div>
        );
      })}
    </div>
  );
};

export default PriceCard;
