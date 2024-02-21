import React from "react";
import { client, urlFor } from "../lib/sanityClient";

const OtherImages = ({ product, currentImg, setCurrentImg }) => {
  return (
    <>
      <div className="other-images">
        {product.images.map((image) => {
          return (
            <img
              src={urlFor(image)}
              onClick={() => setCurrentImg(urlFor(image))}
              className={
                urlFor(image).options.source.asset._ref ===
                currentImg.options.source.asset._ref
                  ? "selected"
                  : ""
              }
            ></img>
          );
        })}
      </div>
    </>
  );
};

export default OtherImages;
