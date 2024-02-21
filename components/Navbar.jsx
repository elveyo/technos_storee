import React, { useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link";
import jotai from "jotai";
import { listElements } from "../lib/jotaiStore";
import { useAtom } from "jotai";
const Navbar = () => {
  const [navActive, isNavActive] = useState(false);
  const [homePage, isHomePage] = useState(false);
  const [list] = useAtom(listElements);

  const changeNavState = (e) => {
    if (window.scrollY > 200) {
      isNavActive(true);
    } else {
      isNavActive(false);
    }
  };
  useEffect(() => {
    if (window.location.pathname !== "/") {
      isHomePage(true);
    } else {
      isHomePage(false);
    }
    window.addEventListener("scroll", changeNavState);
    return () => removeEventListener("scroll", changeNavState);
  });
  return (
    <div className={navActive || homePage ? "navbar active" : "navbar"}>
      <div className="logo">Technos</div>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About us</Link>
      </ul>
      <div className="cart-div">
        {list.length > 0 ? (
          <div className="num-of-items">{list.length}</div>
        ) : (
          ""
        )}
        <FaClipboardList className="cart" />
      </div>
    </div>
  );
};

export default Navbar;
