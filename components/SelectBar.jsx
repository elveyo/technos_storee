import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {useAtom} from 'jotai'
import { AtomCategory, fetchedProducts } from "../lib/jotaiStore";
import { filteredProducts } from "../lib/jotaiStore";


const categories = [
  "All",
  "Computer",
  "Keyboard",
  "Mouse",
  "Headphones",
  "Monitor",
  
]
const SelectBar = () => {
  const [products,setProducts] = useAtom(fetchedProducts)
  const[filterProducts, setFilterProducts] = useAtom(filteredProducts)
  const [category, setCategory] = useAtom(AtomCategory);
  const router = useRouter();
  


  const filterData = (ctg)=>{
    setCategory(ctg)  
    if(ctg == "All"){
      setFilterProducts(products)
    }else{
      let filteredProducts = products.filter(prod=>prod.category === ctg.toLowerCase())
     setFilterProducts(filteredProducts);
    }
    //if user changes category from product page, it needs to be redirected to product pages
    router.push("/products")

  }
  return (
    <div className="select-bar">
      {categories.map(ctg=><button className={ctg === category ? "active-btn" : "not-active"} onClick={()=>filterData(ctg)}>{ctg}</button>)}
    </div>
  );
};

export default SelectBar;
