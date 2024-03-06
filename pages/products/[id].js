import React, { useState } from "react";
import { client, urlFor } from "../../lib/sanityClient";
import SelectBar from "../../components/SelectBar";
import Search from "../../components/Search";

import OtherImages from "../../components/OtherImages";
import AboutProduct from "../../components/AboutProduct";

export const Product = ({ product }) => {
  product ? console.log(product.about[0].children[0]) : console.log("no data");
  const [currentImg, setCurrentImg] = useState(urlFor(product.images[0]));

  return (
    <>
          <Search />
      <SelectBar />
      <div className="product-page">
        <div className="product-images">
          <div className="main-image">
            <img src={currentImg} onMouseEnter={(e) => console.log(e)}></img>
          </div>
          <OtherImages
            product={product}
            currentImg={currentImg}
            setCurrentImg={setCurrentImg}
          />
        </div>
        <AboutProduct product={product} />
      </div>
    </>
  );
};
export const getStaticPaths = async () => {
  const products = await client.fetch('*[_type=="product"]');
  const paths = products.map((product) => ({
    params: {
      id: product._id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const query = `*[_type == "product" && _id == '${id}'][0]`;

  const product = await client.fetch(query);

  return {
    props: { product },
  };
};
export default Product;
