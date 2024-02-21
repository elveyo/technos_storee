import React, { useEffect } from "react";
import Products from "../components/Products";
import SelectBar from "../components/SelectBar";
import Search from "../components/Search";
import { client } from "../lib/sanityClient";

const products = ({ products }) => {
  return (
    <div className="products-page">
      <Search />
      <SelectBar />
      <Products products={products} />
    </div>
  );
};
export async function getServerSideProps() {
  const products = await client.fetch(`*[_type == "product"]`);

  return {
    props: {
      products,
    },
  };
}
export default products;
