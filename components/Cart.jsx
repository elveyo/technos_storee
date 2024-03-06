import React from 'react'
import { urlFor } from '../lib/sanityClient'
import { IoIosRemoveCircle } from "react-icons/io";
import { cartElements } from '../lib/jotaiStore';
import { useAtom } from 'jotai';
import {motion, AnimatePresence} from 'framer-motion';
const Cart = ({product}) => {
  const [list,setList] = useAtom(cartElements)
  
  const removeItem = ()=>{
    localStorage.removeItem(product.name);
    setList(list.filter(prod=>prod._id != product._id))
  }
  return (
    <AnimatePresence>
    <motion.div 
    key={product._id}
            initial={{ opacity:1 }}
            animate={{ opacity:1}}
            exit={{ opacity:0}}
          className='cart-item'>
        <img src={urlFor(product.images[0])}></img>
        <p>{product.name}</p>
        <p>{product.price}$</p>
        <IoIosRemoveCircle color="white" fontSize="50px" fontWeight="700" onClick={removeItem}/>

    </motion.div>
    </AnimatePresence>
  )
}

export default Cart