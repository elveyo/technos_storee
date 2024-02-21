import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const AboutProduct = ({ product }) => {
  return (
    <div className="about-product-container">
      <h1>{product.name}</h1>
      <div className="about-product-text">
        {product.about &&
          product.about.map((child) => <p>{child.children[0].text}</p>)}
      </div>
      <div className="add-to-list">
        <div className="amount-select">
          <input value="1"></input>
          <div>
            <MdArrowDropUp />
            <MdArrowDropDown />
          </div>
        </div>
        <button>Add to list</button>
      </div>
    </div>
  );
};

export default AboutProduct;
