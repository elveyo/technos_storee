import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { urlFor } from "../lib/sanityClient";
import Link from "next/link";
const Product = ({ product }) => {
  console.log("in productTTTTTTTTTTTTTTTTs");
  const { _id, images, prize, name } = product;
  return (
    <>
      <Link href={"/products/" + _id}>
        <div className="product">
          <img src={urlFor(images[0])}></img>
          <h3>{name}</h3>
          <div className="prize-cart">
            <p>{prize}.00$</p>
            <div>
              <FaClipboardList />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
