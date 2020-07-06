import React from 'react';
import { CartContext } from '../context/cart';

const CheckoutItem = ({cartItem}) => {

   const {id, imageUrl, price, amount, name, description} = cartItem

   const {clearCart, removeItem, increaseAmount} = React.useContext(CartContext);

   return (
      <div className='checkout-item'>
         <div className='image-container'>
            <img src={imageUrl}  alt={name}/>
         </div>
         <span className='name'>{name}</span>
         <span className='descripton'>{description}</span>
         <span className='price'>${price}</span>
         <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(id, amount)}>&#10094;</div> 
            <span className='value'>{amount}</span>
            <div className='arrow' onClick={() => increaseAmount(id)}>&#10095;</div>
         </span>
         <div className='remove-button' onClick={() => clearCart(id)}>&#10005;</div>
      </div>
   )
}

export default CheckoutItem;
