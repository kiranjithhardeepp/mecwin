import React from "react";
import "./Footer.css";
import insta from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={insta} alt="logo" className="img" />
      <img src={linkedin} alt="logo" className="img" />
      <img src={facebook} alt="logo" className="img" />
    </div>
  );
};

export default Footer;
