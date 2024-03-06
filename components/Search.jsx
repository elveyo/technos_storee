import React, { useRef , useState} from "react";
import { useRouter } from "next/router";

import { MdScreenSearchDesktop } from "react-icons/md";
import { useAtom } from "jotai";
import { fetchedProducts,filteredProducts } from "../lib/jotaiStore";
const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [products] = useAtom(fetchedProducts);
  const[jotaiProducts, setJotaiProducts] = useAtom(filteredProducts)
const inputRef = useRef(null);
  return (
    <div>
      <div className="search-holder">
        <div className="search">
          <input ref={inputRef} placeholder="Search" />
          <MdScreenSearchDesktop
            className="search-icon"
            onClick={() => {
              setSearch(inputRef.current.value);
              if (search.trim().length != 0) {
                const newProducts = products.filter(prod=>prod.name.includes(search));
                setJotaiProducts(newProducts)
              }
              router.push("/products");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
