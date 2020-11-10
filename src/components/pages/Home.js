import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import "./Home.css";
import wallet from "../../svgs/wallet.svg";
import clipboard from "../../svgs/clipboard.svg";
import { makeDeposit, easySetup, secure } from "../../data/data";
import Navbar from "../Navbar"

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });
  return (
    <div className="home">
      <Navbar />
      <div data-aos="fade-in">
        <HeroSection {...makeDeposit} />
      </div>
      <div data-aos="fade-up">
        <HeroSection {...easySetup} />
      </div>
      <div data-aos="fade-up">
        <HeroSection {...secure} />
      </div>
    </div>
  );
}

export default Home;
