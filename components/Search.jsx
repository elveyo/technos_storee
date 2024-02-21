import React, { useRef } from "react";
import { useRouter } from "next/router";

import { MdScreenSearchDesktop } from "react-icons/md";
import { useAtom } from "jotai";
import { searchAtom } from "../lib/jotaiStore";
const Search = () => {
  const router = useRouter();
  const searchRef = useRef();
  const [search, setSearch] = useAtom(searchAtom);

  return (
    <div>
      <div className="search-holder">
        <div className="search">
          <input ref={searchRef} placeholder="Search" />
          <MdScreenSearchDesktop
            className="search-icon"
            onClick={() => {
              setSearch(searchRef.current.value);
              router.push("/products");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
