import React from "react";
import Headphones from "../assets/headphones2.svg";
import Keyboard from "../assets/keyboard.svg";
import Mouse from "../assets/mouse.svg";
import Monitor from "../assets/monitor.svg";
import Case from "../assets/case2.svg";

const SelectBar = () => {
  return (
    <div className="select-bar">
      <img src={Headphones.src}></img>
      <img src={Keyboard.src}></img>
      <img src={Monitor.src}></img>
      <img src={Mouse.src}></img>
      <img src={Case.src}></img>
    </div>
  );
};

export default SelectBar;
