import { atom } from "jotai";

//products we get from server
export const fetchedProducts = atom([]);
//filtered products while searching or changing category
export const filteredProducts = atom([]);
//products added to cart
export const cartElements = atom([]);
//search string
export const searchAtom = atom("")
//category
export const AtomCategory = atom("All")
