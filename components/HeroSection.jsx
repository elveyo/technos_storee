import React, { useRef } from "react";
import Background from "../assets/gaming-pic.jpg";
import { atom } from "jotai";
function HeroSection() {
  const navbar = useRef(null);
  const navRef = atom(navbar);
  return (
    <div className="hero-section">
      <img src={Background.src} className="background" />
      <div className="text">
        <p>YOU WANT NEW, POWERFUL AND CHEAP GAMING EQUIPMENT?</p>
        <button>CHECK WHAT WE HAVE TO OFFER!</button>
      </div>
    </div>
  );
}

export default HeroSection;
