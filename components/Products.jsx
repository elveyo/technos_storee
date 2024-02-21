import React, { useEffect } from "react";
import Product from "./Product";
import { searchAtom, fetchedProducts } from "../lib/jotaiStore";
import { useAtom } from "jotai";
import { client, urlFor } from "../lib/sanityClient";

const Products = ({ products }) => {
  const [search, setSearch] = useAtom(searchAtom);
  const [jotaiProducts, setJotaiProducts] = useAtom(fetchedProducts);
  useEffect(() => {
    if (search !== "") {
      client
        .fetch(`*[_type == "product" && name match "${search}"]`)
        .then((data) => {
          setJotaiProducts(data);
          setSearch("");
        })
        .catch((err) => console.log(err));
    }
  }, [search]);
  return (
    <div className="products-container">
      <div className="products">
        {(jotaiProducts.length > 0 ? jotaiProducts : products).map(
          (product) => (
            <Product product={product} />
          )
        )}
      </div>
    </div>
  );
};

export default Products;
