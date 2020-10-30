import React, { useEffect } from "react";
import "./HeroSection.css";
import wallet from "../svgs/wallet.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection({
  bg,
  textColor,
  flexDirection,
  image,
  title,
  heading,
  description,
  btnText,
  btnLink,
}) {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });
  return (
    <div
        data-aos="fade-up"
      className="hero-section"
      style={{ backgroundColor: bg, flexDirection: flexDirection }}
    >
      <div className="hero__text">
        <div className="hero__title">
          <h3>{title}</h3>
        </div>
        <div className="hero__heading" style={{ color: textColor }}>
          <h1>{ heading }</h1>
        </div>
        <div className="hero__description" style={{ color: textColor }}>
          <h4>
            { description }
          </h4>
        </div>
        <div>
          <Link to={ btnLink } exact>
            <button className="hero__btn">{ btnText }</button>
          </Link>
        </div>
      </div>
      <div className="hero__img-wrapper">
        <img className="hero__img" src={image} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
