import React from 'react'
import { useAtom } from 'jotai';
import { cartElements } from '../lib/jotaiStore';
import Cart from '../components/Cart';
import BoxSvg from '../assets/empty-box.svg'

function cart() {
    const[list,setList] = useAtom(cartElements);
    let total=0;
    if(list.length > 0){
      list.map(prod=>total+=prod.prize);
    }

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
        </div>
        <p className='total'>Total:{total}</p>
        <button className='purchase'>Purchase</button>
        
        </>

    )}
   
    </div>
  )
}

export default cart