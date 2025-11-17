import React from "react";
import "./footer.css";
import Data from "../../Data";
import nav from "./../images/nav.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top ">
        <div>
          <h2>Do You Have Questions ?</h2>
          <p>We’ll help you to grow your career and growth.</p>
        </div>
        <div>
          <button className="contact-btn">Contact Us Today</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-column about">
          <div className="logo">
            <img src={nav} alt="nav" />
          </div>
          <h4>Do You Need Help With Anything?</h4>
          <p>
            Receive updates, hot deals, tutorials, discounts sent straight in
            your inbox every month
          </p>

          <div className="subscribe">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
          
        </div>

        {Data.footer.map((section, index) => (
          <div className="footer-column link " key={index}>
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-end">
        <p>© 2021 RentUP. Design By Deemah Nammour</p>
      </div>
    </footer>
  );
};

export default Footer;
