import React from 'react'
import { useAtom } from 'jotai';
import { listElements } from '../lib/jotaiStore';
import Cart from '../components/Cart';
import BoxSvg from '../assets/empty-box.svg'

function cart() {
    const[list,setList] = useAtom(listElements);

  return (
    <div className="cart-page">
    {list.length == 0 ? 
    (<><h1 className="info-text">Your list is empty!</h1>
    <img src={BoxSvg.src}></img>
    </>) : (
      <>
       <h1  className="info-text">Here are your products!</h1>
        <div className="cart-products">
          {list.map(prod=><Cart product={prod}></Cart>)}
        </div></>
    )}
   
    </div>
  )
}

export default cart