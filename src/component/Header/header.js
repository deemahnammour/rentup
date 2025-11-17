import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <h2>Search Your Next Home</h2>
        <p>Find new & featured property located in your local city.</p>

          <form className="flex">
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input type="text" placeholder="Property Type" />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
          </form>
      </div>
    
        
        
       
      
    </section>
  );
};

export default Header;
