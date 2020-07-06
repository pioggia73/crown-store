import React from 'react';

function getCartFromLocalStorage() {
    return localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
 }

const CartContext = React.createContext();

const CartProvider = ({children}) => {

   const [hidden, setHidden] = React.useState(true);
   const [cartItems, setCart] = React.useState(getCartFromLocalStorage());
   
   React.useEffect(()=> {
       localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])

   // ****** toggle cart
   const toggleCartHidden = () => {
   setHidden(!hidden)
   };

   // ***** INCREASING AMOUNT

   const increaseAmount = (id) => {
      const tempCartItem = [...cartItems].map(cartItem => {
         return cartItem.id === id ? {...cartItem, amount: cartItem.amount+1} : {...cartItem}
      })
      setCart(tempCartItem)
     }
   // ****** DECREASE AMOUNT
   const decreaseAmount = (id) => {
      const tempCartItem = [...cartItems].map(cartItem => {
         return cartItem.id === id ? { ...cartItem, amount: cartItem.amount - 1 } : { ...cartItem }
      })
      setCart(tempCartItem)
   };

   // ***** ADDING ITEMS TO CART
   const addItem = itemToAdd => {
      const { id, imageUrl, name, price } = itemToAdd
      let tempItemToAdd = [...cartItems].find(cartItem => cartItem.id === itemToAdd.id)
      if (tempItemToAdd) {
         increaseAmount(id)
         return
      } else {
         const newItem = {id, imageUrl, name, price, amount: 1}
         const newCartItems = [...cartItems, newItem]
         setCart(newCartItems)
      }
   };

   // ***** CLEARING CART
   const clearCart = (id) => {
      
      const tempItemToRemove = cartItems.filter(cartItem => cartItem.id !== id)
      setCart(tempItemToRemove)
   }

   // ***** REMOVING ITEMS FROM CART
   const removeItem = (id, amount) => {
      if (amount === 1 ) {
         clearCart(id)
         return
      }      
      else {
         const newCart = [...cartItems].map(cartItem => {
            return cartItem.id === id ? {...cartItem, amount: cartItem.amount - 1} : {...cartItem}
         })
         setCart(newCart)
      }  
   };
  
   return   <CartContext.Provider 
               value = {{
                  hidden,
                  cartItems,
                  toggleCartHidden,
                  addItem, 
                  increaseAmount,
                  removeItem,
                  decreaseAmount,
                  clearCart
               }}  
               >
               {children}
            </CartContext.Provider> 
}

export {CartContext, CartProvider};
