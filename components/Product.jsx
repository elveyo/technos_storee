import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { urlFor } from "../lib/sanityClient";
import Link from "next/link";
import joti, { useAtom } from "jotai";
import { cartElements } from "../lib/jotaiStore";

const Product = ({ product }) => {
  const[list, setList] = useAtom(cartElements);

  let addToCart = (e) => {
    e.stopPropagation()
    for ( let prod of list){
      if(prod._id === product._id) {
        return
      };
    }
    setList([...list, product]);
    localStorage.setItem(`${product.name}`, JSON.stringify(product))
    }

  const { _id, images, price, name } = product;
  return (
    <>
      <Link href={"/products/" + _id}>
        <div className="product">
          <img src={urlFor(images[0])}></img>
          <h3>{name}</h3>
          <div className="prize-cart" >
            <p>{price}.00$</p>
            <div onClick={addToCart}>
              <FaClipboardList/>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
