import React from 'react';
import {BsBag} from 'react-icons/bs';
import {CartContext} from '../context/cart';

const CartIcon = () => {

   const { toggleCartHidden, cartItems} = React.useContext(CartContext)

   let cartAmount = cartItems.reduce((total, cartItem) =>
      total += cartItem.amount, 0)
      
   return (
      <div className='cart-icon' onClick={toggleCartHidden}>
         <BsBag className='shopping-icon' />
         <span className='item-count'>{cartAmount}</span>
      </div>
   )
};

export default CartIcon;
