import React from 'react';
import HeroSection from '../HeroSection';
import "./Home.css";
import wallet from "../../svgs/wallet.svg";
import clipboard from "../../svgs/clipboard.svg";
import { makeDeposit, easySetup, secure } from "../../data/data";

function Home() {
    return (
        <div className="home">
            <HeroSection {...makeDeposit} />
            <HeroSection {...easySetup} />
            <HeroSection {...secure} />
        </div>
    )
}

export default Home;
