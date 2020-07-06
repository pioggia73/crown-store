import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  './styles/styles.scss';

// ****** pages ***** //
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';
import CheckoutPage from './pages/CheckoutPage';
// ****** components ***** //
import Navbar from './components/Navbar';

function App() {

  return (
    <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/shop'>
              <ShopPage />
            </Route>
            <Route path='/signin'>
              <SignInAndSignUpPage />
            </Route>
            <Route exact path='/checkout'>
              <CheckoutPage />
            </Route>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
