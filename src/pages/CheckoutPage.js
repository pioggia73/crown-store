import React from 'react';
import {CartContext} from '../context/cart';
import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/stripe/StripeButton';

const CheckoutPage = () => {

   const {cartItems} = React.useContext(CartContext)
   
   const total = cartItems.reduce((total, cartItem ) => {
       return (total += cartItem.price * cartItem.amount) 
   }, 0)

   return (
      <section className=' section checkout-page'>
         <div className='checkout-header'>
            <div className='header-block'>
               <span>Product</span>
            </div>
            <div className='header-block'>
               <span>Description</span>
            </div>
            <div className='header-block'>
               <span>Price</span>
            </div>
            <div className='header-block'>
               <span>Quantity</span>
            </div>
            <div className='header-block'>
               <span>Remove</span>
            </div>
         </div>
         {cartItems.map(cartItem => <CheckoutItem key={cartItem.id } cartItem={cartItem} />)}
        
         <div className='total'>
            <span>TOTAL: ${total}</span>
         </div>
         <div className='test-warning'>
            *Please use the following test credit card fro the payment*
            <br />
            4242 4242 4242 4242 - Exp. any date in the future - CVV: any three digits

            
         </div>
         <StripeCheckoutButton price = {total}/> 
      </section>
   )
}

export default CheckoutPage;
