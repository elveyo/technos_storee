import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { client } from "../lib/sanityClient";
function AboutProducts() {
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  useEffect(() => {
    setIsDomLoaded(true);
  });
  return (
    <div className="about-products">
      {isDomLoaded && (
        <ReactPlayer
          url={require("../assets/setup.mp4")}
          autoPlay={true}
          width="50%"
        />
      )}
      <div className="product-info">
        <p> Powerful gaming computers</p>
        <p> Beautiful RGB headphones with high quality sound</p>
        <p> Smooth and wide monitors</p>
        <p>Fast and interactive keyboards and mouses</p>
      </div>
    </div>
  );
}

export default AboutProducts;
