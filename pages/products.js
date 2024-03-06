import React, { useEffect } from "react";
import Products from "../components/Products";
import SelectBar from "../components/SelectBar";
import Search from "../components/Search";
import { client } from "../lib/sanityClient";
import { useAtom } from "jotai";
import { fetchedProducts, filteredProducts } from "../lib/jotaiStore";
const products = ({ products }) => {
  const [fetchProducts,setFetchProducts] = useAtom(fetchedProducts);
  const [filterProducts,setFilterProducts] = useAtom(filteredProducts)
  useEffect(()=>{
    setFetchProducts(products)
  },[])
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
