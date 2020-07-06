import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import {AuthContext} from '../context/user';
import {CartContext} from '../context/cart';
import { auth } from '../firebase/firebase.utils';
// ****** components ***** //
import CartIcon from '../components/CartIcon';
import CartDropdown from '../components/CartDropdown';

const Navbar = () => {

const {currentUser} = React.useContext(AuthContext);
const {hidden} = React.useContext(CartContext);

   return (
     <nav className="navbar">
       <div className="logo-container">
         <Link to="/">
           <img src={logo} alt="logo" />
         </Link>
       </div>
       <div className="links-container">
         <Link className="link" to="/shop">
           shop
         </Link>
         <Link className="link" to="/">
           contact
         </Link>
         {auth.currentUser ? (
           <div className="link" onClick={() => auth.signOut()}>
             sign out
           </div>
         ) : (
           <Link className="link" to="/signin">
             sign in
           </Link>
         )}
         <CartIcon />
       </div>
       { hidden ? null : <CartDropdown /> }
     </nav>
   );
};

export default Navbar;
