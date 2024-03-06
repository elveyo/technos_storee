import React, { useEffect } from "react";
import Product from "./Product";
import { searchAtom, fetchedProducts, filteredProducts, AtomCategory } from "../lib/jotaiStore";
import { useAtom } from "jotai";
import { client, urlFor } from "../lib/sanityClient";

const Products = ({ products }) => {
  const [jotaiProducts, setJotaiProducts] = useAtom(filteredProducts);
  const [category] = useAtom(AtomCategory)
  useEffect(()=>{
    if(category == "All")setJotaiProducts(products)
  },[]);
  
  return (
    <div className="products-container">
      <div className="products">
        {jotaiProducts.length > 0 && jotaiProducts.map(
          (product) => (
            <Product key={product._id} product={product} />
          )
        )}
        {!jotaiProducts.length && <h1 className="no-result">No results!</h1>}

      </div>
    </div>
  );
};

export default Products;
