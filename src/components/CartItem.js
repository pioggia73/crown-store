import React from 'react';
//import {CartContext} from '../context/cart';

const CartItem = ({item: {imageUrl, name, price, amount}}) => {
  
   return (
      <div className='cart-item'>
         <img src={imageUrl} alt = {name}/>
         <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{amount} x ${price}</span>
         </div>
      </div>
      
   )
}

export default CartItem;
