
import React from 'react';
import CustomButton from '../components/CustomButton';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/cart';
import { useHistory } from 'react-router-dom';

const CartDropdown = () => {

   const { cartItems, toggleCartHidden } = React.useContext(CartContext)
   const history = useHistory();
  
   return (
      <div className='cart-dropdown'>
         <div className='cart-items'>
            {
               cartItems.length > 0 ? 
               cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)
               : 
               <span className='empty-message'>Your cart is empty</span>
            }
            <CustomButton onClick={() => {
               history.push('/checkout')
               toggleCartHidden()
               }}>go to checkout</CustomButton>
         </div>
      </div>
   )  
};

export default CartDropdown;
