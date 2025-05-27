import "./HeroImgStyles.css";
import React from "react";
import Hero from "../assets/Hero.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Hero} alt="Hero" />
      </div>
      <div className="content">
        <p>HI, I'M BENJU POKHREL.</p>
        <h1>React Developer.</h1>
        <div className="button-group">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
